
import { Button } from 'components/Button';
import { TextField } from 'components/TextField';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react'
import { api_url } from '../../helpers/constants';
import { FlexBox } from '../FlexBox'


export const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = useCallback(() => {
    fetch(`${api_url}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({username, password})
    })
    .then((response) => response.json())
    .then((data) => {
      if (!data?.errors) router.push('/home');
    })
    .catch((err) => console.log('Error', err))
  }, [username, password]);

  return (
    <FlexBox gap={12} direction='column' width='300px'>
      <TextField 
        id='username'
        label='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
      />

      <Button
        label='Login'
        onClick={submit}
      />
    </FlexBox>
  )
};