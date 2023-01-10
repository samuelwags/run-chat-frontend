import { CreateAccount } from 'components/CreateAccount'
import { Layout } from 'components/Layout'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter();
  const { inviteKey } = router.query;

  return (
    <Layout unprotected>
      { inviteKey && typeof inviteKey === 'string' ? 
        <CreateAccount
          inviteKey={inviteKey}        
        />
        : <p>You need an invite key.</p>
      }
    </Layout>
  )
}