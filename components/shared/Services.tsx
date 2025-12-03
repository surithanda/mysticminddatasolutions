import getMarkDownData from '@/utils/GetMarkDownData'
import ServicesCard from './ServicesCard'
import servicesData from '@/data/services'

export interface servicesType {
  content: string
  slug: string
  [key: string]: any
}


const Services = () => {
  return <ServicesCard servicesData={servicesData} />
}

export default Services
