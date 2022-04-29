import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 style={{ color: "blue" }}>Hello World</h1>
      <h2>E-Commerce Website Using Sanity</h2>
    </div>
  )
}
