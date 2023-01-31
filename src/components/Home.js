import React from 'react';
import Description from './HomeComponents/Description';
import Banner from './HomeComponents/Banner';
import Schedule from './HomeComponents/Schedule';
import FAQ from './HomeComponents/FAQ';


function Home(props) {

  return (
    <div>
      <Banner/>
      <Description/>
      <br/>
      <Schedule/>
      <br/>
      <FAQ/>
    </div>

  );
}

export default Home;