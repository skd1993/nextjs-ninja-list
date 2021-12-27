import Head from 'next/head';
import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link'

// runs only at build time before rendering, not in browser at client end
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((n) => (
          <Link href={'/ninjas/' + n.id} key={n.id}>
            <a className={styles.single}>
              <h3>{n.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
