import { useEffect, useState } from 'react'

export default function useInView(ref, options={root:null,threshold:0.3}){
  const [inView, setInView] = useState(false)
  useEffect(()=>{
    if(!ref.current) return
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting) setInView(true)
      })
    }, options)
    obs.observe(ref.current)
    return ()=> obs.disconnect()
  },[ref, options])
  return inView
}
