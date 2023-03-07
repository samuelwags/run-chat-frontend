import { useSession } from "hooks/useSession";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const router = useRouter();
  const session = useSession();
  if (!session) return null;
  router.push(`/profile/${session.user_id}`)
}