import React from 'react'
import { Product } from '../Product/Product'

export const Faq = () => {
    const question =[
        {
         question:"My flowers are falling off or dying?",   
         answer:"Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
        },
        {
            question:"My flowers are falling off or dying?",   
            answer:"Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
           },
           {
            question:"My flowers are falling off or dying?",   
            answer:"Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
           },
           {
            question:"My flowers are falling off or dying?",   
            answer:"Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
           },
           {
            question:"My flowers are falling off or dying?",   
            answer:"Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
           },
           {
            question:"My flowers are falling off or dying?",   
            answer:"Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
           },
    ]

    
  return (
    <div style={{
        paddingTop:"128px",
        paddingBottom:"16px",
        backgroundColor:"#E6EFEB",
        paddingLeft:"10%",
        display:"flex",
        flexDirection:"column",
        gap:"30px"
       
    }}>
        <div  style={{
            lineHeight:"6px"
        }}> 
            <div><h2 style={{
                fontSize:"36px"
            }}>Some Commonly asked question</h2></div>
            <div> <h2 style={{fontSize:"36px"}}>were commonly asked</h2></div>

        </div>
        <div className='grid-container'>
            {question.map((item)=>{
                return <div className='grid-item'>
                    <div style={{
                        background:"#fff",
                        padding:"12px",
                        display:"flex",
                        justifyContent:"flex-start"
                    
                    }}>
                       <p style={{
                        fontSize:"12px",
                        fontWeight:"bold"

                       }}>{item.question}</p> 
                    </div>
                </div>
            })}
          



        </div>

    </div>
  )
}
