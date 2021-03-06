import Head from 'next/head';
import Image from 'next/image';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          {' '}
          Elit qui aute est adipisicing ullamco sunt laborum aliqua aute tempor
          do aliquip ullamco. Occaecat voluptate nulla do velit labore sit
          occaecat. Lorem fugiat culpa officia aliqua officia exercitation
          laboris eiusmod irure veniam. Culpa esse sint veniam sint magna ad
          officia Lorem occaecat. Nisi ad excepteur ea nisi non do cupidatat
          irure sint nostrud esse commodo. Elit aliqua proident sit quis
          eiusmod.{' '}
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja List</a>
        </Link>
      </div>
    </>
  );
}
