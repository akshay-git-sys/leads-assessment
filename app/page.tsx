"use client";

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import LeadForm from './LeadForm'; // Assuming LeadForm is in the components folder

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;  
  background-color: #D9DEA6;
  padding: 50px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 40%;  

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    margin-top: 20px;
  }

  h1 {
    font-size: 48px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 32px;
    margin-top: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

const BannerImageContainer = styled.div`
  width: 26%;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const CenteredDiv = styled.div`
  margin: 50px 0;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 18px;
    color: #666;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      {/* Banner Section */}
      <Banner>
        <BannerImageContainer>
          <Image
            src="/images/green-coin-stack.png" // Update the image path
            alt="Banner Image"
            width={100}
            height={100}
            layout="responsive"
          />
        </BannerImageContainer>

        <BannerTextContainer>
          <p style={{fontWeight: 'bold'}}>alma</p>
          <h1>Get An Assessment Of Your Immigration Case</h1>
        </BannerTextContainer>
      </Banner>

      {/* Centered Text Section */}
      <CenteredDiv>
        <h2>Want to understand your visa options?</h2>
        <p>
          Submit the form below and our team of experienced attorneys will
          review your information and send a preliminary assessment of your
          case based on your goals.
        </p>
      </CenteredDiv>

      {/* LeadForm Component */}
      <LeadForm />
    </HomePageContainer>
  );
};

export default HomePage;
