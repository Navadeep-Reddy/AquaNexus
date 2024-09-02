import React from 'react';
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdLocalPostOffice } from "react-icons/md";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "297fcefb-4445-4b00-912a-ac02a32095d3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div style={{ height: '100vh' }} className='w-[90%] mx-auto  flex flex-col lg:flex-row lg:w-[80%]  justify-center items-center' name="Contact">
      <div className='lg:w-1/2 p-5'>
        <h1 className='font-semibold text-xl lg:text-2xl text-Accent'>Send us a message</h1>
        <p className='my-5 w-full lg:w-[67%] text-TextCharcoal'>
          Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our community.
        </p>
        <div className='space-x-2 flex items-center text-TextCharcoal'>
          <IoMailSharp className='text-Accent' />
          <span>INCOIS</span>
        </div>
        <div className='space-x-2 flex items-center mt-2 text-TextCharcoal'>
          <FaPhoneAlt className='text-Accent' />
          <span>040-23895008</span>
        </div>
        <div className='space-x-2 flex items-center mt-2 text-TextCharcoal'>
          <TiLocation className='text-Accent' />
          <span>Ocean Valley, Paragathi Nagar(BO),<br />Nizampet(SO),<br />Hyderabad-500090,<br />Telangana, INDIA</span>
        </div>
      </div>
      <div className='lg:w-1/2 p-5'>
        <form className='flex flex-col' onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            name="Name"
            placeholder='Enter Name'
            className='p-[0.7rem] bg-PrimaryBlue placeholder-BackgroundSand rounded mt-2'
          />
          <label className='mt-4'>Phone Number</label>
          <input
            name="phno"
            placeholder='Enter Phone No'
            className='p-[0.7rem] bg-PrimaryBlue placeholder-BackgroundSand rounded mt-2'
          />
          <label className='mt-4'>Your Email</label>
          <input
            name="email"
            placeholder='Enter Email'
            className='p-[0.7rem] bg-PrimaryBlue placeholder-BackgroundSand rounded mt-2'
          />
          <label className='mt-4'>Write your messages here</label>
          <textarea
            rows={6}
            className='p-[0.7rem] bg-PrimaryBlue placeholder-BackgroundSand rounded mt-2'
            placeholder='Enter your message'
          />
          <button className='flex space-x-2 border bg-PrimaryBlue w-full lg:w-40 h-11 my-5 text-BackgroundSand items-center justify-center rounded-3xl border-none'>
            <span>Submit Now</span>
            <MdLocalPostOffice />
          </button>
        </form>
        <span className='mx-2'>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
