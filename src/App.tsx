

import './App.css'
import { Navbar } from './pages/Navbar/Navbar'
import { Hero } from './pages/Navbar/HeroComponent/Hero'
import { AboutUs } from './pages/Navbar/WhyChooseUs/WhyChoose'
import { Step } from './pages/Navbar/Step/Step'
import  {Product} from "./pages/Navbar/Product/Product"
import {Faq} from "./pages/Navbar/FAQ/Faq"
import { Contact } from './pages/Navbar/Contact/contact'
import { Footer } from './pages/Navbar/Footer/Footer'

function App() {
 

  return (
    <>
      <div className='flex' style={{
       
        
      }}>
        <Navbar/>
        <Hero/>
      
        <AboutUs/>
        <Step/>
        <Product/>
        <Faq/>
        <Contact/>
        <Footer/>

        </div>
     
    </>
  )
}

export default App
