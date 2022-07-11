import React from 'react';

import { AnnotationIcon, WifiIcon,GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

export default function HomeFeatureSection({
    smallTitle,
    subTitleBig,
    subTitle,
    feature1,
    feature2,
    feature3,
    feature4,
    f1SubTitle,
    f2SubTitle,
    f3SubTitle,
    f4SubTitle,
}) {

    const features = [
        {
          name: `${feature1}`,
          description:
            `${f1SubTitle}`,
          icon: LightningBoltIcon,
        },
        {
          name: `${feature2}`,
          description:
          `${f2SubTitle}`,
          icon: ScaleIcon,
        },
        {
          name: `${feature3}`,
          description:
          `${f3SubTitle}`,
          icon: WifiIcon,
        },
        {
          name: `${feature4}`,
          description:
          `${f4SubTitle}`,
          icon: AnnotationIcon,
        },
    ]
    return (
        <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{smallTitle}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {subTitleBig}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
             {subTitle}
            </p>
          </div>
  
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )

}