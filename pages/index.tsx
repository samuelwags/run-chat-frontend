import Head from 'next/head'
import { Login } from 'components/Login'
import { Runs } from 'components/Runs'
import { Logout } from 'components/Logout'
import { useSession } from 'hooks/useSession'
import { useRouter } from 'next/router'

export default function LoginPage() {

  const session = useSession();
  const router = useRouter();

  if (session?.is_logged_in) router.push('/home');

  return (
    <>
      <Head>
        <title>Run Chat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Login />
      </main>
    </>
  )
}
