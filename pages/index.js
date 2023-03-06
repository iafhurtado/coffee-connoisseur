import Head from 'next/head'
import Img from 'next/image'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
}

export default function Home(props) {
  const handleOnBannerBtnClick = () => {
    console.log('Banner button clicked')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coffee Connoisseur</h1>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />
        <div className={styles.heroImage} ><Img src="/static/hero-image.png" width={700} height={400} alt='hero-image' /></div>
        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    imgUrl={coffeeStore.imgUrl}
                    href={`/coffee-store/${coffeeStore.id}`}
                    className={styles.card}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  )
}
