import React from 'react';



export default function BatteryFaqs({faQs, faq1, subTitle, answer1, answer2, answer3, answer4, question2, question3, question4}) {


    const faqs = [
        {
          question: `${faq1}`,
          answer: `${answer1}`,
            },
        {question: `${question2}`,
        answer: `${answer2}`
            },
        {
            question: `${question3}`,
          answer: `${answer3}`,
        },
        
          {question: `${question4}`,
          answer: `${answer4}`,
        },
    ]
    
return (

    
    <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">{faQs}</h2>
          <p className="mt-4 text-lg text-gray-500">
            Can’t find the answer you’re looking for? Reach out to out{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              customer support
            </a>{' '}
            team.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-12">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </div>

)

}