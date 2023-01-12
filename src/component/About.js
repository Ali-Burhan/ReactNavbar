import React from 'react';
import Alipic from "./img/Ali.jpg"
import Ahmadpic from "./img/Ahmad.jpg"
import Papapic from "./img/Papa.jpg"
import Animation from "../animation/Animation.js"
function About() {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen ">
      <h1 className="text-4xl font-medium text-center"><Animation text="About Us"/></h1>
      <p className="text-lg text-gray-600 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod elit in nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod elit in nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod elit in nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod elit in nibh congue, sit amet malesuada est commodo.
      </p>
      <div className="my-4">
        <img src={Alipic} className="rounded-full h-32 w-32 mx-auto" alt="Company Logo" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl mb-3 font-medium">Our Mission</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod elit in nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod elit in nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod elit in nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod elit in nibh congue, sit amet malesuada est commodo.
        </p>
      </div>
      <div className="text-center mt-9">
        <h2 className="text-3xl font-medium">Our Team</h2>
        <div className="flex flex-wrap justify-center mt-5">
          <div className="mx-4">
            <img src={Ahmadpic} className="rounded-full h-32 w-32" alt="Team member 1" />
            <p className="text-gray-600">Ahmad Subhan</p>
            <p className="text-xs text-gray-600">Marketing</p>
          </div>
          <div className="mx-4">
            <img src={Papapic} className="rounded-full h-32 w-32" alt="Team member 2" />
            <p className="text-gray-600">Qaiser Nadeem</p>
            <p className="text-xs text-gray-600">Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
