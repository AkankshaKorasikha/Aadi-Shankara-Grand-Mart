import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Aadi Shankara Grand Mart</h3>
            <p>Quality Matters!!</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Aadi Shankara Valley, Arepalli Road,Cherukupalli</p>
            <p>Phone: 8341132839</p>
            <p>Email: info@aadishankaragrandmart.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-800">Facebook</a>
              <a href="/" className="text-gray-600 hover:text-gray-800">Twitter</a>
              <a href="/" className="text-gray-600 hover:text-gray-800">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>&copy; 2023 Aadi Shankara Grand Mart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

