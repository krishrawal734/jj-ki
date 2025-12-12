import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-4 mt-8">
      <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
