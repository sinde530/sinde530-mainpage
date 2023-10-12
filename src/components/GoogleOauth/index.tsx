import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useState } from 'react';
import { usePostGoogleLogin } from 'src/hooks/usePostGoogleLogin';

export default function GoogleOauth() {
  const [user, setUser] = useState(null);

  const handleSuccess = async (credentialResponse: any) => {
    try {
      const data = await usePostGoogleLogin(credentialResponse);
      setUser(data.user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      {user && <div>{user.name}님 환영합니다!</div>}
    </GoogleOAuthProvider>
  );
}
