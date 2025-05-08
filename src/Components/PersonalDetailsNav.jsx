import React from "react";
import { useNavigate } from "react-router";
import "../Css/PersonalDetailsNav.css";

const PersonalDetailsNav = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto mt-10 flex flex-col md:flex-row items-center gap-6">
      {/* Profile Picture */}
      {/* <img
          src="/profile.jpg" // Place your image in the public folder
          alt="Profile"
          className="profilepic w-10 h-10 rounded-full object-cover border-4 border-blue-500"
        /> */}

      {/* Info */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">Lijith Thazhathethil</h2>
        <p className="text-gray-600 mb-4">Full Stack Developer (MERN)</p>

        <ul className="text-gray-800 space-y-2 mb-4">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:lijiththazhathethil@gmail.com"
              className="text-blue-600 hover:underline"
            >
              lijiththazhathethil@gmail.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:7907328823" className="text-blue-600 hover:underline">
              7907328823
            </a>
          </li>
          <li>
            <strong>Location:</strong> India
          </li>
          <li>
            <strong>Education:</strong> Full Stack - Entri Elevate Academy, IIT
            Certified
          </li>
        </ul>

        {/* Resume Button */}
        <a
          href="/Lijith_Resume.pdf" // Place your resume in the public folder
          download
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-4"
        >
          📄 Download Resume
        </a>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-3 text-2xl">
          <a
            href="https://github.com/lijitht4107"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black"
          >
            <i className="devicon-github-original"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lijith-t-t6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-700"
          >
            <i className="devicon-twitter-original"></i>
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetailsNav;
