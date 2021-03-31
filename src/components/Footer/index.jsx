import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa';
import {FooterContainer,FooterWrap,FooterLinkContainer,FooterLinkWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink} from './FooterElements';
const Footer = () => {
    const toggleHome = ()=>{
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
           <FooterWrap>
               <FooterLinkContainer>
                   <FooterLinkWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>About us</FooterLinkTitle>
                               <FooterLink to="/signin">How it work</FooterLink>
                               <FooterLink to="/signin">Testimonials</FooterLink>
                               <FooterLink to="/signin">Careers</FooterLink>
                               <FooterLink to="/signin">Investors</FooterLink>
                               <FooterLink to="/signin">Terms of Service</FooterLink>  
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle>Contact us</FooterLinkTitle>
                               <FooterLink to="/signin">Contact</FooterLink>
                               <FooterLink to="/signin">Support</FooterLink>
                               <FooterLink to="/signin">Destinations</FooterLink>
                               <FooterLink to="/signin">Sponsorships</FooterLink>
                       </FooterLinkItems>
                   </FooterLinkWrapper>
                   <FooterLinkWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>Videos</FooterLinkTitle>
                               <FooterLink to="/signin">Submit Video</FooterLink>
                               <FooterLink to="/signin">Ambassadors</FooterLink>
                               <FooterLink to="/signin">Agency</FooterLink>
                               <FooterLink to="/signin">Influencer</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle>Social Media</FooterLinkTitle>
                               <FooterLink to="/signin">Instagram</FooterLink>
                               <FooterLink to="/signin">Facebook</FooterLink>
                               <FooterLink to="/signin">Youtube</FooterLink>
                               <FooterLink to="/signin">Twitter</FooterLink>
                       </FooterLinkItems>
                   </FooterLinkWrapper>
               </FooterLinkContainer>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to='/' onClick={toggleHome}>Car</SocialLogo>
                       <WebsiteRights>car @ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                       <SocialIcons>
                           <SocialIconLink href='/' target="_blank" arial-label="Facebook"><FaFacebook /></SocialIconLink>
                           <SocialIconLink href='/' target="_blank" arial-label="Instagram"><FaInstagram /></SocialIconLink>
                           <SocialIconLink href='/' target="_blank" arial-label="Twitter"><FaTwitter /></SocialIconLink>
                           <SocialIconLink href='/' target="_blank" arial-label="Linkedin"><FaLinkedin /></SocialIconLink>
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
           </FooterWrap> 
        </FooterContainer>
    )
}

export default Footer
