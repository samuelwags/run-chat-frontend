import Head from 'next/head'
import { Login } from 'components/Login'
import { Layout } from 'components/Layout'

export default function LoginPage() {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}
