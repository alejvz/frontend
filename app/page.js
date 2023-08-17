'use client'
import Navbar from '@/components/Navbar'
import ChatbotHero from '@/components/ChatbotHero'
import ComponentServices from '@/components/ComponentServices'
import DescriptionService from '@/components/DescriptionService'
import Footer from '@/components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


export default function Home() {

  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="main overflow-x-hidden container mx-auto my-4">
      <Navbar/>
      <ChatbotHero/>
      <DescriptionService/>
      <ComponentServices/>
      <Footer/>
    </div>
  )
}