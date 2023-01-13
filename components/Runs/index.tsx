import React from 'react'
import { RunType } from 'hooks/useRuns';
import { FlexBox } from 'components/FlexBox';
import { Run } from 'components/Run';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`

export const Runs = ({
  runs
}: {
  runs: RunType[]
}) => {
  return (
    <Container>
      <FlexBox 
        direction='column' 
        gap={24}
      >
        { runs.map( run => <Run run={run} key={run.id} />) }
      </FlexBox>
    </Container>
  )
}