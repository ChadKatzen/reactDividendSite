import React from 'react';
import Description from './HomeComponents/Description';
import DescriptionTwo from './HomeComponents/DescriptionTwo';
import Banner from './HomeComponents/Banner';
import Schedule from './HomeComponents/Schedule';
import FAQ from './HomeComponents/FAQ';
import HowItWorks from './HomeComponents/HowItWorks';



function Home(props) {

  return (
    <div>
      <Banner/>
      <Description/>
      <HowItWorks/>
      <Schedule/>
      <br/>
      <FAQ/>
    </div>

  );
}

export default Home;