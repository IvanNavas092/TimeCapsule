import { auth } from '@/utils/auth';
import { useState } from 'react';
import { redirect } from 'react-router-dom';

function SignUnForm() {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = async () => {
    setLoading(true);
    const res = await auth.api.signUpEmail({
      returnHeaders: true,
      body: {
        name: name as string,
        email: email as string,
        password,
      },
    });
    setLoading(false);

    return redirect('/home', { headers: res.headers });
  };

  return (
    <div>
      <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
      <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="passwd" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>{loading ? 'Signing in...' : 'SIGN IN'}</button>
    </div>
  );
}

export default SignUnForm;
