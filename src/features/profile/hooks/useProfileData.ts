import {
  type GetApiProfileUserId200,
  useGetApiProfileUserId,
} from 'module-personal-profile-react-sdk';
import { useEffect } from 'react';
import { useProfileStore } from '@/stores/profileStore';
import profileFallbackData from '../data/user-profile-fallback.json';

const userId = '69aa3ae146d8807e7f4071ee';

export function useProfileData() {
  const { setProfileData, setLoading } = useProfileStore();
  const { data, isLoading, error } = useGetApiProfileUserId(userId);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  useEffect(() => {
    if (!isLoading || data || error) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      console.warn('Fetching profile data timed out after 5 seconds. Using fallback profile data.');
      setProfileData(profileFallbackData);
      setLoading(false);
    }, 5_000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isLoading, data, error, setProfileData, setLoading]);

  useEffect(() => {
    if (error) {
      console.error(error);
      console.warn('Using fallback profile data due to error fetching profile data.');
      setProfileData(profileFallbackData);
      setLoading(false);
      return;
    }

    if (data) {
      setProfileData(data as unknown as GetApiProfileUserId200);
    }
  }, [data, setProfileData, setLoading, error]);

  const profileData = useProfileStore((state) => state.profileData);
  const loading = useProfileStore((state) => state.isLoading);

  return { profileData, isLoading: loading };
}
