import React from 'react'

const items = [
  {title:'Designer', text:'I am a Fresher web designer with fresh ideas.'},
  {title:'Development', text:'I help people build their businesses online.'},
  {title:'SEO', text:'Provide SEO to improve search rankings.'},
  {title:'Video Editing', text:'Create attractive videos for digital platforms.'},
  {title:'Digital Marketing', text:'Advertise and grow businesses digitally.'},
  {title:'App Development', text:'Build user-friendly apps.'}
]

export default function Services(){
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="max-w-[1300px] mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-10">My services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it, idx)=> (
            <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">{it.title}</h3>
              <p className="text-gray-300">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
