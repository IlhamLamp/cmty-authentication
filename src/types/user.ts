export type TUsers = {
  id: number;
  email: string;
  password: string;
  google_id: string;
  otp_code: string;
  otp_expiration: Date;
  is_verified: boolean;
  created_at: Date;
  updated_at: Date;
};

export type TOAuthCallbackResponse = {
  id: number;
  google_id: string;
  email: string;
  first_name: string;
  last_name: string;
  full_name: string;
  profile_picture: string;
  token: string;
  refresh_token: string;
  created: boolean;
};
