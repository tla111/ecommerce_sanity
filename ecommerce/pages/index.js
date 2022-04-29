import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const appleProducts = [
    { name: "Macbook", price: "$1,000.00", availability: "In Stock" },
    { name: "iPhone", price: "$500.00", availability: "In Stock" },
    { name: "Air Pods", price: "$150.00", availability: "None" },
    { name: "iPad", price: "$750.00", availability: "In Stock" },
    { name: "Beats Headphones", price: "$100.00", availability: "None" },
  ]

  return (
    <div className={styles.container}>
      <h1 style={{ color: "blue" }}>Hello World</h1>
      <h2>E-Commerce Website Using Sanity</h2>
      <h2 style={{ color: "orange" }}>Products:</h2>
      {appleProducts.map((product) => (
        <div>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.availability}</p>
        </div>
      ))}
      <h1 style={{ color: "dodgerblue" }}>{appleProducts[0].name}</h1>
    </div>
  )
}
