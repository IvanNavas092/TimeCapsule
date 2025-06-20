import { Hero } from './components/sections/Hero';
import { Header } from './components/layout/Header';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  useEffect(() => {
    const restoreSession = async () => {
      try {
        if (!isAuthenticated) {
          await getAccessTokenSilently();
        }
      } catch (err) {
        console.error('Error restoring session', err);
      }
    };

    restoreSession();
  }, [getAccessTokenSilently, isAuthenticated]);

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
