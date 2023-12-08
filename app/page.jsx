import Image from 'next/image'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection accounts="Hey" tokenData="Data" />
    </main>
  )
}
