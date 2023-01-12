import React from 'react'
import Animation from '../animation/Animation'
import Alipic2 from "./img/Ali2.jpg"
import { Link } from 'react-router-dom';
const Home = () => {
  
  return (
    <>
  
  <div className='grid md:grid-cols-2'>
    <div className='max-w-full align-middle items-center justify-center p-8'>
      <div className='text-3xl m-6'><Animation text="Wellcome to my portfolio website"/>
      <Animation text="Confused in coding? learn about the basic techniques to solve any real Word Problem to increase coding skills."/>
      </div>
    </div>
    <div className="max-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-full text-center">
            <img src={Alipic2} alt="profile picture" className="rounded-lg h-40 w-40 mx-auto mb-4" />
            <h1 className="text-4xl font-medium my-3">Ali Burhan <Animation text="(BURHANSE)"/></h1>
            <p className="text-2xl text-gray-600 my-3">Web Develper, Data Scientist(To be😉)</p>
        </div>
        <div className="w-3/4 text-center my-3">
            <p className="text-gray-600 mb-4">Currently studing in BSCS(HONS) 3rd year 6th semester from NFC IE&FR. 
            Explored much about Web technologies, Web frameworks and Web libraries. I am now working on the Web3.0 technologies and thier propectives fields.</p>
            <div className="flex justify-center">
                <Link href="#" onClick={()=>{alert("Did'nt make any resume yet.")}} className="px-4 py-2 rounded-lg text-white bg-teal-500 hover:bg-teal-600">Resume</Link>
                <Link to="/Contact" className="px-4 py-2 rounded-lg bg-slate-400 text-white ml-3 hover:text-slate-600">Contact</Link>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Home