import React from 'react';
import {GatsbyImage, getImage } from "gatsby-plugin-image";

export default function HeaderSectionSimple({title, subTitle, backgroundImage}) {
    const image = getImage(backgroundImage);
    return (
        <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
        
        <GatsbyImage className="w-full h-full object-cover" image={backgroundImage} alt=""/>
          
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            {subTitle}
          </p>
        </div>
      </div>
    )
}