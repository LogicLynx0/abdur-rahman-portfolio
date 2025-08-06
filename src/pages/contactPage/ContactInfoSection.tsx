import React from "react";
import ContactCards from "./ContactCards";
import ContactSocialLinks from "./ContactSocialLinks";

const ContactInfoSection = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <p className="text-lg text-gray-300 mb-8">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology and development.
        </p>
      </div>

      {/* Contact Cards */}
      <ContactCards />

      {/* Social Links */}
        <ContactSocialLinks />

      {/* Availability */}
      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400 font-medium">
            Available for Projects
          </span>
        </div>
        <p className="text-gray-300 text-sm">
          I'm currently accepting new freelance projects and full-time
          opportunities.
        </p>
      </div>
    </div>
  );
};

export default ContactInfoSection;
