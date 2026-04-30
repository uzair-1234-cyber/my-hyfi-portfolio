import React from 'react'
import Typing from './Typing'

export default function Footer(){
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="max-w-[1300px] mx-auto px-6 text-center">
        <h2 className="text-2xl mb-4"><Typing strings={["Connect with me on :)"]} speed={80} backSpeed={50} /></h2>
        <div className="flex justify-center gap-6 mb-4">
          <a className="text-pink-500" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          <a className="text-pink-500" href="https://github.com/uzair-1234-cyber" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="text-sm text-gray-400">&copy; 2025 Hem | All Rights Reserved</p>
      </div>
    </footer>
  )
}
