import type { ReissueResponse, JoinRequest, JoinResponse, getFoodResponse, RegisterFoodRequest, RegisterFoodResponse, getMyMbtiResponse } from './api.Prop';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const jsonHeaders = {
	'Content-Type': 'application/json',
	credentials: 'include',
};

async function customFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
	const accessToken = localStorage.getItem('accessToken');
	const headers = {
		...jsonHeaders,
		Authorization: `Bearer ${accessToken}`,
		...(init?.headers || {}),
	};

	const response = await fetch(input, { ...init, headers });

	if (response.status === 401) {
		// try reissue
		const refreshToken = localStorage.getItem('refreshToken');
		if (!refreshToken) throw new Error('No refresh token');

		const reissueResponse = await fetch(`${API_BASE_URL}/api/auth/reissue`, {
			method: 'POST',
			headers: jsonHeaders,
			body: JSON.stringify({ refreshToken }),
		});

		if (!reissueResponse.ok) throw new Error('Token reissue failed');

		const tokens: ReissueResponse = await reissueResponse.json();
		localStorage.setItem('accessToken', tokens.accessToken);
		localStorage.setItem('refreshToken', tokens.refreshToken);

		const retryHeaders = {
			...jsonHeaders,
			Authorization: `Bearer ${tokens.accessToken}`,
			...(init?.headers || {}),
		};

		return fetch(input, { ...init, headers: retryHeaders });
	}

	return response;
}

export const login = async (data: JoinRequest): Promise<JoinResponse> => {
	const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
		method: 'POST',
		headers: jsonHeaders,
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`로그인 실패: ${errorText}`);
	}

	const result = await response.json();
	return result;
};

export const join = async (data: JoinRequest): Promise<JoinResponse> => {
	const response = await fetch(`${API_BASE_URL}/api/auth/join`, {
		method: 'POST',
		headers: jsonHeaders,
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`회원가입 실패: ${errorText}`);
	}

	const result = await response.json();
	return result;
};

export const getFoods = async (): Promise<getFoodResponse[]> => {
	const response = await customFetch(`${API_BASE_URL}/api/foods`, {
		method: 'GET',
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(` 실패: ${errorText}`);
	}

	return response.json();
};

export const registerFood = async (data: RegisterFoodRequest): Promise<RegisterFoodResponse> => {
	const response = await fetch(`${API_BASE_URL}/api/foods/register`, {
		method: 'POST',
		headers: jsonHeaders,
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`식품 등록 실패: ${errorText}`);
	}

	const result = await response.json();
	return result;
};

export const consumeFood = async (foodName: number): Promise<void> => {
	const response = await customFetch(`${API_BASE_URL}/api/foods/consume`, {
		method: 'PUT',
		headers: jsonHeaders,
		body: JSON.stringify({ foodName }),
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`식품 소비 실패: ${errorText}`);
	}
};

export const getMyMbti = async (): Promise<getMyMbtiResponse> => {
	const response = await fetch(`${API_BASE_URL}/api/foods/register`, {
		method: 'GET',
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(` 실패: ${errorText}`);
	}

	return response.json();
};
