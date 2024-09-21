'use client'

import { React, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRightIcon } from 'lucide-react'

export function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    restaurant: '',
    city: '',
    address: '',
    contactNo: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    (<div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Join TastyExpress</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 dark:border-neutral-800"
                onChange={handleChange} />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 dark:border-neutral-800"
                onChange={handleChange} />
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                className="w-full px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 dark:border-neutral-800"
                onChange={handleChange} />
            </div>
            <div>
              <input
                type="text"
                name="restaurant"
                placeholder="Restaurant Name"
                required
                className="w-full px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 dark:border-neutral-800"
                onChange={handleChange} />
            </div>
            <div>
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                className="w-full px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 dark:border-neutral-800"
                onChange={handleChange} />
            </div>
            <div>
              <input
                type="text"
                name="address"
                placeholder="Full Address"
                required
                className="w-full px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 dark:border-neutral-800"
                onChange={handleChange} />
            </div>
            <div>
              <input
                type="tel"
                name="contactNo"
                placeholder="Contact Number"
                required
                className="w-full px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 dark:border-neutral-800"
                onChange={handleChange} />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 flex items-center justify-center"
              type="submit">
              Sign Up
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </motion.button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{"'"}
            <a href="/login" className="text-orange-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
        <div
          className="h-32 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=128&width=384')" }}></div>
      </motion.div>
    </div>)
  );
}