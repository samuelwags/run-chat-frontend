import { Button } from 'components/Button';
import { FlexBox } from 'components/FlexBox'
import { Layout } from 'components/Layout'
import { TextField} from 'components/TextField'
import { api_url } from 'helpers/constants';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react'

export default function AddRunPage() {
  const router = useRouter();

  const [distance, setDistance] = useState<string>();
  const [minutes, setMinutes] = useState<string>();
  const [description, setDescription] = useState<string>();

  const submit = useCallback(() => {
    fetch(`${api_url}/runs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({distance, time: minutes, description})
    })
    .then((response) => response.json())
    .then((data) => {
      if (!data?.errors) router.push('/home');
    })
  }, [distance, minutes, description])

  return (
    <Layout>
      <FlexBox gap={36} direction='column' align='stretch'>
        <FlexBox gap={24} width='100%'>
          <TextField
            id='distance'
            label='Distance'
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            type='number'
          />
          <TextField
            id='minutes'
            label='Minutes'
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            type='number'
          />
        </FlexBox>
        <TextField
          id='description'
          label='Highlight'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type='text'
          multiline
          rows={4}
        />
        <Button
          label='Create Run'
          onClick={submit}
        />
      </FlexBox>
    </Layout>
  )
}