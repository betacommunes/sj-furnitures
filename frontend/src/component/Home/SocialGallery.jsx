import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "Instagram",
    icon: <FaInstagram size={36} />,
    url: "https://instagram.com/",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF size={36} />,
    url: "https://facebook.com/",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn size={36} />,
    url: "https://linkedin.com/",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "X",
    icon: <FaXTwitter size={36} />,
    url: "https://twitter.com/",
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80",
  },
];

export default function SocialGallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="py-20 flex flex-col items-center w-full">
      <div className="mb-2 text-sm text-gray-500 flex items-center">
        <span className="border-t-2 border-secondary w-5 mr-2"></span>
        Follow Us
      </div>
      <h2 className="text-2xl font-semibold mb-6 text-primary">
        Follow Us On{" "}
        <span className="text-secondary transition-all duration-300">
          {hovered ? socials[hovered].name : "Instagram"}
        </span>
      </h2>
      <div className="grid grid-cols-4 md:gap-5 gap-2 w-full">
        {socials.map((social, idx) => (
          <a
            href={social.url}
            key={social.name}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(idx)}
            onFocus={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="relative aspect-square rounded-xl overflow-hidden shadow-md flex items-center justify-center group"
            style={{ textDecoration: "none" }}
          >
            <img
              src={social.img}
              alt={social.name}
              className="object-cover w-full h-full group-hover:brightness-75 transition"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-40">
              <span className="text-secondary">{social.icon}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
