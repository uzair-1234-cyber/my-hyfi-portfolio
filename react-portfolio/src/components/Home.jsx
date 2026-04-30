import React from 'react'
import Typing from './Typing'

export default function Home(){
  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center" style={{backgroundImage: "url('https://images.pexels.com/photos/4360449/pexels-photo-4360449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
      <div className="max-w-[1300px] mx-auto px-6 w-full">
        <div className="text-white max-w-3xl">
          <div className="text-sm mb-2">Hello, my name is</div>
          <h1 className="text-6xl font-bold leading-tight">MUHAMMAD UZAIR</h1>
          <p className="text-3xl my-4">And I'm a <span className="text-pink-500"><Typing strings={["Front end developer","Fresher","Technician","Blogger","Designer","Freelancer","Manager"]} speed={80} backSpeed={50} /></span></p>
          <div className="mt-8">
            <a href="#contact" className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-semibold">Hire me</a>
          </div>
        </div>
      </div>
    </section>
  )
}
