import React from 'react';

import github from './../../src/github.png';
import fb from './../../src/facebook.png';
import ins from './../../src/instagram.png';
import link from './../../src/linkedin.png';
import 'aos/dist/aos.css';
const Footer =({}) =>{

    return (
        <>
         <diV className="bas">
             <div className="text">
                 <p></p>
                 <p></p>

                 <h3>Resaux sociaux</h3>
                <a  href="https://github.com/YanisAlimMiage"> <img className="bas_logo" src={github}></img></a>
                <a href="https://www.facebook.com/profile.php?id=100011112513011"> <img className="bas_logo" src={fb}></img></a>
                <a href="https://www.instagram.com/yanis_alim/">  <img className="bas_logo" src={ins}></img></a>
                <a href="https://www.linkedin.com/in/yanis-alim/">  <img className="bas_logo" src={link}></img></a>


             </div>
             


         </diV>

        </>
    )};
    export default Footer;