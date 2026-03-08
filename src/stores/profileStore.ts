import type { GetApiProfileUserId200 } from 'module-personal-profile-react-sdk';
import { create } from 'zustand';

export type UserProfile = GetApiProfileUserId200;

interface ProfileState {
  profileData: UserProfile | null;
  isLoading: boolean;
  setProfileData: (data: UserProfile) => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}
export const useProfileStore = create<ProfileState>((set) => ({
  profileData: null,
  isLoading: false,
  setProfileData: (data) => set({ profileData: data }),
  setLoading: (loading) => set({ isLoading: loading }),
  reset: () => set({ profileData: null, isLoading: false }),
}));
