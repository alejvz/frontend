'use client'
import Navbar from '@/components/Navbar'
import DemandPredictionSoftware from '@/components/DemandPredictionSoftware'
import ComplexAnimation from '@/components/ComplexAnimation'
import DemandComparisonChart from '@/components/DemandComparisonChart'
import DataAnalysisMap from '@/components/DataAnalysisMap'
import WaveAnimation from '@/components/WaveAnimation'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


export default function Home() {

  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="main overflow-x-hidden">
      <Navbar/>
      <DemandPredictionSoftware/>
      <DemandComparisonChart/>
      <DataAnalysisMap/>
      <ComplexAnimation/>
    </div>
  )
}