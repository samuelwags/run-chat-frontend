import { Button } from 'components/Button';
import { FlexBox } from 'components/FlexBox'
import { TextField} from 'components/TextField'
import { api_url } from 'helpers/constants';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration';
import arraySupport from 'dayjs/plugin/arraySupport';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

dayjs.extend(duration);
dayjs.extend(arraySupport);

const Container = styled(FlexBox)`
  background: white;
  padding: 20px;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const RunForm = ({
  callback
}: {
  callback: () => void
}) => {
  const [distance, setDistance] = useState<string>();
  const [time, setTime] = useState<Dayjs | null>(dayjs().startOf('day'));
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
          date: dayjs([dayjs().year(), dayjs().month(), dayjs().date()]),
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
        if (!data?.errors) callback();
      })
    }
  }, [distance, time, description])

  return (
      <Container gap={12} direction='column' width='300px'>
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
              inputFormat="HH:mm:ss"
              mask='__:__:__'
              label="Time"
              value={time}
              onChange={(e) => setTime(e)}
              renderInput={(params) => <TextField {...params} />}
              disableOpenPicker
              ampm={false}
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
      </Container>
  )
}

export default RunForm;