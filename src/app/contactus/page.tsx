
import Contactus from '@/components/Contactus'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Us',
  keywords: ["Contact Us"]
}

const page = () => {
  return (

        <Contactus/>

  )
}

export default page