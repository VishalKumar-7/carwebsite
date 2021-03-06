import React from 'react';
import { Button } from '../ButtonElement';
import { InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    ImgWrap,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Img } from './InfoElements';
import CarImage from '../../images/svg-1.svg';

const InfoSection=({lightBg, id, imgStart, topLine, 
    lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2})=>{
    return(
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <ImgWrap>
                       <Img src={CarImage} alt={alt}/>
                     </ImgWrap>
                    </Column1>
                    <Column2>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to="home"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact="true"
                             offset={-80}
                             primary={primary ? 'true' : 'false'}
                             dark={dark ? 'true' : 'false'}
                             dark2={dark2 ? 'true' : 'false'}
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    );
};
export default InfoSection;