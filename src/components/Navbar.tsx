"use client";

import React, { useState } from 'react';
import Link from "next/link";
import UserButton from '@/components/UserButton';
import styles from './app.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-black p-5 flex justify-between w-[100%] h-[20vh]">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold mr-4">
          BookStore
        </Link>
        </div>
        <div className="flex items-center">
          <Link href="/books" className="w-auto h-auto hover:text-gray-400 font-bold mr-4">
            Edit page
          </Link>
          <Link href="#" className="w-auto h-auto hover:text-gray-400 font-bold mr-4">
            About
          </Link>
        <Link href="#" className="w-auto h-auto hover:text-gray-400 font-bold mr-4">
            Services
          </Link>
        <Link href="/contact" className="w-auto h-auto hover:text-gray-400 font-bold mr-4">
          Contact
        </Link>
        <UserButton className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;

