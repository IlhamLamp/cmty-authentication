export type TUsers = {
    id: number;
    email: string;
    password: string;
    otp_code: string;
    otp_expiration: Date;
    is_verified: boolean;
    created_at: Date;
    updated_at: Date;
}