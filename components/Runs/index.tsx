import React from 'react'
import { RunType } from 'hooks/useRuns';
import { FlexBox } from 'components/FlexBox';
import { Run } from 'components/Run';

export const Runs = ({
  runs
}: {
  runs: RunType[]
}) => {
  return (
    <FlexBox 
      direction='column' 
      gap={24}
    >
      { runs.map( run => <Run run={run} />) }
    </FlexBox>
  )
}