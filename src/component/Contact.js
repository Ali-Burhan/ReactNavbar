import React from 'react';
import Animation from "../animation/Animation.js"
function Contact() {
const greets = () => {
  alert("Thanks for contacting us!🙂")
}
  return (
    <div className="flex flex-col items-center justify-center max-h-screen p-6">
      
      <h1 className="text-4xl font-medium text-center"><Animation text="Contact us"/></h1>
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
