'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useRef } from 'react'
import { servicesType } from './Services'

gsap.registerPlugin(ScrollTrigger)

interface ServicesCardProps {
  servicesData: any
}

const ServicesCard: FC<ServicesCardProps> = ({ servicesData }) => {


  return (
    <section  className="relative overflow-hidden pb-28 md:pb-32 lg:pb-44 xl:pb-[200px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-center justify-center gap-x-10 gap-y-6 md:mb-24 md:flex-row md:items-start lg:items-end lg:justify-start">
          <div className="flex-1">
            <h2 className="text-appear flex flex-col">
              <span>Elevating Your</span>
              <span>
                <i className="font-instrument italic">Digital</i> Presence
              </span>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-appear dark:text-colorText max-md:text-justify">
              We provide expert digital solutions to enhance your brand and online presence. Our services are designed
              to drive growth, engagement, and success in the digital world.
            </p>
          </div>
        </div>
      </div>
      <div  className="reveal-me flex w-fit flex-nowrap gap-6 overflow-x-hidden pl-[20%] pr-10">
        {servicesData?.map((service:any) => (
          <div
            key={service?.slug}
            className="w-[370px] bg-primary bg-opacity-20 p-7 dark:border-backgroundBody dark:bg-secondary md:p-10">
              <Image src={service?.logo} width={24} height={24} alt="Logo Icon" className="inline-block dark:hidden" />
          
            <h3 className="mb-3 text-xl font-semibold md:text-2xl md:tracking-wide">{service?.title}</h3>
            <p className="mb-5 min-h-[120px] max-w-[95%] text-base">{service?.description}</p>
            <Link href={`/services/${service?.slug}`} className="rv-button rv-button-sm rv-button-secondary">
              <div className="rv-button-top">
                <span>Learn More</span>
              </div>
              <div className="rv-button-bottom">
                <span>Learn More</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesCard
