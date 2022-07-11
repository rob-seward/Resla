import React from "react";
import RichText from '../components/rich-text';
import { graphql } from "gatsby";

export default function ContentfulPage(props) {
    
    return (
       <>
       {!!props.data.contentfulPage.pageContent && (
        <RichText
            references={props.data.contentfulPage.pageContent.references}
            raw={props.data.contentfulPage.pageContent.raw}
        />
        )}
       </>
    );
}

export const query = graphql`
    query PageQuery($id: String) {
        contentfulPage(id: { eq: $id }) {
            id
            title
            description
            pageContent {
                raw
                references {
                            
                
                    ... on ContentfulHero {
                        __typename
                        contentful_id
                        heading
                        subHeading
                        backgroundImage {
                            gatsbyImageData(
                                layout: FULL_WIDTH
                                placeholder: BLURRED
                                
                                
                            )
                        }
                    }
                    ... on ContentfulNavHero {
                        __typename
                        contentful_id
                        heading
                        subHeading
                        navBattery
                        navEasyAnalysis
                        navElectricMotor
                        navProducts
                        rightSideVideo {
                          id
                          gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FIXED)
                        }
                      }
                      ...on ContentfulTestimonialWhiteOverlap {
                        __typename
                        contentful_id
                        TestimonialTop
                        testimonial
                        personsName
                        personalTitle
                        image4Testimonial {
                          id
                          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                        }
                      }
                      ...on ContentfulHeaderSection {
                          __typename
                          contentful_id
                          title
                            subTitle
                            card1ContactUs
                            card1Copy
                            card1Heading
                            card2ContactUs
                            card2Copy
                            card2Heading
                            card3ContactUs
                            card3Copy
                            card3Heading
                            insetImage {
                                gatsbyImageData(placeholder: BLURRED, layout: FIXED)
                            }
                        }
                        ... on ContentfulFeatureSection {
                            __typename
                            contentful_id
                            smallTitle
                            subTitleBig
                            subTitle
                            feature1
                            feature2
                            feature3
                            feature4
                            f1SubTitle
                            f2SubTitle
                            f3SubTitle
                            f4SubTitle
                          
                        }
                        ... on ContentfulCta {
                            __typename
                            id
                            contentful_id
                            title
                            subHeading
                            buttonText
                          }

                          ... on ContentfulLogoCloud {
                            __typename
                            contentful_id
                            title
                          }

                          ... on ContentfulFooter {
                            __typename
                            contentful_id
                            solutionsNav
                            navEasyAnalysis
                            navElectricMotor
                            navProducts
                          }

                          ... on ContentfulTestimonialSimpleCenter {
                            __typename
                            contentful_id
                            testimonial
                            name
                            professionalTitle
                          }
                          ... on ContentfulFaQs {
                            __typename
                            contentful_id
                            faQs
                            subTitle
                            faq1
                            question2
                            question3
                            question4
                            answer1
                            answer2
                            answer3
                            answer4
                          }
                        
                        ...on ContentfulHeaderSectionSimple {
                            __typename
                            contentful_id
                            title
                            subTitle 
                            backgroundImage {
                                id
                                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                            }
                        }
                        
                }
            }
        }
    }
`;