import React from 'react'

export const Step = () => {
    const Orders=[
        {
            title:"Choose plant",
            content:"We have several varieties plants you can choose from"
        },
        {
            title:"Place your order",
            content:"We have several varieties plants you can choose from"
        },
        {
            title:"Get plants delivered",
            content:"We have several varieties plants you can choose from"
        }
    ]
  return (
    <div style={{
        padding:"2.5rem,3.5rem",
        background:"#3E6553",
        display:"flex",
        flexDirection:"column",
        borderRadius:"10px",
        gap:"10px",
        marginTop:"150px",
        marginLeft:"10%"
       
      

        
      
    }}>
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            color:"#FFF",
           
           
        }}>
            
            <h1>Step to Start<br/> your plan Right</h1>
              

        </div>
        <div>
        <div  style={{
            display:"flex",
            gap:"10%",
            padding:"5%"
        }}>
               {Orders?.map((item,index)=>{
                return<>
                <div style={{
                    background:"#fff",
                    paddingTop:"40px",
                    paddingBottom:"30px",
                    paddingLeft:"24px",
                    paddingRight:"30px",
                    borderRadius:"12px"
                }}>
                   <div style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"8px"

                   }}>
                    <div style={{
                        background:"#365949",
                        width:"40px",
                        height:"50px",
                        color:"#fff",
                        borderRadius:"10%"
                    }}>
                       <div style={{
                        display:"flex",
                        justifyContent:"center",
                        flexDirection:"column",
                        alignItems:"center",
                        height:"100%"
                       }}>
                       {index+1}</div> </div>
                    <div>
                        <p style={{
                            fontWeight:"bold",
                            color:"#252826"
                        }}>{item.title}</p>
                    </div>
                    <div color='#565d59'>{item.content}</div>


                   </div>
                </div>
                
                </>

               })}
                
            </div>
        </div>
        <div>
            
           


        </div>
    </div>
  )
}
