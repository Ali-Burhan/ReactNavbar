import React from 'react';
import Animation from "../animation/Animation.js"
function Contact() {
const greets = () => {
  alert("Thanks for contacting us!🙂")
}
  return (
    <div className="flex flex-col items-center justify-center max-h-screen p-6">
      
      <h1 className="text-4xl font-medium text-center"><Animation text="Contact Me"/></h1>
      <div className="w-3/4 my-8">
        <form>
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              rows="5"
              placeholder="Your Message"
            />
          </div>
          <div className="text-center">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full"
              type="submit"
              onClick={greets}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="text-center ">
      <svg
      fillRule="currentColor"
      viewBox="0 0 16 16"
      height="10vh"
      width="10vw"
      className='inline'
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="10vh"
      width="10vw"
      className='inline'
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
    </svg>
        <h2 className="text-xl font-medium">Our Location</h2>
        <p className="text-gray-600">
          Dera Bhattiyan Bai pass road<br/>
          Sheikhupura, Punjab
        </p>
       
      </div>
    </div>
  );
}

export default Contact;
