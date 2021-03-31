import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection1 from '../components/InfoSection1';
import InfoSection from '../components/InfoSection';
import Services from '../components/Service';
import { homeObjTwo } from '../components/InfoSection1/Data';
import { homeObjOne } from '../components/InfoSection/Data';
import Footer from '../components/Footer';


const Home = ( ) => {
    const [isOpen, setIsOpen] = useState
    (false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/> 
         <Navbar toggle={toggle}/>  
         <HeroSection />
         <InfoSection {...homeObjOne}/>
         <InfoSection1 {...homeObjTwo}/>

         <Services/>
         
         <Footer/>


        </>
    );
};

export default Home

