/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey, I'm <br /> 
          Paulo Felipe  
          Brito
        </SectionTitle>
        <SectionText>
          Learning new Technologies and new methods
          of solving problems and sharing it became my
          daily life. 
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;