'use client'

import Image from 'next/image';
import React from 'react';

export default function Home() {

  return (
    <>
      <h1 className='text-center text-2xl'>Error solved: Solution to img not working : 100% fixed</h1>

      <h2 className='text-center'>img tag not working in next js.</h2>
      <h2 className='text-center'>how to use img tag in next.js</h2>
      <h2 className='text-center'>image tag not working in next js.</h2>

      <br />
      <div className='flex justify-center align-middle'>

        {/* Method: 1.>-------------------------------------------------------------------- */}

        <div className='border border-red-500'>
          <Image
            src="/image.png" // replace with your image path
            alt="method-1"
            width={200}
            height={200}
          />
        </div>

        {/* Method: 2.>-------------------------------------------------------------------- */}

        <div className='border border-red-500'>
          <Image
            src="https://picsum.photos/200" // dont forget to add this url in nextConfig
            alt="method-2"
            width={200}
            height={200}
          />
        </div>

        {/* Method: 3.>-------------------------------------------------------------------- */}

        <div className='border border-red-500'>
          <picture>
            <source srcSet="/image.png" type="image/jpg" />
            <img
              src="/image.png" // replace with your image path
              alt="method-3"
              width="200"
              height="200"
            />
          </picture>
        </div>

        {/* Method: 4.>-------------------------------------------------------------------- */}

        <div className='border border-red-500'>
          <picture>
            <source srcSet="https://picsum.photos/200" type="image/jpg" />
            <img
              src="https://picsum.photos/200" // dont forget to add this url in nextConfig
              alt="method-4"
              width={200}
              height={200}
            />
          </picture>
        </div>
        {/* -------------------------------------------------------------------------------- */}
      </div>
    </>
  );
}
