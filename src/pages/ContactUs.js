
import React from 'react';

function ContactUs() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Send Message</button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Location</h2>
          <p className="mb-2">Aadi Shankara Valley, Arepalli Road, Cherukupalli </p>
          <p className="mb-2">Phone: +9108341132839</p>
          <p className="mb-4">Email: info@aadishankaragrandmart.com</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2696938886384!2d80.68938767490371!3d16.05148878462541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a1be31b94730d%3A0x51e574f652608d10!2sAADI%20SHANKARA%20GRAND%20MART!5e0!3m2!1sen!2sin!4v1732297679895!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
