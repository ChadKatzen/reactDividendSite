import React from 'react';
import Description from './HomeComponents/Description';
import DescriptionTwo from './HomeComponents/DescriptionTwo';
import DescriptionThree from './HomeComponents/DescriptionThree';
import DescriptionFour from './HomeComponents/DescriptionFour';
import Banner from './HomeComponents/Banner';
import Schedule from './HomeComponents/Schedule';
import ScheduleTwo from './HomeComponents/ScheduleTwo';
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
      <DescriptionFour handlePageChangeNoToggle= {props.handlePageChangeNoToggle}/>
      <br/>
      <br/>
      <HowItWorksTwo/>
      <br/>
      <br/>
      <br/>
      <SimpleTable/>
      <br/>
      <br/>
      <br/>
      <FAQ/>
    </div>

  );
}

export default Home;