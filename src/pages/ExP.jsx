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
                                            <span className="month">2021</span>
                                    <span className="year">2022</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Ingénieur logiciel</h5>
                                <p className="description">
                                Ingénieur logiciel chez Fresenius-Kabi en alternance ou j'ai pu participer a
plusieurs projets de développement d'applications web et desktop, Avec les
technologies suivantes .Net, XAML, Java, Html, Bootstrap,..

                                </p>
                            </div>
                        </div>
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
                                <h5 className="title">Developpeur full stack</h5>
                                <p className="description">
                                Développeur Full stack chez BipRax consulting ou j'ai pu faire la modalisation
et la conception d'une application Web Symfony/React pendant un stage de 3
mois

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
                                   
j'ai travaillé en tant que qu'agent de sécurité privée chez seculille dans plusieurs sites differents(magasin,magasine site de gardiennage hopital,... )ou j'ai peux travailler en equipe 
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
                                j'ai travaillé en tant que equipier polyvalent chez mcdonald ou j'ai pu developper le travaille en equipe
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