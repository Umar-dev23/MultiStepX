import React from 'react';
import { FaUser, FaEnvelope, FaLock, FaCalendar, FaVenusMars } from 'react-icons/fa';

const Step1 = ({}) => {

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
        User Profile
      </h2>
      
      <div className="space-y-6">
        {/* Full Name Field */}
        <div className="relative">
          <input
            type="text"
            name="fullName"
            value={formData.fullName || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder=" "
          />
          <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-xs peer-focus:top-1 peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
            Full Name
          </label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaUser className="text-gray-500" />
          </div>
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder=" "
          />
          <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-xs peer-focus:top-1 peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
            Email
          </label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaEnvelope className="text-gray-500" />
          </div>
        </div>

        {/* Password Field */}
        <div className="relative">
          <input
            type="password"
            name="password"
            value={formData.password || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder=" "
          />
          <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-xs peer-focus:top-1 peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
            Password
          </label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaLock className="text-gray-500" />
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="relative">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder=" "
          />
          <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-xs peer-focus:top-1 peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
            Confirm Password
          </label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaLock className="text-gray-500" />
          </div>
        </div>

        {/* Gender Field */}
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <FaVenusMars className="text-gray-500 mr-2" />
            <span>Gender</span>
          </div>
          <div className="flex space-x-4 ml-6">
            {['Male', 'Female', 'Other'].map((gender) => (
              <label key={gender} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={handleChange}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span>{gender}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Date of Birth Field */}
        <div className="relative">
          <input
            type="date"
            name="dob"
            value={formData.dob || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder=" "
          />
          <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-xs peer-focus:top-1 peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
            Date of Birth
          </label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaCalendar className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;