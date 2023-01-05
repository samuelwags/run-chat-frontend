import { FlexBox } from 'components/FlexBox';
import { Label } from 'components/Typography/Label';
import { RunType } from 'hooks/useRuns';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  border-left: 2px solid olive;
  padding-left: 12px;
`

export const Run = ({
  run
}: {
  run: RunType
}) => {
  return (
    <Container>
      <FlexBox gap={6} direction='column'>
        {run?.date && <Label text={run.date}/>}
        <p>{run?.user?.user_name} ran {run?.distance || 'no distance'} miles in {run?.time} minutes.</p>
        {run?.description && <p>+ {run.description}</p>}
      </FlexBox>
    </Container>
  )
}