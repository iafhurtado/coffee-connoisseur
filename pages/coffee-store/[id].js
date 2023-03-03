import Link from "next/link";
import { useRouter } from "next/router";

export default function CoffeeStore() {
  const router = useRouter();

  return (
    <div>
      Coffee Store {router.query.id}
      <Link href="/"><a>Back to home</a></Link>
    </div>
  );
}