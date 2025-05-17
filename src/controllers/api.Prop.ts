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
