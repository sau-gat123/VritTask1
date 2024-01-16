import React from 'react'
import './Navbar.css'


export const Navbar = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const item=[
        {
            section:"Home",

        },
        {
            section:"About "
            
        },
        {
            section:"Product"
            
        },
        {
            section:"Faqs"
            
        }
    ]
    
    
  return (
    <div className="container" style={{
        paddingLeft:"10%",

        height:"100px",
     
    }}>
        <div style={{
            width:"40%",
            display:"flex",
            justifyContent:"space-around"
            

            
          

        }}>
            <div className='logo'>Plantex</div>
        </div>
        <div 
        className='navItem'
        style={{
            width:"50%",
            display:"flex",
            alignItems:"center"          
        }}> 
        <ul>
            <div  style={{
                display:"flex",
                gap:"3rem",
                fontSize: "1rem",
                width:"100%",
               
            }}>
            {item?.map((item)=>{
                return <li ><a href='#' style={{
                    color:"black",
                    textDecoration: "none",
                    fontSize:"1.2rem",
                    fontWeight:"bold"

                }
                
                }>{item?.section}</a> </li>
            })}

            </div>
           
        </ul>

            
        </div>

    </div>
  )
}
