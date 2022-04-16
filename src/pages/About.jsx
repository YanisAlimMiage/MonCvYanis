import React from 'react';

import yanis from './../../src/yanis.jpg';
import cvt from './../../src/cvT.pdf';
import 'aos/dist/aos.css';
const About =({}) =>{

    return (
        <>
        <div id="about" className="about container pt-5">
        <div  className="card">
  <h5 className="card-header">A Propos</h5>
  <div className="card-body">
    <h3 className="card-title">Développeur Full Stack</h3>
    
    
    <div class="container">
    <div class="row">
        <div class="col-sm">
        <img src={yanis} class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."></img>
        </div>
        <div class="col-sm">
        <p className="card-text">Autonome, rigoureux et passionné, dans le cadre de ma formation, je suis à la recherche d’une alternance 
    a partir de septembre 2021,en développement ou bi et Big Data. Je saurai mettre à profit toutes mes compétences et 
    mes qualités pour votre entreprise.</p>
    <p>Passionné par le développement Back-End et Front-End.</p>
                        <p> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/> 

                        </svg> Mobile sur toute la France</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg> France</p>
                        <p> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                        </svg> yanis.alim.info@gmail.com</p>
                        <p> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                        </svg> +33 7 69 07 04 77</p>
                        <p>  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-calendar-event-fill" viewBox="0 0 16 16">
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                        </svg> 23 ans </p>
                        <a className="btn btn-primary" href={cvt}> Télecharger mon Cv</a>
        </div>
    </div>
  </div>
</div>
</div>

        </div>
        </>

    );
}
export default About;