export interface JoinRequest {
	email: string;
	password: string;
}

export interface JoinResponse {
	accessToken: string;
	refreshToken: string;
}

export interface ReissueResponse {
	accessToken: string;
	refreshToken: string;
}

export interface getFoodResponse {
	foodName: string;
	foodCategory: string;
	expirationDate: string;
	storageMethod: string;
	daysLeft: number;
	foodRegisterId: number;
}

export interface RegisterFoodRequest {
	foodName: string;
	foodCategory: string;
	purchaseDate: string;
	expirationDate: string | null;
	storageMethod: string;
}

export interface RegisterFoodResponse {
	foodRegisterId: number;
	foodName: string;
	expirationDate: string | null;
}

export interface getMyMbtiResponse {
    consumptionRate: string;
    fridgeComment: string;
    nearExpiredCount: number;
    level: number;
    typeName: string;
    foodBTI: string;
    foodBTIDetail: string;
    description: string;
}