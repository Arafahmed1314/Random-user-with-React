import React from 'react';

export default function Card({ user, img, handleUser }) {

  // Correct destructuring for city (nested inside address)
  const { name, email, phone, address: { city } } = user;
  const { download_url, height, url } = img || {};

  return (
    <div className="card flex md:flex-col gap-8 p-4 justify-center items-center w-[400px] bg-gray-800 rounded-md text-white">
      <div className="card-image">
        {img && <img className='w-[250px] rounded-full' src={download_url} alt={name} />}
      </div>
      <div className="card-content space-y-2 text-left flex flex-col ">
        <h2 className='font-bold text-xl'>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>City: {city}</p>
        <button
          className='mt-2 bg-white text-gray-800 text-md font-semibold py-1 px-2 rounded-md hover:bg-orange-700 duration-500 hover:text-white'
          onClick={() => handleUser(img)}>
          Add Salary
        </button>
      </div>
    </div>
  );
}
