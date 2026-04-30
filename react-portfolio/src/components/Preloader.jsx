import React, { useEffect, useState } from 'react'

export default function Preloader(){
  const [show, setShow] = useState(true)
  useEffect(()=>{
    const onLoad = () => setShow(false)
    window.addEventListener('load', onLoad)
    // fallback: hide after 2s
    const t = setTimeout(()=> setShow(false), 2000)
    return ()=>{window.removeEventListener('load', onLoad); clearTimeout(t)}
  },[])
  if(!show) return null
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="animate-spin w-16 h-16 rounded-full border-4 border-t-pink-500 border-gray-200"></div>
    </div>
  )
}
