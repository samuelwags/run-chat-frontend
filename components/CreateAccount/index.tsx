
import { Button } from 'components/Button';
import { TextField } from 'components/TextField';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react'
import { api_url } from 'helpers/constants';
import { FlexBox } from 'components/FlexBox'


export const CreateAccount = ({
  inviteKey
}: {
  inviteKey: string
}) => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string[]>([]);

  const submit = useCallback(() => {
    fetch(`${api_url}/auth/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        username,
        password,
        inviteKey
      })
    })
    .then((response) => response.json())
    .then((data) => {
      if (!data?.error) router.push('/');
      if (data?.error) setError(data?.error);
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
        label='Create Account'
        onClick={submit}
      />
      {error && <div>{error}</div>}
    </FlexBox>
  )
};