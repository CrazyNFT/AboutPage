import Head from 'next/head'
import Image from 'next/image'
import Comp1 from '../components/Comp1'
import Comp2 from '../components/Comp2'
import Navbar from '../components/Navbar'
import Test from '../components/Test'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <Comp2/>     
    
    </div>
  )
}
