import { Button, TextField } from '@mui/material'
import React, { useCallback, useMemo, useState } from 'react'
import { api_url } from '../../helpers/constants';
import { FlexBox } from '../FlexBox'


export const Login = () => {
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
    .then((data) => console.log('Success', data))
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
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant='outlined'
        onClick={submit}
      >
        TEST
      </Button>
    </FlexBox>
  )
};