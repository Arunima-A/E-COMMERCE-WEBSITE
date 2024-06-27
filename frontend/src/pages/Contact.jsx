// Example Contact Component with additional elements
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        {/* Contact Information Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg mb-4">
            Have questions or feedback? Reach out to us at <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>.
          </p>
          <p className="text-lg mb-4">
            Call us at <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>.
          </p>
          <p className="text-lg mb-4">
            Visit us at:<br />
            123 Main Street,<br />
            Cityville, State, Country<br />
            ZIP Code: 12345
          </p>
        </section>

        {/* Map Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <div className="bg-white rounded-lg shadow-md">
            {/* Replace with your map component */}
            <iframe
              title="Our Location"
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-71.000000!3d42.000000!4m5!3m4!1s0x0:0x0!8m2!3d42.000000!4d-71.000000"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Social Media Links Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            {/* Replace with your social media icons or links */}
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Example Facebook icon */}
                <path d="M12 2C6.486 2 2 6.486 2 12c0 4.41 3.223 8.066 7.438 8.75v-6.208H6.5v-2.75h2.938V9.5c0-2.923 1.832-4.5 4.406-4.5 1.25 0 2.625.219 2.625.219v2.906h-1.5c-1.453 0-1.906.906-1.906 1.844v2.25h3.25l-.5 2.75h-2.75V20.75C18.777 20.396 22 16.752 22 12c0-5.514-4.486-10-10-10z" />
              </svg>
            </a>
            {/* Example Twitter icon */}
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.46 6.442c-.821.365-1.703.61-2.628.725.944-.57 1.67-1.473 2.014-2.55-.885.523-1.866.905-2.91 1.113-.835-.89-2.025-1.448-3.34-1.448-2.528 0-4.574 2.047-4.574 4.574 0 .36.042.706.12 1.04-3.798-.19-7.16-2.008-9.41-4.774-.392.67-.618 1.45-.618 2.285 0 1.582.805 2.98 2.032 3.794-.75-.025-1.454-.23-2.072-.573v.057c0 2.212 1.573 4.06 3.65 4.476-.383.103-.788.158-1.202.158-.294 0-.58-.028-.863-.083.58 1.82 2.26 3.14 4.257 3.178-1.558 1.29-3.522 2.058-5.654 2.058-.368 0-.73-.022-1.09-.064 2.015 1.29 4.403 2.046 6.98 2.046 8.374 0 12.955-6.937 12.955-12.953 0-.198-.005-.396-.014-.59.89-.642 1.668-1.445 2.28-2.356z" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
