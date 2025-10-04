import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function About() {
  return (
    <>
<section className="h-screen bg-secondary py-5 text-white">
  <div className="container mx-auto px-4 md:px-10 flex flex-col items-center justify-center gap-5 h-full">
    <h2 className="text-white uppercase font-bold text-5xl text-center">
      About component
    </h2>


    <div className="flex items-center gap-3">
      <div className="h-1 w-20 bg-white"></div>
      <FaStar />
      <div className="h-1 w-20 bg-white"></div>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <p className="text-lg">
        Freelancer is a free bootstrap theme created by Route. The download
        includes the complete source files including HTML, CSS, and JavaScript
        as well as optional SASS stylesheets for easy customization.
      </p>

      <p className="text-lg">
        Freelancer is a free bootstrap theme created by Route. The download
        includes the complete source files including HTML, CSS, and JavaScript
        as well as optional SASS stylesheets for easy customization.
      </p>
    </div>
  </div>
</section>





    </>
  )
}
