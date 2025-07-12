'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-[100vh] bg-[#0072c6] flex items-center justify-center">
      <div className="max-w-7xl w-full px-4 sm:px-8 lg:px-16 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center w-full">
          {/* Left: Contact Info (flat, large, white) */}
          <div className="flex flex-col justify-center h-full text-white">
            <h2 className="text-6xl font-extrabold mb-10">Get in touch</h2>
            <hr className="border-white/50 w-20 mb-10" />
            <div className="text-3xl mb-10 font-light">For general enquiries</div>
            <div className="mb-8">
              <div className="font-semibold text-2xl mb-2">Address :</div>
              <div className="text-xl">110, 16th Road, Chembur, Mumbai - 400071</div>
            </div>
            <div className="mb-8">
              <div className="font-semibold text-2xl mb-2">Phone :</div>
              <div className="text-xl">+91 22 25208822</div>
            </div>
            <div className="mb-8">
              <div className="font-semibold text-2xl mb-2">Email :</div>
              <div className="text-xl">info@supremegroup.co.in</div>
            </div>
          </div>

          {/* Right: Contact Form (flat, underline style) */}
          <form onSubmit={handleSubmit} className="space-y-12 w-full flex flex-col justify-center">
            <div>
              <label htmlFor="name" className="block text-white text-2xl mb-3 font-semibold">Full name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-white text-white text-2xl py-4 px-0 focus:ring-0 focus:border-white placeholder-white/70"
                placeholder=""
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white text-2xl mb-3 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-white text-white text-2xl py-4 px-0 focus:ring-0 focus:border-white placeholder-white/70"
                placeholder=""
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-white text-2xl mb-3 font-semibold">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-white text-white text-2xl py-4 px-0 focus:ring-0 focus:border-white placeholder-white/70"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white text-2xl mb-3 font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-transparent border-0 border-b-2 border-white text-white text-2xl py-4 px-0 focus:ring-0 focus:border-white placeholder-white/70 resize-none"
                placeholder=""
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-40 mt-6 px-16 py-4 border-2 border-white text-white rounded-full text-2xl font-bold hover:bg-white hover:text-[#0072c6] transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 