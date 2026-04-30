import React from 'react'
import Typing from './Typing'

export default function About(){
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-10">About me</h2>
        <div className="md:flex md:items-center md:gap-10">
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img src="/WhatsApp Image 2025-08-30 at 02.45.23_4c757835.jpg" alt="profile" className="w-80 h-80 object-cover rounded-2xl"/>
          </div>
          <div className="md:w-1/2">
            <div className="text-2xl font-semibold mb-3">I'm muhammad uzair and I'm a <span className="text-pink-500"><Typing strings={["Front end developer","Fresher","Technician"]} speed={90} backSpeed={60} /></span></div>
            <p className="text-gray-700 mb-4">And I am 17 years young boy with dynamic and enthusiastic person looking for the job Web Design and Development mostly specializing in front end development. A firm believer in my own abilities, I am also a team player who thrives in a challenging environment.</p>
            <a href="#contact" className="inline-block border-2 border-pink-500 text-pink-500 px-6 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}
