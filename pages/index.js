import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/navbar'
import { Hero } from '../components/Hero'
import { Mission } from '../components/Mission'
import { Cards } from '../components/Cards'
import { Achievements } from '../components/Achievements'
import { Events } from '../components/Events'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Cards />
      <Achievements />
      <Events />
    </>
  )
}
