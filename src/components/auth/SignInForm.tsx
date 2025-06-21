// import { auth } from '@/utils/auth';
// import { Navigate, redirect, replace } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';

function SignInForm() {
  const navigate = useNavigate();


  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = async () => {
    setLoading(true);

    const res = await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: (ctx) => {
          console.log('Error: ' + ctx.error.message);
          console.log(ctx);
        },
        onSuccess: () => {
          navigate('/');
        },
      }
    );
    console.log(res);
    setLoading(false);

    // const res = await auth.api.signInEmail({
    //   returnHeaders: true,
    //   body: {
    //     email: email as string,
    //     password,
    //   },
    // });

    // return replace('home', { headers: res.headers });
  };

  return (
    <div>
      <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="passwd" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>{loading ? 'Signing in...' : 'SIGN IN'}</button>
    </div>
  );
}

export default SignInForm;
