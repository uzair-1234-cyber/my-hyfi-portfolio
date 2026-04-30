import React, { useEffect, useState } from 'react'

export default function Typing({strings, speed=100, backSpeed=60, loop=true}){
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [forward, setForward] = useState(true)

  useEffect(()=>{
    let mounted = true
    const current = strings[idx % strings.length]
    const timer = setInterval(()=>{
      if(!mounted) return
      setText(prev => {
        if(forward){
          if(prev.length < current.length) return current.slice(0, prev.length+1)
          setForward(false)
          return prev
        } else {
          if(prev.length > 0) return prev.slice(0, prev.length-1)
          setForward(true)
          setIdx(i => (i+1) % strings.length)
          return ''
        }
      })
    }, forward ? speed : backSpeed)
    return ()=>{mounted=false; clearInterval(timer)}
  },[idx, forward, strings, speed, backSpeed])

  return <span>{text}</span>
}
