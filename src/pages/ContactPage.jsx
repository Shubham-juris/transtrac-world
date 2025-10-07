import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 transition text-white font-semibold py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info + Map */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-400">
            📍 St John, Newfoundland, Canada
          </p>
          <p className="text-gray-400">
            📧 infotranstechworld@gmail.com
          </p>
          {/* <p className="text-gray-400">
            📞 +1-XXX-XXX-XXXX
          </p> */}

          {/* Google Map */}
          <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
            <iframe
              title="Transtech World Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51882.54001790214!2d-52.7701102!3d47.5615099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x482c8b1f93f18f27%3A0x3b0b1c7ec1e7e!2sSt.%20John's%2C%20NL%2C%20Canada!5e0!3m2!1sen!2sin!4v1695711712345!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
