// src/controllers/api.ts

const API_BASE_URL = 'http://3.37.12.45:8080';

interface JoinRequest {
	email: string;
	password: string;
}

interface JoinResponse {
	accessToken: string;
	refreshToken: string;
}

interface ReissueRequest {
	refreshToken: string;
}

interface ReissueResponse {
	accessToken: string;
	refreshToken: string;
}

export const reissue = async (data: ReissueRequest): Promise<ReissueResponse> => {
	const response = await fetch(`${API_BASE_URL}/api/auth/reissue`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`로그인 실패: ${errorText}`);
	}

	const result = await response.json();
	return result;
};

export const login = async (data: JoinRequest): Promise<JoinResponse> => {
	const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
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
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`회원가입 실패: ${errorText}`);
	}

	const result = await response.json();
	return result;
};
