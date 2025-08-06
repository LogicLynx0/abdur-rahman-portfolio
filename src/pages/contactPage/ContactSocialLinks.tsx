import React from 'react'

const ContactSocialLinks = () => {
  return (
     <div>
        <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors group"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">
              🐙
            </span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors group"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">
              💼
            </span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors group"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">
              🐦
            </span>
          </a>
        </div>
      </div>
  )
}

export default ContactSocialLinks