
import Contactus from '@/components/Contactus'
import GetaCallBack from '@/components/GetaCallBack'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: ' Get a Call Back ',
  description: 'Get a Call Back',
  keywords: ["Get a Call Back"]
}

const page = () => {
  return (

        <GetaCallBack/>

  )
}

export default page