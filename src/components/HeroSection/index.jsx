import React,{useState} from 'react';
import {Button} from '../ButtonElement';
import Video from '../../video/video.mp4';
import { HeroContainer,HeroBg,VideoBg,HeroPargraph, HeroContent,HeroH1,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements';
const HeroSection=() => {
    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
    return (
        
         <HeroContainer>
           <HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
           </HeroBg>
           <HeroContent>
               <HeroH1>Car Booking Made Easy </HeroH1>
           <HeroPargraph>
               Great rates on car hire all over Dhanbad. Trusted service and a huge fleet of rental vehicles.
            </HeroPargraph>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                    Get started {hover ? <ArrowForward/>:<ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>   
        
    );
};

export default HeroSection;
