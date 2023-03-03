import { useRouter } from 'next/router';

const Dynamic = () => {
    const router = useRouter();
    const query = router.query;
    console.log('query', query);

  return (
    <div>
        <h1>Dynamic</h1>
    </div>
  )
}

export default Dynamic;