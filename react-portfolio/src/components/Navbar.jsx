import React, { useEffect, useState } from 'react'

export default function Navbar(){
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(()=>{
    const onScroll = () => setSticky(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <>
    <nav className={`fixed w-full z-50 transition-all ${sticky ? 'py-3 bg-black' : 'py-6 bg-transparent'}`}>
      <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-between">
        <div className="logo">
          <a href="#" className="text-white text-2xl font-extrabold tracking-wide">MUHAMMAD <span className="text-pink-500">UZAIR</span></a>
        </div>
        <ul className="hidden md:flex items-center space-x-6">
          <li><a href="#home" className="text-white hover:text-pink-500">Home</a></li>
          <li><a href="#about" className="text-white hover:text-pink-500">About</a></li>
          <li><a href="#services" className="text-white hover:text-pink-500">Services</a></li>
          <li><a href="#skills" className="text-white hover:text-pink-500">Skills</a></li>
          <li><a href="#teams" className="text-white hover:text-pink-500">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-pink-500">Contact</a></li>
        </ul>
        <button className="md:hidden text-white" onClick={()=>setOpen(o=>!o)} aria-label="Toggle menu">{open? '✕' : '☰'}</button>
      </div>
    </nav>
    {open && (
      <div className="fixed inset-0 bg-black/70 z-40 md:hidden" onClick={()=>setOpen(false)}>
        <div className="absolute right-0 top-0 w-3/4 max-w-xs h-full bg-white text-black p-6" onClick={e=>e.stopPropagation()}>
          <ul className="space-y-4">
            <li><a href="#home" onClick={()=>setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={()=>setOpen(false)}>About</a></li>
            <li><a href="#services" onClick={()=>setOpen(false)}>Services</a></li>
            <li><a href="#skills" onClick={()=>setOpen(false)}>Skills</a></li>
            <li><a href="#teams" onClick={()=>setOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={()=>setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    )}
    </>
  )
}
