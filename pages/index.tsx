import Head from 'next/head'
import Img from 'next/image'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner'

export default function Home() {
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
        <div className={styles.heroImage} ><Img src="/static/hero-image.png" width={700} height={400} /></div>
      </main>

    </div>
  )
}
