import React from 'react'
import { FaStar } from "react-icons/fa";
import { FloatingLabel } from "flowbite-react";
import { Button } from "flowbite-react";
export default function Contact() {
  return (
    <>
      <section className="pt-28 pb-10">
  <div className="container mx-auto px-4 md:px-10 flex flex-col items-center justify-center gap-5">
    <h2 className="text-main uppercase font-bold text-3xl text-center">
     CONTACT SECTION
    </h2>

    <div className="flex items-center gap-3">
      <div className="h-1 w-20 bg-main"></div>
      <FaStar />
      <div className="h-1 w-20 bg-main"></div>
    </div>
  </div>
</section>

<section className="pt-10 pb-10">
  <div className="container">
<form class="w-2xl mx-auto">
  <div class="grid grid-flow-col justify-stretch space-x-4 mb-5">
       <FloatingLabel variant="standard" label="userName" />
    </div>

  <div class="grid grid-flow-col justify-stretch space-x-4 mb-5">
       <FloatingLabel variant="standard" label=" userAge"/>
    </div>

<div class="grid grid-flow-col justify-stretch space-x-4 mb-5">
       <FloatingLabel variant="standard" label="user Email"/>
    </div>

<div class="grid grid-flow-col justify-stretch space-x-4 mb-5 ">
       <FloatingLabel variant="standard" label="userPassword"/>
    </div>

   <Button color="green">send Message </Button>
  </form>
  </div>
</section>
    </>
  )
}
