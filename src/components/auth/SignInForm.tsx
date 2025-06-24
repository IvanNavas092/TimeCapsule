// import { auth } from '@/utils/auth';
// import { Navigate, redirect, replace } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthContent from '../AuthContent';

function SignInForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // const handleSignIn = async () => {
  //   setLoading(true);

  //   const res = await authClient.signIn.email(
  //     {
  //       email,
  //       password,
  //     },
  //     {
  //       onError: (ctx) => {
  //         console.log('Error: ' + ctx.error.message);
  //         console.log(ctx);
  //       },
  //       onSuccess: () => {
  //         navigate('/');
  //       },
  //     }
  //   );
  //   console.log(res);
  //   setLoading(false);

  //   // const res = await auth.api.signInEmail({
  //   //   returnHeaders: true,
  //   //   body: {
  //   //     email: email as string,
  //   //     password,
  //   //   },
  //   // });

  //   // return replace('home', { headers: res.headers });
  // };


  onSubmitLogin = (e) => {
  state.onLogin(e, this.state.login, this.state.password)
  }

  return (
    <>
      <div className="flex justify-center text-white bg-black mt-2 p-5">
        <input
          className="border-white border-2 rounded-xl p-2 m-2"
          placeholder="name"
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-white border-2 rounded-xl p-2 m-2 text-white"
          placeholder="password"
          type="password"
          name="passwd"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button >{loading ? 'Signing in...' : 'SIGN IN'}</button>
      </div>
      <AuthContent />
    </>
  );
}

export default SignInForm;
