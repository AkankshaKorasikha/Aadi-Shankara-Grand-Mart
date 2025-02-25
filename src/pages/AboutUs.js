import React from 'react';

function AboutUs() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">About Aadi Shankara Grand Mart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Aadi Shankara Grand Mart was founded in 2015 with a simple mission: to provide high-quality groceries and household items to our community at affordable prices. Our journey began with a small store and a big dream, and over the years, we've grown to become a trusted name in the neighborhood.
          </p>
          <p>
            We believe that quality matters in every aspect of life, which is why we carefully select each product that goes on our shelves. Our commitment to excellence extends beyond our products to our customer service, ensuring that every visit to Aadi Shankara Grand Mart is a pleasant experience.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Quality: We never compromise on the quality of our products.</li>
            <li>Community: We're proud to be a part of and serve our local community.</li>
            <li>Affordability: We strive to offer competitive prices without sacrificing quality.</li>
            <li>Customer Service: Our friendly staff is always ready to assist you.</li>
            <li>Sustainability: We're committed to reducing our environmental impact.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

