import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /pv2 when the component is mounted
    void router.push('/pv2');
  }, []);

  // Return null or any content you want to display briefly before the redirection happens
  return null;
}
