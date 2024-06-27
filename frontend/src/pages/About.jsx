// Example About Component with additional sections
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        
        {/* Mission and Values Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission and Values</h2>
          <p className="text-lg mb-4">
            At Our Company, we are committed to delivering high-quality products and exceptional customer service.
          </p>
          <p className="text-lg mb-4">
            Our values include integrity, innovation, and sustainability, driving everything we do.
          </p>
        </section>

        {/* Team Members Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Example team member card */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">John Doe</h3>
              <p className="text-sm text-gray-600 mb-2">CEO & Co-Founder</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Example team member card */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Jane Smith</h3>
              <p className="text-sm text-gray-600 mb-2">CTO & Co-Founder</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>

        {/* Company Milestones Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Milestones</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">Established in 20XX</li>
            <li className="mb-2">Reached 10,000 customers in 20XX</li>
            <li className="mb-2">Opened our first retail store in 20XX</li>
          </ul>
        </section>

        {/* Contact Information Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            Have questions or feedback? Reach out to us at <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>.
          </p>
          <p className="text-lg mb-4">
            Follow us on social media for updates and promotions: <a href="#" className="text-blue-500">@OurCompany</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
