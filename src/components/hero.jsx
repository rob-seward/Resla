import React from 'react';
import {getImage} from 'gatsby-plugin-image';
import {BgImage} from 'gbimage-bridge';





export default function Hero({subHeading, heading, backgroundImage} ) {
    const pluginImage = getImage(backgroundImage);
    return (
        
        
            <BgImage  style={{height: 700}}image={pluginImage}>
            
            
      <div className=" h-48 max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">{heading}</span>
          <span className="block text-indigo-600">{subHeading}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
            </BgImage>
           
            
        
        
        
        
    )


}