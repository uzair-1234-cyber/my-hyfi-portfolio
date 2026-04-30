import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',subject:'',message:''})
  const onChange = e => setForm({...form,[e.target.name]:e.target.value})
  const onSubmit = e => {e.preventDefault(); alert('Message sent (demo)'); setForm({name:'',email:'',subject:'',message:''})}
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-10">Contact me</h2>
        <div className="md:flex md:gap-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="text-2xl font-semibold mb-3">Get in Touch</div>
            <p className="text-gray-700">If you are interested in working together fill out the form and I will get back to you.</p>
            <div className="mt-6">
              <div className="flex items-start gap-3"><div className="text-xl">👤</div><div><div className="font-medium">Name</div><div className="text-sm text-gray-600">MUHAMMAD UZAAIR</div></div></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="text-2xl font-semibold mb-3">Message me</div>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Name" required className="flex-1 border px-3 py-2 rounded"/>
                <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Email" required className="flex-1 border px-3 py-2 rounded"/>
              </div>
              <input name="subject" value={form.subject} onChange={onChange} type="text" placeholder="Subject" required className="w-full border px-3 py-2 rounded"/>
              <textarea name="message" value={form.message} onChange={onChange} cols="30" rows="6" placeholder="Message.." required className="w-full border px-3 py-2 rounded"></textarea>
              <div><button type="submit" className="px-6 py-2 bg-pink-500 text-white rounded">Send message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
