import React, { useEffect, useState } from "react";
import { fetchGoogleSheetData } from "../services/GoogleSheetsService";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";


const Home = () => {
  const [data, setData] = useState({});


  useEffect(() => {
    const getData = async () => {
      const result = await fetchGoogleSheetData();
      if (result) {
        setData(result);
      }
     
    };
    getData();
  }, []);



  return (
    <div>
    
      <HeroSection />
    
      <Services content={data.services} />
      <About content={data.about} />
      <WhyChooseUs content={data.whyChooseUs} />
      <HowItWorks content={data.howItWorks} />
      <Testimonials content={data.testimonials} /> 
      <Contact content={data.contact} />
    </div>
  );
};

export default Home;
