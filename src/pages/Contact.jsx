import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import axios from 'axios'

const Contact = () => {
  const[name,setName]=useState('')
  const[mail,setMail]=useState('')
  const[message,setMessage]=useState('')
  const data = {
    service_id: 'service_byja9ss',
    template_id: 'template_yeak5ys',
    user_id: '1AkkQUzulb47tnD_U',
    template_params: {
      to_name:'Rakesh',
      from_name:name,
      message:message,
      from_email:mail
    }
};

  const formHandler = async (e) =>{
    e.preventDefault()
    let response = await axios.post("https://api.emailjs.com/api/v1.0/email/send",data) 
    console.log(response)
    setName('')
    setMail('')
    setMessage('')
  }
  return (
    <div className='container-fluid row mt-5'>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <div>
          <h1 className="text-warning mb-5">Get in Touch</h1>
        
        <p><span className='h5'><FaEnvelope className="me-2" /> Email:</span> <a href="mailto:rakeshsatyavarapu369@gmail.com" className="text-white ">rakeshsatyavarapu369@gmail.com</a></p>
        <h5><FaPhone className="me-2" /> Phone: <a href="tel:+91 9705450251" className="text-white">+91 9705450251</a></h5>
        
        <div className="mt-3 mb-3">
          <a href="http://github.com/Rakesh-satyavarapu" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/rakesh-satyavarapu-889301289" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaLinkedin size={30} />
          </a>
        </div>
        </div>
      </div>
      <div className='col-md-6'>
      <form className='form-group p-5 ms-auto ' style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px'
            }} onSubmit={formHandler}>
              <h1 className='text-center mb-3'>Message Me</h1>
        <input 
            className='form-control mb-2'
            placeholder='enter name'
            type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        <input 
            className='form-control mb-2' 
            placeholder='enter email' 
            type='email'
            value={mail}
            onChange={(e)=>setMail(e.target.value)}  
        />
        <textarea 
            className='form-control mb-2'
            rows={10} 
            placeholder='enter message'
            value={message}
            onChange={(e)=>setMessage(e.target.value)}></textarea>
        <div className='d-flex justify-content-end '>
        <button type='submit' className='btn btn-outline-success rounded-3 text-highlet'>send Message</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Contact
