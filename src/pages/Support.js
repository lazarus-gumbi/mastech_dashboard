import React from 'react'

function Support() {
  return (
    <div className='support'>
      <div className="support-top"><h3>Request Support</h3></div>
      <div className="form">
        <form action="#">
        <div className="form-group">
          <label className='support_label' htmlFor="Name">Your Name</label>
          <input className='support_input' type="text" name="" id="" />
        </div>
        <div className="form-group">
          <label className='support_label' htmlFor="Name">Your Email</label>
          <input className='support_input' type="email" name="" id="" />
        </div>
        <div className="form-group">
          <label className='support_label' htmlFor="Name">Your Message</label>
          <textarea className='support_input' name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Support;
