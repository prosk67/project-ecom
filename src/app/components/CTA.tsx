import Link from 'next/link';
import React from 'react';

const CTA = () => {
  return (
    <div className="overflow-hidden relative w-[70vw] my-10 rounded-xl bg-black to-white text-white py-16 px-8 flex items-center justify-center">
        <div className=" absolute top-[-12rem] left-[-30rem] w-[800px] h-[500px] bg-gradient-radial from-white to-transparent rounded-full blur-3xl opacity-100"></div>
        <div className=" absolute top-[12rem] left-[40rem] w-[800px] h-[500px] bg-gradient-radial from-white to-transparent rounded-full blur-3xl opacity-100"></div>
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg mb-8">
          Sign up today and get access to exclusive content and special offers.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-white text-black hover:bg-transparent hover:text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

export default CTA;