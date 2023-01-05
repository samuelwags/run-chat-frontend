import { api_url } from 'helpers/constants';
import React, { useCallback, useEffect, useState } from 'react';

type Session = {
  is_logged_in: boolean,
  user_name: string
}

export const useSession = (): Session | undefined => {
  const [session, setSession] = useState<Session>();

  const fetchSession = useCallback(
    () => {
      fetch(`${api_url}/auth/session`, {
        method: 'GET',
        credentials: 'include'
      })
      .then( (res) => res.json())
      .then( (data) => setSession(data as Session))
    }, []);
  
  useEffect(fetchSession, []);

  return session;
}