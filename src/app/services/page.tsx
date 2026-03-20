
import Services from '@/components/Services'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Organic foods are produced through a farming',
  keywords: ["Organic foods are produced through a farming system that avoids the use of synthetic pesticides, herbicides, genetically"]
}

const page = () => {
  return (

        <Services/>

  )
}

export default page