import React from 'react'
import About from "../../../assets/about.png"
import { Step } from '../Step/Step'



export const AboutUs = () => {
  return (
   <section className='home' style={{
    
 
    paddingLeft:"10%"
   
    
  
   }}>
    <div style={{
        display:"flex",
      
        justifyContent:"center",
       
        paddingLeft:"5%",
        paddingRight:"20%",
        
        flexDirection:"column",
        gap:"30px"
        
    }}>
        <div style={{
            paddingTop:"150px",
            display:"flex",
            width:"100%",
            gap:"200px"
           
            
        }}>
            <img src={About} width="330px" height="330px"/>
            <div style={{
                display:"flex",
                flexDirection:"column",
                gap:"10px"

            }}>
           <div><h3 style={{
            fontSize:"2rem"
           }}>Who we really are and why choose us</h3> </div>
           <div>
            <p style={{
                color:"#565d59"
            }}>
            We have over 4000+ unbiased reviews and our customers trust our plant process and delivery service every time
            </p>
           </div>
           <div>
            <ul >
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"2px",
                    color:"#565d59",
                 
                }}>
                <li>We always deliver on time</li>
                <li>We always deliver on time</li>
                <li>We always deliver on time</li>
                <li>We always deliver on time</li>

                </div>
              
            </ul>
           </div>
           <div>
           <p style={{
            color:"#3E6553",
            fontWeight:"bold",
            
           }}>Shop Now</p>

           </div>

            </div>
        </div>
            
       

    </div>

   

   </section>
  )
}
