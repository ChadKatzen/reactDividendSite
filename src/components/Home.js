import React from 'react';
import Description from './HomeComponents/Description';
import DescriptionTwo from './HomeComponents/DescriptionTwo';
import DescriptionThree from './HomeComponents/DescriptionThree';
import Banner from './HomeComponents/Banner';
import Schedule from './HomeComponents/Schedule';
import FAQ from './HomeComponents/FAQ';
import HowItWorks from './HomeComponents/HowItWorks';
import HowItWorksTwo from './HomeComponents/HowItWorksTwo';
import SimpleTable from './HomeComponents/SimpleTable';




function Home(props) {

  return (
    <div>
      <Banner/>
      <br/>
      <br/>
      <br/>
      <DescriptionThree/>
      <br/>
      <br/>
      <br/>
      <HowItWorksTwo/>
      <br/>
      <br/>
      <br/>
      <SimpleTable/>
      <br/>
      <FAQ/>
    </div>

  );
}

export default Home;