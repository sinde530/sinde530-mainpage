import axios from 'axios';

export const usePostGoogleLogin = async (credentialResponse: any) => {
  try {
    const response = await axios.get(
      `/api/users/auth/google/callback`,
      credentialResponse,
    );
    console.log('Response:', response);
    return response.data;
  } catch (error) {
    console.error('Error during Google login:', error);
    throw error;
  }
};
