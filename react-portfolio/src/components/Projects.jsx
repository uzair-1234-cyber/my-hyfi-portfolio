import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const projects = [
  {img:'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg', title:'SJS Hot N\' Spicy', desc:'Restaurant project', url:'https://apps.pfcrestaurant.com.np/'},
  {img:'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg', title:'Burger House', desc:'Responsive animated website', url:'https://uzair-1234-cyber.github.io/FAST-FOOD-WEBSITE-BURGER/'},
  {img:'https://images.pexels.com/photos/1804577/pexels-photo-1804577.jpeg', title:'Deep IT Institute', desc:'Institution project', url:'https://uzair-1234-cyber.github.io/it-website/'},
]

export default function Projects(){
  const settings = {dots:false,infinite:true,autoplay:true,autoplaySpeed:2000,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1000,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]}
  return (
    <section id="teams" className="py-20 bg-gray-900 text-white">
      <div className="max-w-[1300px] mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-10">My Projects</h2>
        <div>
          <Slider {...settings}>
            {projects.map((p, i) => (
              <div key={i} className="px-3">
                <div className="bg-white text-black rounded-xl overflow-hidden shadow-lg">
                  <img src={p.img} alt={p.title} className="w-full h-48 object-cover"/>
                  <div className="p-4">
                    <div className="font-semibold text-lg">{p.title}</div>
                    <p className="text-sm text-gray-600 my-2">{p.desc}</p>
                    <a href={p.url} className="inline-block text-pink-500">View Project</a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
