import { FlexBox } from 'components/FlexBox'
import { Logout } from 'components/Logout'
import { Runs } from 'components/Runs'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Run Chat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FlexBox gap={12} width='100%' direction='row'>
          <Runs />
          <Logout />
        </FlexBox>
      </main>
    </>
  )
}