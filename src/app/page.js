import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Chytrý dům</h1>
      <Link href="/chytry_dum">
        <button className={styles.button}>Chytrý dům</button>
      </Link>
    </main>
  );
}