import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1600px] px-5 xl:px-12 flex gap-6 mt-[100px] items-center flex-col xl:flex-row">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56647.74216285027!2d-122.44088585383308!3d37.76161346382989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1679161901339!5m2!1sen!2s"
        width="600"
        height="550"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-xl"
      ></iframe>

      <div className="flex flex-col items-center justify-center w-full gap-6 bg-silver max-w-none xl:max-w-[600px] py-12 xl:py-24 rounded-xl">
        <h2 className="testimonial-heading text-2xl sm:text-3xl">
          Contact Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-6">
          <div className="bg-white p-4 rounded-sm font-medium flex items-center gap-4">
            <div className="bg-brownGr p-3 rounded-md">
              <img src="/phone.png" alt="phone" className="w-6" />
            </div>
            971-971-9717
          </div>
          <div className="bg-white p-4 rounded-sm font-medium flex items-center gap-4">
            <div className="bg-brownGr p-3 rounded-md">
              <img src="/check.png" alt="check" className="w-6" />
            </div>
            aiden@gmail.com
          </div>
          <div className="bg-white p-4 rounded-sm font-medium flex items-center gap-4">
            <div className="bg-brownGr p-3 rounded-md">
              <img src="/msg.png" alt="message" className="w-6" />
            </div>
            9:00am ~ 10:00pm
          </div>
          <div className="bg-white p-4 rounded-sm font-medium flex items-center gap-4">
            <div className="bg-brownGr p-3 rounded-md">
              <img src="/notebook.png" alt="notebook" className="w-6" />
            </div>
            9182 en site
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
