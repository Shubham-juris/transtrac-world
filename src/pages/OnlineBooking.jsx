import React, { useState } from "react";

export default function OnlineBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    serviceType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request submitted! 🚛 We will contact you soon.");
    console.log(formData);
    // 👇 Yaha API call add kar sakte ho backend ke liye
    // fetch("/api/bookings", { method: "POST", body: JSON.stringify(formData) })
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-yellow-400 text-black py-16 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Online Booking
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Book logistics, fleet, or 3PL services seamlessly with Transtech World.
        </p>
      </div>

      {/* Booking Form */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Book Your Service
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />

            {/* Pickup Location */}
            <input
              type="text"
              name="pickup"
              placeholder="Pickup Location"
              value={formData.pickup}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />

            {/* Drop Location */}
            <input
              type="text"
              name="drop"
              placeholder="Drop Location"
              value={formData.drop}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />

            {/* Date */}
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />

            {/* Service Type */}
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="">Select Service Type</option>
              <option value="Freight">Freight Transport</option>
              <option value="Fleet Rental">Fleet Rental</option>
              <option value="3PL">3PL Logistics</option>
              <option value="Warehouse">Warehouse Solutions</option>
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-black hover:text-white transition"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
