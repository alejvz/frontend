'use client'
import Navbar from '@/components/Navbar'
import DemandPredictionSoftware from '@/components/Hero'
import ServicesComponent from '@/components/Services'
import DemandComparisonChart from '@/components/DemandComparisonChart'
import DataAnalysisMap from '@/components/howWeWorkComponent'
import TractorAnimation from '@/components/tractor'
import PreguntasRespuestas from '@/components/q&a'
import ProductInformation from '@/components/ProductInformation'
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
      <DemandPredictionSoftware/>
      <DemandComparisonChart/>
      <DataAnalysisMap/>
      <ServicesComponent/>
      <ProductInformation/>
      <TractorAnimation/>
      <PreguntasRespuestas/>
      <Footer/>
    </div>
  )
}