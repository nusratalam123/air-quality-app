import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 w-full">
      <div className="container mx-auto">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Air Quality Monitoring. All rights
          reserved.
        </p>
        <p className="text-sm">
          Powered by{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
