import React, { useRef } from 'react'
import useInView from '../hooks/useInView'

export default function Skills(){
  const ref = useRef(null)
  const visible = useInView(ref)
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-10">My skills</h2>
        <div className="md:flex md:gap-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="text-2xl font-semibold mb-3">My creative skills & experiences.</div>
            <p className="text-gray-700">Since beginning my journey as a freelance developer nearly 1 month ago, I've done remote work for agencies and startups.</p>
            <a href="#contact" className="inline-block mt-4 text-pink-500">Learn more</a>
          </div>
          <div ref={ref} className="md:w-1/2 space-y-6">
            <div>
              <div className="flex justify-between mb-2"><span>HTML</span><span>90%</span></div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden"><div style={{width: visible? '90%':'0%', transition:'width 1s'}} className="h-full bg-pink-500"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-2"><span>CSS</span><span>80%</span></div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden"><div style={{width: visible? '80%':'0%', transition:'width 1s'}} className="h-full bg-pink-500"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-2"><span>JavaScript</span><span>70%</span></div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden"><div style={{width: visible? '70%':'0%', transition:'width 1s'}} className="h-full bg-pink-500"></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
