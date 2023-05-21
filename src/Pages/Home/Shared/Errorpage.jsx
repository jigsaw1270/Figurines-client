import React from 'react';
import errorImage from '../../../assets/images/error.webp';

const Errorpage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={errorImage} alt="404 Error" className="w-64 mb-8" />
      <h1 className="text-4xl font-bold">Oops! Page not found</h1>
      <p className="mt-2 text-gray-600">The page you are looking for does not exist.</p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">Go back to homepage</a>
    </div>
    );
};

export default Errorpage;