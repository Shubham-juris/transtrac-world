import React from 'react'
import img from "../../assets/services/heavy.jpg"
import img1 from "../../assets/services/trailer.jpg"
import truck from "../../assets/services/truck.jpg"

const Rentals = () => {
const fleet = [
    {
      img: img,
      title: "Heavy Duty Trucks",
      desc: "Perfect for long-haul freight and bulk shipments.",
    },
    {
      img: img1,
      title: "Trailers",
      desc: "Ideal for industrial cargo and large-scale transport.",
    },
    {
      img:truck,
      title: "Delivery Vans",
      desc: "Best for last-mile delivery and urban logistics.",
    },
  ];


  return (
    <>
     <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Fleet Available for Rental
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((vehicle, idx) => (
              <div
                key={idx}
                className="bg-gray-50 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
              >
                <img src={vehicle.img} alt={vehicle.title} className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{vehicle.title}</h3>
                  <p className="text-gray-600 text-sm">{vehicle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 
    </>
  )
}

export default Rentals
