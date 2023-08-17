'use client'
import Navbar from '@/components/Navbar'
import ChatbotHero from '@/components/ChatbotHero'
import ServicesComponent from '@/components/Services'
import ComponentServices from '@/components/ComponentServices'
import TractorAnimation from '@/components/tractor'
import DescriptionService from '@/components/DescriptionService'
import ProductDistribution from '@/components/Products'
import Table from '@/components/table'
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
      {/*<ServicesComponent/>
      <TractorAnimation/>*/}
      <Footer/>
    </div>
  )
}