import React from 'react';
//import banner from '../../images/lotteryBanner.webp';
import banner from '../../images/Final-Design.png';

//Make the real banner have black fading edges for seamless blending
function Banner(){
    return(
        <div>
            <img src ={banner} style={{width:'100%', height:'auto'}}/>
            <br/>
            <br/>
        </div>
    )
}

export default Banner;