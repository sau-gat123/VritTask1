import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <div style={{
        padding:"10%",
        display:"flex",
        justifyContent:"space-between",
        width:"90%"
    }}>
        <div className='footer-item' style={{
            fontWeight:"700"

        }}>
            <div style={{display:"flex", flexDirection:"column", width:"200px", gap:"16px"}}>
            <p>PLANTEX</p>
            <div>
            <p>Subscribe to our newsletter
to stay update</p>
<div style={{
    background:"#E6EFEB",
    padding:"8px",
    display:"flex",
    width:"100%",
    justifyContent:"space-between"
}}>
    <div>
        <input placeholder='Enter your name' className='footer-input'/>
    </div>
    <div>
    <button style={{
          height:"40px",
         
          borderRadius:".5rem",
          background:"#3E6553",
          color:"#FFF",
          border:"none"
        }}>Subscrbe</button>
    </div>


</div>

            </div>
            </div>
           

        </div>
        <div className='footer-item' style={{
            fontWeight:"550",
            display:"flex",
            flexDirection:"column",
            gap:"6px"
        }}><p>Our Address</p>
        <div style={{
            display:"flex",
            flexDirection:"column",
            gap:"4px"
        }}>
            <div style={{
                lineHeight:"4px",
                color:"#565D59",
                fontSize:"14px"
            }}>
            <p>1234-peru</p>
            <p>la libreator</p>
            <p>123-456-466</p>

            </div>
          

        </div>


        </div>
     <div className='footer-item' style={{
            fontWeight:"550"
        }}><p>Contact us</p>
           <div style={{
            display:"flex",
            flexDirection:"column",
            gap:"4px"
        }}>
            <div style={{
                lineHeight:"4px",
                color:"#565D59",
                fontSize:"14px"
            }}>
            <p>+99988888</p>
            <p>la libreator</p>
          

            </div>
          

        </div>
        </div>
      <div className='footer-item' style={{
            fontWeight:"550"
        }}><p>We accept all credit</p>
           <div style={{
            display:"flex",
            flexDirection:"column",
            gap:"4px"
        }}>
            <div style={{
                lineHeight:"4px",
                color:"#565D59",
                fontSize:"14px"
            }}>
            <p>1234-peru</p>
            <p>la libreator</p>
            <p>123-456-466</p>

            </div>
          

        </div></div>
        
       

    </div>
  )
}
