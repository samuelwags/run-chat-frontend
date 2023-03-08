import { FlexBox } from 'components/FlexBox';
import { Tile } from 'components/Tile';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { api_url } from 'helpers/constants';

type Mileage = {
  total: number,
  prs: number
}

const Container = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`

export const WeeklyMileage = () => {
  const [mileage, setMileage] = useState<Mileage>();
  const sunday = dayjs().day(0);
  const saturday = dayjs().day(6);

  useEffect(() =>{
    fetch(`${api_url}/mileage`, {
      method: 'GET',
      credentials: 'include'
    })
    .then( (res) => res.json())
    .then( (data) => setMileage(data))
  }, [])

  const items = useMemo(() => {
    if (!mileage) return [];
    return [
      {
        label: 'Total Mileage',
        value: `${mileage.total} miles`
      },
      {
        label: 'Total PRs',
        value: `${mileage.prs}`
      }
    ]
  }, [mileage]);

  return (
    <Container>
      <FlexBox gap={12} direction='column'>
        <FlexBox gap={12} direction='row' align='start'>
          <Tile 
            label={`${sunday.format('MM/DD')} – ${saturday.format('MM/DD')}`}>
            {items.map( item => (
              <FlexBox key={item.label} direction='column' gap={2} align='center'>
                <p>{item.label}</p>
                <h2>{item.value}</h2>
              </FlexBox>
            ))}
          </Tile>
        </FlexBox>
      </FlexBox>
    </Container>
  )
}