import React from "react";
import { Truck, Package, Warehouse, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function RentalsService() {
  const services = [
    {
      icon: <Truck className="h-10 w-10 text-yellow-500" />,
      title: "Fleet Rentals",
      desc: "Wide range of trucks, trailers, and vans available for rental to meet all logistics needs.",
    },
    {
      icon: <Package className="h-10 w-10 text-yellow-500" />,
      title: "3PL Solutions",
      desc: "Seamless third-party logistics services connecting carriers, shippers, and warehouses.",
    },
    {
      icon: <Warehouse className="h-10 w-10 text-yellow-500" />,
      title: "Warehouse & Storage",
      desc: "Secure and efficient warehousing facilities for short-term and long-term needs.",
    },
    {
      icon: <Clock className="h-10 w-10 text-yellow-500" />,
      title: "On-Time Delivery",
      desc: "Advanced tracking & fleet intelligence to ensure timely and reliable deliveries.",
    },
  ];

  const fleet = [
    {
      img: "https://via.placeholder.com/300x180.png?text=Truck",
      title: "Heavy Duty Trucks",
      desc: "Perfect for long-haul freight and bulk shipments.",
    },
    {
      img: "https://via.placeholder.com/300x180.png?text=Trailer",
      title: "Trailers",
      desc: "Ideal for industrial cargo and large-scale transport.",
    },
    {
      img: "https://via.placeholder.com/300x180.png?text=Van",
      title: "Delivery Vans",
      desc: "Best for last-mile delivery and urban logistics.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-yellow-400 text-black py-16 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Rentals & Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Reliable fleet rentals and logistics services tailored for businesses of all sizes.
        </p>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fleet Rentals Section */}
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
                <img src={vehicle.img} alt={vehicle.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{vehicle.title}</h3>
                  <p className="text-gray-600 text-sm">{vehicle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-yellow-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Transtech World?</h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-8">
            We are revolutionizing logistics with advanced tracking, fleet intelligence, and 3PL transportation solutions. Our mission is to connect carriers, shippers, and warehouses in one seamless ecosystem.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Book Your Fleet?</h2>
        <p className="mb-6 text-lg">Get started today with our easy online booking system.</p>
        <NavLink to="/online-booking">
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-white hover:text-black border border-black transition">
            Book Online
          </button>
        </NavLink>
      </div>
    </div>
  );
}
