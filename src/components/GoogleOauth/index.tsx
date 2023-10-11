import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

export default function GoogleOauth() {
  return (
    <GoogleOAuthProvider clientId="134816363844-i2ggs9ne33tgj9cl9boo8c7v4u67ggbv.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
}
