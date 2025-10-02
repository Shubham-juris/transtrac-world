import React, { useState } from "react";
import { NavLink } from "react-router-dom";


export default function FAQSection() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "What services does Transtech World offer?", a: "We provide 3PL logistics, fleet management, warehousing, and supply chain optimization." },
    { q: "Do you provide global services?", a: "Yes, Transtech World operates across domestic and international markets." },
    { q: "How can I track my shipment?", a: "We provide a real-time tracking portal for all clients." },
  ];

  return (
    <>
    <section className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-black p-4 rounded-lg cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <h3 className="font-semibold text-lg">{item.q}</h3>
            {open === i && <p className="text-gray-400 mt-2">{item.a}</p>}
          </div>
        ))}
      </div>

      
    </section>
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
            </>
  );
}
