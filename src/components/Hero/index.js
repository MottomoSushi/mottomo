import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP,HeroBtn} from './HeroElements';
import Pdf from "../menu.pdf";


const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Mottomo Sushi</HeroH1>
                    <HeroP>Family-Owned Since 2008</HeroP>
                    <HeroP>1011 Kingshighway Rolla MO</HeroP>
                    <HeroP>Phone #: 573-341-1200</HeroP>
                    <HeroBtn> 
                        <a href={Pdf}> See Menu</a>
                    </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero
