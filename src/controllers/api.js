// src/controllers/api.ts
const API_BASE_URL = 'http://3.37.12.45:8080';
export const reissue = async (data) => {
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
export const login = async (data) => {
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
export const join = async (data) => {
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
