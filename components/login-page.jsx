"use client"

import { React, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRightIcon, LockIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'

export function LoginPageComponent() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("'Form submitted:'", formData)
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to TastyExpress</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <MailIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 dark:border-neutral-800"
                onChange={handleChange} />
            </div>
            <div className="relative">
              <LockIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 dark:border-neutral-800"
                onChange={handleChange} />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 flex items-center justify-center"
              type="submit">
              Log In
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </motion.button>
          </form>
          <div className="mt-4 text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-orange-500 hover:underline">
              Forgot password?
            </Link>
          </div>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{"'"}
            <Link href="/signup" className="text-orange-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
        <div
          className="h-32 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=128&width=384')" }}
          role="img"
          aria-label="Decorative food image"></div>
      </motion.div>
    </div>)
  );
}