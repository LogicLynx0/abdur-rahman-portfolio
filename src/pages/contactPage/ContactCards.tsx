import React from 'react'

const ContactCards = () => {
  return (
    <div className="space-y-6">
        <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-colors">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📧</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-400">hello@developer.com</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-colors">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-400">Available upon request</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-colors">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📍</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-400">Remote / Flexible</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactCards