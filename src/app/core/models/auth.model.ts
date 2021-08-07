import { Profile } from './profile.model';

export interface AuthToken {
  // access: string;
  // refresh: string;
  // user: Profile;
  success: boolean;
  expires_at: string;
  request_token: string;
}