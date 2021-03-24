import React from 'react';
import {Link} from 'react-router-dom';
import AOS from 'aos/';
import 'aos/dist/aos.css';
const ExP = ({history,match}) => {

    AOS.init();

    return ( <>
   <div  id="exp" className="container">
   <div data-aos="zoom-in" data-aos-duration="3000">
   <h1  class="libb" >Expériences professionnelles :</h1>
   <br></br>
    <br></br>
<div className="main-timeline">


                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            <span className="month">3 Mois</span>
                                    <span className="year">2020</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">STAGIAIRE CONCEPTION ET DÉVELOPPEMENT</h5>
                                <p className="description">
                                CONCEPTION ET DÉVELOPPEMENT D'UNE APPLICATION WEB
                                 DE GESTION D’ENTREPRISE CHEZ BIPRAX CONSULTING
                                 (API SYMFONY-REACT ).
                                 -conception et créationd'une base de données relationnelle
                                  (MCD,MLD,SGBD,MySQL).
                                 -développement d'une APIRest avec Symfony
                                 -DÉVELOPPEMENT D'UNE INTERFACE WEB AVEC REACT
                                </p>
                            </div>
                        </div>
                     
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            <span className="month">2019</span>
                                    <span className="year">2020</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">AGENT DE SÉCURITÉ PRIVÉE (SECULILLE)</h5>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                                </p>
                            </div>
                        </div>
                     
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            <span className="month">2018</span>
                                    <span className="year">2019</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">ÉQUIPIER POLYVALENT MCDONALD'S</h5>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                                </p>
                            </div>
                        </div>
                        
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            <span className="month">2017</span>
                                    <span className="year">2019</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">COURSIER À VÉLO</h5>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                                </p>
                            </div>
                        </div>
                       

                    </div>
</div></div>
     </> );
}
 
export default ExP;