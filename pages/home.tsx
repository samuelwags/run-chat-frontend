import { FlexBox } from 'components/FlexBox'
import { Layout } from 'components/Layout'
import { Runs } from 'components/Runs'
import { useRuns } from 'hooks/useRuns'
import React from 'react'

export default function Home() {
  const [runs] = useRuns();
  return (
    <Layout>
        <FlexBox gap={12} width='100%' direction='row'>
          <Runs runs={runs} />
        </FlexBox>
    </Layout>
  )
}