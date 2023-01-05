import { Button } from 'components/Button';
import { api_url } from 'helpers/constants';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react'

export const Logout = () => {
  const router = useRouter();

  const submit = useCallback(() => {
    fetch(`${api_url}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('data');
      if (!data?.errors) router.push('/login');
    })
    .catch((err) => console.log('Error', err))
  }, []);

  return (
    <Button
      label='logout'
      onClick={submit}
    />
  )
}