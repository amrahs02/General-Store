import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="mb-8 md:mb-0">
          <h4 className="text-xl font-bold mb-4">ONLINE SHOPPING</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Beauty</li>
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h4 className="text-xl font-bold mb-4">USEFUL LINKS</h4>
          <ul>
            <li>Site Map</li>
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h4 className="text-xl font-bold mb-4">CUSTOMER POLICIES</h4>
          <ul>
            <li>
              <Link
                to="/contact"
                className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li >
              <Link
                to="/faq"
                className='hover:underline'>
                FAQ
              </Link>
            </li>
            {/* <li>T&C</li> */}
            {/* <li>Terms Of Use</li> */}
            {/* <li>Privacy policy</li> */}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">KEEP IN TOUCH</h4>
          <p className="mb-4">100% ORIGINAL guarantee for all products at Anushka General Store</p>
          <p>Return within 14 days of receiving your order</p>
        </div>
      </div>

      <div className="bg-gray-700 py-4 text-center">
        <p className="text-sm text-gray-400 ">&copy; {new Date().getFullYear()} Anushka General Store. All rights reserved.</p>
        <p className="text-sm text-gray-400  ">Thank you for shopping with us. Visit again soon!</p>
        <p className="text-sm text-gray-400  ">Design and Developed by <Link to="https://sandeepsharma.vercel.app" target='_blank' > <span className='font-bold hover:underline' >Sandeep Sharma</span></Link> </p>
      </div>
    </footer>
  );
};

export default Footer;
