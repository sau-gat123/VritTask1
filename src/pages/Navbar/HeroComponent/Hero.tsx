import React from 'react'
import "./hero.css"
import HeroIMg from "../../../assets/home.png"

export const Hero = () => {
  return (
   <section className='home' style={{
    paddingLeft:"10%"
  
   }}>
    <div className='home-container' style={{
     
    }}>
      <div className='home-left'>
        <h1>Plant will make<br/> your  life better</h1>
        <p>Create incredible plant design for your offices <br/> or apastaments. Add fresness to your new <br/> ideas. </p>
        <div>
        <button style={{
          height:"54px",
          width:"137px",
          borderRadius:".5rem",
          background:"#3E6553",
          color:"#FFF",
          border:"none"
        }}>Explore</button>


        </div>
      

      </div>
      <div className='home-right'>
        <img width="300px" height="300px" src={HeroIMg}></img>
      </div>

    </div>

   </section>
  )
}
