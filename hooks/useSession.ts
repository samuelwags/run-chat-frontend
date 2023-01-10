import { api_url } from 'helpers/constants';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

type Session = {
  is_logged_in: boolean,
  user_name: string
}

export const useSession = (skip = false): Session | undefined => {
  if (skip) return undefined;

  const [session, setSession] = useState<Session>();
  const router = useRouter();

  const fetchSession = useCallback(
    () => {
      fetch(`${api_url}/auth/session`, {
        method: 'GET',
        credentials: 'include'
      })
      .then( (res) => res.json())
      .then( (data) => {
        if (data?.errors) router.push('/login');
        else setSession(data as Session);
      })
    }, []);
  
  useEffect(fetchSession, []);

  return session;
}