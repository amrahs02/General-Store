import React from 'react';
import shopInfo from '../../assets/Data/Names.json';
import BreadCrumb from '../Others/BreadCrumb';
import Header from '../Others/Header';

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
    <div className="contact-container sm:m-10  text-white">
      <BreadCrumb />
      <Header />

      <div className="contact-content rounded-xl text-center">
        <h1 className="text-4xl font-bold mb-6 bg-slate-800 text-blue-500 p-4 rounded-xl">
          Contact Us
        </h1>

        <div className="text-box mt-8 p-6 bg-gray-800 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Welcome to Our Store!</h2>
          <p className="text-gray-300">
            We're thrilled to serve you in the heart of {shopInfo.district}. Whether you're searching for the latest gadgets or
            just want to have a chat, our friendly team is here for you.
          </p>
        </div>

        <div className="contact-details mt-8 bg-opacity-25 bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
          <p className="text-gray-300">
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

        <div className="business-hours mt-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Business Hours</h2>
          <ul className="text-gray-300">
            {businessHours.map((dayInfo) => (
              <li key={dayInfo.day}>
                <strong>{dayInfo.day}:</strong> {dayInfo.hours}
              </li>
            ))}
          </ul>
        </div>

        <div className="google-maps mt-8 rounded-xl bg-slate-800 p-4">
          <iframe
            title="Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.0580376764509!2d84.64130387611816!3d26.26261245480659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992de50c2dd0491%3A0xf6f986b22e36bd44!2sAnushka%20General%20Store%20%26%%20Corner!5e0!3m2!1sen!2sin!4v1702875322481!5m2!1sen!2sin"
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
