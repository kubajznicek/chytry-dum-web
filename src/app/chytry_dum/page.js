import React from "react";
import Image from "next/image";
import styles from './page.module.css';
import LightButton from "../components/LightButton";

export default function ChytryDum() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Chytrý dům</h1>
      <div className={styles.row}>
        <LightButton room="chytry_dum" id={1}/>
        <LightButton room="chytry_dum" id={2}/>
      </div>
    </main>
  );
}