import React from 'react';
import shopInfo from '../../assets/Data/Names.json'; // Adjust the path based on your project structure
import BreadCrumb from '../Others/BreadCrumb';


const Contact = () => {
  const businessHours = [
    { day: 'Monday', hours: '6:50 AM - 8:30 PM' },
    { day: 'Tuesday', hours: '6:50 AM - 8:30 PM' },
    { day: 'Wednesday', hours: '6:50 AM - 8:30 PM' },
    { day: 'Thursday', hours: '6:50 AM - 8:30 PM' },
    { day: 'Friday', hours: '6:50 AM - 8:30 PM' },
    { day: 'Saturday', hours: '6:50 AM - 8:30 PM' },
    { day: 'Sunday', hours: '7:00 AM - 8:30 PM' },
  ];

  return (
    <div className="contact-container p-0 bg-gray-100">
      <BreadCrumb />

      <div className="contact-content bg-white p-4 rounded-lg  text-center">
        <h1 className="text-4xl font-bold mb-6 bg-blue-200 text-blue-500  p-4 rounded">
          Contact Us
        </h1>


        {/* Text within a Box */}
        <div className="text-box mt-8 p-4 bg-gray-100 rounded">
          <h2 className="text-2xl font-bold mb-4">Welcome to Our Store!</h2>
          <p className="text-gray-700">
            We're excited to serve you in the heart of {shopInfo.district}. Whether you're looking for the latest gadgets or
            just want to chat, our friendly team is here for you.
          </p>
        </div>

        {/* Contact Details */}
        <div className="contact-details mt-8 bg-opacity-25 bg-gray-200 p-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-700">
            Visit us at{' '}
            <span className="font-bold text-blue-500">{shopInfo.address}</span>
            <br />
            Call us at{' '}
            <span className="font-bold text-blue-500">{shopInfo.phoneNumber}</span>
            <br />
            Mobile:{' '}
            <span className="font-bold text-blue-500">{shopInfo.phoneNumber}</span>
            <br />
            Email us at{' '}
            <span className="font-bold text-blue-500">{shopInfo.email}</span>
          </p>
        </div>


        {/* Social Media Links */}
        {/* Business Hours Section */}
        <div className="business-hours mt-8">
          <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
          <ul className="text-gray-700">
            {businessHours.map((dayInfo) => (
              <li key={dayInfo.day}>
                <strong>{dayInfo.day}:</strong> {dayInfo.hours}
              </li>
            ))}
          </ul>
        </div>


        {/* Google Maps Embed */}

        <div className="google-maps mt-6">
          <iframe
            title="Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.0580376764509!2d84.64130387611816!3d26.26261245480659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992de50c2dd0491%3A0xf6f986b22e36bd44!2sAnushka%20General%20Store%20%26%20Sudha%20Corner!5e0!3m2!1sen!2sin!4v1702875322481!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


      </div>
    </div>
  );
};

export default Contact;
