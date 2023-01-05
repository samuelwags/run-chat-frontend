import { Button } from '@mui/material'
import { api_url } from 'helpers/constants';
import React, { useCallback } from 'react'

export const Logout = () => {
  const submit = useCallback(() => {
    fetch(`${api_url}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    .then((response) => response.json())
    .then((data) => console.log('Success', data))
    .catch((err) => console.log('Error', err))
  }, []);

  return (
    <Button
      variant='outlined'
      onClick={submit}
    >
      Logout
    </Button>
  )
}