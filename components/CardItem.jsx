import React from 'react'
import AboutImg from '../public/assets/download.png'
function CardItem() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={AboutImg} alt={"ddd"} className="w-full h-48 object-cover" />

      <div className="p-4">
        <p className="text-gray-500 text-sm">September 4, 2023</p>
        <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
        <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
      </div>
    </div>
  )
}

export default CardItem