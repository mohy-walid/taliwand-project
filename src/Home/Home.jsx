import React from 'react'
import avataars from '../../src/assets/imge/avataaars.svg'
import { FaStar } from 'react-icons/fa'
export default function Home() {
  return (
    <>
 <main className='h-screen bg-secondary py-5'>
  <section className='flex flex-col items-center justify-center gap-5 h-full text-white'>
     <figure className='w-3xs '>
<img src={avataars} alt=""  className='w-full'/>
</figure>
    <h2 className=' font-bold text-4xl'>START FRAMEWORK</h2>
    <div className='flex items-center gap-3'>
       <div className=" h-1 w-20 bg-white"></div>
      < FaStar />
      <div className="h-1 w-20 bg-white"></div>
    </div>
  <p className=''>Graphic Artist - Web Designer - Illustrator</p>
  </section>

  </main>
    </>
  )
}
