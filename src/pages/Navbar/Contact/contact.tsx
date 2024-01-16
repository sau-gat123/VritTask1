import React from 'react'
import "./contact.css"

export const Contact = () => {
  return (
    <div style={{
        paddingLeft:"10%",
        paddingTop:"10%",
        paddingRight:"10%",
        display:"flex",
        justifyContent:"space-between"
    }}>
        <div style={{
            display:"flex",
            flexDirection:"column",
            gap:"10px",
            width:"40%"
        }}>
            <div><h2>Reach out to us via any of the given information</h2></div>
            <div>
                <p>Call us for instant Support</p>
                <p>+999 888 777</p>
            </div>
            <div>
                <p>Write us by mail</p>
                <p>xyz@gmail.com</p>
                
            </div>

        </div>

        <div style={{
            width:"40%",
            display:"flex",
            flexDirection:"column",
            gap:"16px",

}}>
    <div className='contact-content'>
        <input placeholder='' className='contact-input'/>
        <label  className='contact-label'>Email</label>
    </div>
    <div className='contact-content'>
        <input placeholder='' className='contact-input'/>
        <label  className='contact-label'>Subject</label>
    </div>
    <div className='contact-content'>
        <textarea style={{
            resize:"none"
        }} placeholder='' className='contact-input'/>
        <label  className='contact-label'>Message</label>
    </div>
    <div>
    <button style={{
          height:"54px",
          width:"137px",
          borderRadius:".5rem",
          background:"#3E6553",
          color:"#FFF",
          border:"none"
        }}>Send Message</button>
    </div>


        </div>

    </div>
  )
}
