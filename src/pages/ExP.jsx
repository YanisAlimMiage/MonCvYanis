import React from 'react';

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
                                   
j'ai travaillé en tant que qu'agent de sécurité privée chez seculille dans pleuseur cite different(magasin,magasine site de gardiennage hopital,... )ou j'ai peux travailler en equipe 
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
                                j'ai travaillé en tant que equipier polyvalent chez mcdonald ou j'ai peux developper le travaille en equipe
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
                                    j'ai travaillé en tant que coursier a vélo chez deliveroo et uber eat ou j'ai pu developper mon esprit d'entreprenariat
                                </p>
                            </div>
                        </div>
                       

                    </div>
</div></div>
     </> );
}
 
export default ExP;