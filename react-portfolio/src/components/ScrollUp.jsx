import React, { useEffect, useState } from 'react'

export default function ScrollUp(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  if(!show) return null
  return (
    <button onClick={()=> window.scrollTo({top:0,behavior:'smooth'})} className="fixed right-6 bottom-6 bg-pink-500 text-white p-3 rounded shadow-lg">↑</button>
  )
}
