import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, ClockIcon, TruckIcon, UsersIcon, BuildingOfficeIcon, CalendarIcon } from '@heroicons/react/24/outline';

export function CorporateServices() {
  const services = [
    {
      title: 'Executive Airport Transfers',
      icon: <TruckIcon className="w-8 h-8" />
    },
    {
      title: 'Roadshows and Conferences',
      icon: <BuildingOfficeIcon className="w-8 h-8" />
    },
    {
      title: 'Daily Commutes for Executives',
      icon: <ClockIcon className="w-8 h-8" />
    },
    {
      title: 'VIP Client Transport',
      icon: <UsersIcon className="w-8 h-8" />
    },
    {
      title: 'Intercity Travel for Business',
      icon: <BriefcaseIcon className="w-8 h-8" />
    },
    {
      title: 'Event and Group Transportation',
      icon: <CalendarIcon className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08365.jpg")' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 sm:space-y-6"
              >
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
                >
                  Corporate
                  <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 bg-gradient-to-r from-[#FF6600] to-orange-500 bg-clip-text text-transparent">
                    Transportation Solutions
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
                >
                  Professional transportation solutions tailored for your business needs. Experience reliability, efficiency, and luxury in every journey.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 sm:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FF6600] to-orange-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                  <BriefcaseIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FF6600] to-orange-500 bg-clip-text text-transparent mb-3 sm:mb-4">Welcome to Corporate Excellence</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  At Ikonic Limousine, we recognize that business travel demands reliability, efficiency, and discretion. Our corporate services are designed to support your daily operations, client engagements, and executive mobility with a high standard of professionalism.
                </p>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 sm:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FF6600] to-orange-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                    <BuildingOfficeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#FF6600] to-orange-500 bg-clip-text text-transparent mb-3 sm:mb-4">Fleet Designed for Comfort and Productivity</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Our executive vehicles—ranging from premium sedans to spacious SUVs—offer a comfortable environment to relax or catch up on work. Features like in-car Wi-Fi, mobile charging ports, and refreshments are standard to support your productivity on the move.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 sm:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FF6600] to-orange-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                    <UsersIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#FF6600] to-orange-500 bg-clip-text text-transparent mb-3 sm:mb-4">Flexible Solutions for Your Business Needs</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    From daily executive commutes and airport transfers to transportation for conferences and corporate events, we offer adaptable packages to suit various business requirements.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 sm:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300"
            >
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FF6600] to-orange-500 bg-clip-text text-transparent mb-6 sm:mb-8">Services Offered</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-white transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100">
                    <div className="text-[#FF6600]">{service.icon}</div>
                    <span className="text-sm sm:text-base font-medium text-gray-700">{service.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-gradient-to-r from-[#FF6600] to-orange-500 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 sm:p-8 text-white text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Join Our Corporate Program</h2>
              <p className="text-base sm:text-lg mb-4 sm:mb-6">
                Streamline your company's transportation with Ikonic Limousine. Contact us today to learn more about our corporate packages and set up a business account.
              </p>
              <button className="bg-white text-[#FF6600] px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                Contact Sales
              </button>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 sm:p-8 sticky top-24 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 border border-gray-100 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FF6600] to-orange-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                  <BriefcaseIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FF6600] to-orange-500 bg-clip-text text-transparent mb-4 sm:mb-6">Corporate Inquiry</h2>
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base shadow-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600] focus:bg-white transition-all duration-300 hover:border-gray-300 placeholder-gray-400"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base shadow-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600] focus:bg-white transition-all duration-300 hover:border-gray-300 placeholder-gray-400"
                      placeholder="Enter contact person name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base shadow-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600] focus:bg-white transition-all duration-300 hover:border-gray-300 placeholder-gray-400"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base shadow-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600] focus:bg-white transition-all duration-300 hover:border-gray-300 placeholder-gray-400"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base shadow-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600] focus:bg-white transition-all duration-300 hover:border-gray-300 placeholder-gray-400"
                      placeholder="Tell us about your requirements"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FF6600] to-orange-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-base hover:from-[#FF6600]/90 hover:to-orange-500/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}