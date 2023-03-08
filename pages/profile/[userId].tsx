import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { IconButton } from "components/IconButton";
import { Layout } from "components/Layout";
import { useUser } from "hooks/useUser";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const router = useRouter();
  const { userId } = router.query;

  const user = useUser(userId as string);

  return (
    <Layout>
      <h3>{user && user.user_name}</h3>
      <FlexBox
        gap={12}
        direction='column'
        
      >
        <h4>Training Plans</h4>
        { user && user?.training_plans?.map( plan => (
          <p key={plan.id}><Link href={`/trainingPlan/${plan.id}`}>{plan.name}</Link></p>
        ))}
        <IconButton
          onClick={() => router.push('/trainingPlan/new')}
        />
      </FlexBox>
    </Layout>
  )
}