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
    <>
      <h1>E-Commerce</h1>
    </>
  )
}
