import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import poert1 from "../assets/imge/poert1.png";
import poert2 from "../assets/imge/port2.png";
import poert3 from "../assets/imge/port3.png";
export default function Portfolio() {
  const [modalImg, setModalImg] = useState(null);

  const images = [poert1, poert2, poert3, poert1, poert2, poert3];

  const openModal = (src) => setModalImg(src);
  const closeModal = () => setModalImg(null);
  return (
    <>
   <section className="pt-28 pb-10">
  <div className="container mx-auto px-4 md:px-10 flex flex-col items-center justify-center gap-5">
    <h2 className="text-main uppercase font-bold text-5xl text-center">
      Portfolio component
    </h2>

    <div className="flex items-center gap-3">
      <div className="h-1 w-20 bg-main"></div>
      <FaStar />
      <div className="h-1 w-20 bg-main"></div>
    </div>
  </div>
</section>

<section className="pb-20">
  <div className="container mx-auto px-3 md:px-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {images.map((imgSrc, index) => (
        <div key={index} className="flex justify-center">
          <div
            className="relative port-item cursor-pointer group"
            onClick={() => openModal(imgSrc)}
          >
            <img
              src={imgSrc}
              alt={`portfolio-${index}`}
              className="w-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-75 bg-secondary transition-opacity rounded-lg">
              <FaPlus className="text-white text-3xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {modalImg && (
        <div className="custom-modal" onClick={closeModal}>
          <img
            src={modalImg}
            alt="modal-img"
            className="modal-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
