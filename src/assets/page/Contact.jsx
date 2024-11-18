import React from 'react'

const Contact = () => {
  return (
    <div  className='bg-gray-300 w-full   pt-10'>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow">
          <div >
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="john@example.com"
            />
          </div>
          <div >
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Your Message
            </label>
            <textarea
              id="message"
              className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              rows="3"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact