import React from 'react'
import { useRuns } from 'hooks/useRuns';
import Run from 'components/Run';
import { Button } from '@mui/material';
import { FlexBox } from 'components/FlexBox';

export const Runs = () => {

  const [ runs, refetch ] = useRuns();

  console.log(runs);

  return (
    <FlexBox 
      direction='column' 
      gap={24} 
      width='25%'
    >
      <Button
        variant='outlined'
        onClick={refetch}
      >
        Refetch runs
      </Button>
      { runs.map( run => <Run />) }
    </FlexBox>
  )
}