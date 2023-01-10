import { Button } from 'components/Button';
import { FlexBox } from 'components/FlexBox'
import { Layout } from 'components/Layout'
import { TextField} from 'components/TextField'
import { api_url } from 'helpers/constants';
import { useRouter } from 'next/router';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration';
import React, { useCallback, useState } from 'react';

dayjs.extend(duration);

export default function AddRunPage() {
  const router = useRouter();

  const [distance, setDistance] = useState<string>();
  const [time, setTime] = useState<Dayjs | null | undefined>();
  const [description, setDescription] = useState<string>();

  const submit = useCallback(() => {
    if (time) {
      fetch(`${api_url}/runs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          distance, 
          time: dayjs.duration({
            hours: time.hour(),
            minutes: time.minute(),
            seconds: time.second()
          }).asSeconds(), 
          description
        })
      })
      .then((response) => response.json())
      .then((data) => {
        if (!data?.errors) router.push('/');
      })
    }
  }, [distance, time, description])

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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              views={['hours', 'minutes', 'seconds']}
              inputFormat="hh:mm:ss"
              mask='__:__:__'
              label="Time"
              value={time}
              onChange={(e) => setTime(e)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
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