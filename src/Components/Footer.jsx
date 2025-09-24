import { FaFacebook, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12 mt-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mx-auto container">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-white font-semibold mb-2">CS — Ticket System</h3>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="">
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sale</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Social Links</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex gap-2 items-center">
              <FaXTwitter />
              @CS — Ticket System
            </li>
            <li className="flex gap-2 items-center">
              <FaFacebook />
              @CS — Ticket System
            </li>
            <li className="flex gap-2 items-center">
              <FaLinkedinIn />
              @CS — Ticket System
            </li>
            <li>support@cst.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        © 2025 Ph — Assignment System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
