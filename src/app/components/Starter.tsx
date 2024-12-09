'use cliemt'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Starter = () => {

    return (
        <div className="bg-secondary flex flex-row items-center justify-between text-black space-y-0 px-8">
                <Image
                    width={40}
                    height={100}
                    src="/logo.png"
                    alt="logo"
                    layout="fixed"
                />

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 font-semibold">
                <Link href="/products" className="hover:text-gray-600 text-black text-sm md:text-base">
                    Find a Store |
                </Link>
                <Link href="/help" className="hover:text-gray-600 text-sm md:text-base">
                    Help |
                </Link>
                <Link href="/joinus" className="hover:text-gray-600 text-sm md:text-base">
                    Join Us |
                </Link>
                <Link href="/signin" className="hover:text-gray-600 text-sm md:text-base">
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default Starter;
