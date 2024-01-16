import React from 'react'
import "./product.css"
import Product1 from "../../../assets/product1.png"
import Product2 from "../../../assets/product2.png"
import Product3 from "../../../assets/product3.png"
import Product4 from "../../../assets/product4.png"
import Product5 from "../../../assets/product5.png"
import Product6 from "../../../assets/product6.png"

export const Product = () => {
    const product=[
        {
            plant:"cactus plant",
            price:"$100",
            url:Product1
        },
        {
            plant:"cactus plant",
            price:"$100",
            url:Product2
        },
        {
            plant:"cactus plant",
            price:"$100",
            url:Product3
        },
        {
            plant:"cactus plant",
            price:"$100",
            url:Product4

        },
        {
            plant:"cactus plant",
            price:"$100",
            url:Product5
        },
        {
            plant:"cactus plant",
            price:"$100",
            url:Product6
        },
    ]
  return (
    <div
    style={{
        paddingTop:"128px",
        paddingBottom:"16px",
        display:"flex",
        flexDirection:"column",
        gap:"50px", 
        width:"100%",  
       
    }}
    >
        <div style={{
            display:"flex",
            justifyContent:"center"
        }}>
            <p style={{fontSize:"2rem ",
            width:"200px",
            fontWeight:"bold"
        }}>Check out our  Product  </p>
        </div>
        <div
        style={{
            display:"flex",
            justifyContent:"center",
            color:"#565D59"
        }}
        >
            <p>Here are some selected plants from our showroom, all<br/> are in excellent shape and has a long life span. Buy and <br/> enjoy best quality.</p>

        </div>
        <div className='grid-container' style={{
            paddingLeft:"10%"
        }}>
            {product.map((item)=>{
            return    <div className='grid-item'>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"10px"

                }}>
                <div style={{
                    height:"110px",
                    width:"110px",
                    color:"grey",
                    background:"grey",
                    borderRadius:"50%",
                    position:"relative"
                }}>
                     <img src={item.url} height="213px" width="160px" style={{
                    position:"absolute",
                    left:"20px",
                    top:"-90px",
                }} />


                </div>
                <div style={{ display:"flex", justifyContent:"start", color:"#25282"}}>
                   <h3 style={{
                    fontSize:"18px"
                   }}> {item.plant}</h3>
                </div>

                </div>
              
                
               
              
            </div>

            })}

        </div>

    </div>
  )
}
