import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-200 w-full text-center h-screen pt-20'>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
        <div className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <p className="mb-6">
            Welcome to our website! We are passionate about delivering the best
            solutions to our customers, focusing on quality, innovation, and
            user experience.
          </p>
          <p className="mb-6">
            Our journey began with a mission to create impactful digital
            products. Over the years, we have grown into a team of dedicated
            professionals who value creativity and collaboration.
          </p>
          <p className="mb-6">
            Whether you're looking for web development, design, or consultation
            services, we're here to help you succeed. Let's create something
            amazing together!
          </p>
          <p className="font-medium text-gray-900">
            Thank you for choosing us. We look forward to working with you!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About