import React from "react";
import ContactForm from "./ContactForm";
import ContactInfoSection from "./ContactInfoSection";

const ContactPageBody = () => {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfoSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPageBody;
