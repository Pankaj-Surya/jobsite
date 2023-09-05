import React from 'react'

function TwoSection() {
  return (
    <div className="flex flex-wrap">
    <div className="w-full sm:w-2/5 md:w-3/5 lg:w-2/5 xl:w-3/5 mt-[-1rem]">
      {/* First Column - 60% width on medium and large screens, moved up by -1rem */}
      <div className="bg-gray-300 p-4">
        {/* Banner Section */}
        <div className="mb-6">
          <img src="https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp" alt="Banner" className="w-full" />
        </div>
        {/* Date, Title, and Description */}
        <div className="mb-6">
          <p>Date: September 5, 2023</p>
          <h2 className="text-xl font-bold">Page Title</h2>
          <p>Description of the page goes here.</p>
        </div>
        {/* Info About Page */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Info About Page</h3>
          <p>Title: Info Page</p>
          <p>Description: This is some information about the page.</p>
        </div>
      </div>
    </div>
    <div className="w-full sm:w-3/5 md:w-2/5 lg:w-3/5 xl:w-2/5 mt-[-1rem]">
      {/* Second Column - 30% width on medium and large screens, moved up by -1rem */}
      <div className="bg-blue-300 p-4">
        {/* Content for the second column */}
        Second Column (30%)
      </div>
    </div>
  </div>
  )
}

export default TwoSection