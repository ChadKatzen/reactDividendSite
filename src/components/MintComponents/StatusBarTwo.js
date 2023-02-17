import React, { useState, useEffect } from 'react';
import jQuery from 'jquery';
import gsap from 'gsap';
import "../../css/StatusBarTwo.css"


//SETUP JQUERRY
let $ = window.$ = window.jQuery = jQuery;

function StatusBarTwo () {


    return (
        <div className="containerStatus">
            <div id="progress-bar__container" className="progress-bar__container">
                <div id="mint-progress-bar" className="progress-bar">
                    
                </div>
            </div>  
        </div>
    ); 
}

export default StatusBarTwo;