import {useEffect} from 'react';
import Hero from '@/sections/Hero';
import ProductCards from '@/sections/ProductCards';
import Brands from '@/sections/Brands';
import Services from '@/sections/Services';
import Helped from '@/sections/Helped';
import Gallery from '@/sections/Gallery';
import ContactUs from '@/sections/ContactUs';
import Subscription from '@/sections/Subscription';
import Testing from '@/components/Testing'


const Home = () => {
  useEffect(() => {
    document.title = 'MATTERFUL | Home'
  })

  return (
    <>
      <Hero />
      <ProductCards />
      <Brands />
      <Services />
      <Helped />
      <Gallery />
      <ContactUs />
      <Subscription />
      <Testing />
    </>
  )
}

export default Home