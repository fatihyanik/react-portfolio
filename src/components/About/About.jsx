import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../../../src/components/styles/About.styled";
import { SectionHeading, SectionTitle } from "../../../src/components/styles/SectionHeading";
import { StyledParagraph } from "../../../src/components/styles/Typography.styled";
import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/Resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Murat Fatih Yanik,
            I was compelled to contact you right away with my interest. 
            I am goal-oriented and always ready to dedicate my hours to deliver results as my loyalty lies with my organization.
            I am a decisive Full Stack developer with a passion to analyze data and develop programming solutions for the firms. 
            Recognized for turning around struggling company IT operations to achieve sustained growth across diverse sectors. 
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create responsive websites or web apps from
            scratch. 
            Furthermore, I am recognized for my attention to detail and precision in implementing, configuring & maintaining enterprise solutions.
            Moreover, I have proven ability to develop solutions using Node.js, Tailwind, Express, Bootstrap, MySQL, JavaScript, CSS, and many more. 
            I am articulate and approachable, and an optimistic person who believes in teamwork as a means to achieve common objectives. 
            As reflected in my resume, I take initiative and am accountable for delivering high quality work and meeting deadlines.  
          </StyledParagraph>
          <StyledParagraph>
            I have eagerness to learn something new every day and I love to
            share my knowledge to my fellow students and developers. And I am
            looking forward to talk with you!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-murat-fatih-yanik"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;

 