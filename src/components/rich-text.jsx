import React from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Hero from '../components/hero';
import TmHomeTop from '../components/TmHomeTop';
import HomeHeaderSection from '../components/HomeHeaderSection';
import HeaderSectionSimple from '../components/header-section-simple';
import HomeFeatureSection from '../components/home-feature-section';
import CtaSignUpForFree from '../components/cta-sign-up-for-free';
import BatteryFaqs from '../components/battery-faqs';
import LogoCloud from '../components/logo-cloud';
import TmSimpleCenter from '../components/tm-simple-center';
import NavHero from '../components/nav-hero';
import ContentFooter from '../components/content-footer';




export default function RichText({ raw, references}) {
    console.log(raw, references);
    //pull the hero id's out of raw and stick in an object to make it easier to work with
    

    const referencesMap ={};
    references.forEach(reference => {
        referencesMap[reference.contentful_id] = reference;
    })

    console.log(referencesMap);
    const options = {
        renderNode: {
            
            [BLOCKS.EMBEDDED_ENTRY]: (node)=> {
                const data = referencesMap[node.data.target.sys.id];
                switch(data.__typename){
                    case "ContentfulHero": {
                        return (
                            <Hero
                                subHeading={data.subHeading}
                                heading={data.heading}
                                backgroundImage={
                                    data.backgroundImage.gatsbyImageData
                                }
                            />
                        );


                    }
                    case "ContentfulNavHero": {
                        return (
                            <NavHero
                                subHeading={data.subHeading}
                                heading={data.heading}
                                navBattery={data.navBattery}
                                navEasyAnalysis={data.navEasyAnalysis}
                                navElectricMotor={data.navElectricMotor}
                                navProducts={data.navProducts}
                                rightSideImage={
                                    data.rightSideVideo.gatsbyImageData
                                }
                            />
                        );
                    }
                    
                    case "ContentfulTestimonialWhiteOverlap": {
                        return (
                            <TmHomeTop
                                testimonial={data.testimonial}
                                personsName={data.personsName}
                                personalTitle={data.personalTitle}
                                image4Testimonial={
                                    data.image4Testimonial.gatsbyImageData
                                }
                            />
                        );
                    }

                    case "ContentfulHeaderSectionSimple": {
                        return (
                            <HeaderSectionSimple
                                title={data.title}
                                subTitle={data.subTitle}
                                backgroundImage={data.backgroundImage.gatsbyImageData}
                            />
                        );
                    }

                    case "ContentfulCta": {
                        return (
                            <CtaSignUpForFree
                                title={data.title}
                                subHeading={data.subHeading}
                                buttonText={data.buttonText}

                               
                            />
                        );
                    }

                    case "ContentfulLogoCloud": {
                        return (
                            <LogoCloud
                                title={data.title}
                            />
                        );
                    }

                    case "ContentfulFooter": {
                        return (
                            <ContentFooter
                                navBattery={data.solutionsNav}
                                navSemi={data.navEasyAnalysis}
                                navMotor={data.electric}
                                navProducts={data.products}

                            />
                        );
                    }

                    case "ContentfulTestimonialSimpleCenter": {
                        return (
                            <TmSimpleCenter
                                testimonial={data.testimonial}
                                name={data.name}
                                professionalTitle={data.professionalTitle}
                            />
                        );
                    }

                    case "ContentfulFaQs": {
                        return (
                            <BatteryFaqs
                                faQs={data.faQs}
                                subTitle={data.subTitle}
                                faq1={data.faq1}
                                question2={data.question2}
                                question3={data.question3}
                                question4={data.question4}
                                answer1={data.answer1}
                                answer2={data.answer2}
                                answer3={data.answer3}
                                answer4={data.answer4}
                            />
                        );
                    }
                 
                    case "ContentfulHeaderSection": {
                        return (
                            <HomeHeaderSection
                                title={data.title}
                                subTitle={data.subTitle}
                                card1Heading={data.card1Heading}
                                card2Heading={data.card2Heading}
                                card3Heading={data.card3Heading}
                                card1Copy={data.card1Copy}
                                card2Copy={data.card2Copy}
                                card3Copy={data.card3Copy}
                                card1ContactUs={data.card1ContactUs}
                                
                            />
                        );
                    }

                    

                    case "ContentfulFeatureSection": {
                        return (
                            <HomeFeatureSection
                                smallTitle={data.smallTitle}
                                subTitleBig={data.subTitleBig}
                                subTitle={data.subTitle}
                                feature1={data.feature1}
                                feature2={data.feature2}
                                feature3={data.feature3}
                                feature4={data.eature4}
                                f1SubTitle={data.f1SubTitle}
                                f2SubTitle={data.f2SubTitle}
                                f3SubTitle={data.f3SubTitle}
                                f4SubTitle={data.f4SubTitle}
                            />
                        );
                    }


                    default: return null;
                }
            },
            
        },
    };


    

    return (
       <>
       {documentToReactComponents(JSON.parse(raw),options)}
       </>
    )
}


