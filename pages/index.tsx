import { FlexBox } from 'components/FlexBox'
import { Layout } from 'components/Layout'
import { WeeklyMileage } from 'components/WeeklyMileage'
import { Runs } from 'components/Runs'
import { useRuns } from 'hooks/useRuns'
import React from 'react'

export default function Home() {
  const [runs] = useRuns();
  return (
    <Layout>
        <FlexBox gap={50} width='100%' direction='row'>
          <Runs runs={runs} />
          <WeeklyMileage />
        </FlexBox>
    </Layout>
  )
}