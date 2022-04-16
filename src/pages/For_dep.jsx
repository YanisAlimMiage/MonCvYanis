import React from 'react';
import {Link} from 'react-router-dom';
import AOS from 'aos/';
import 'aos/dist/aos.css';

const For_dep = ({history,match}) => {

AOS.init();

    return ( <>
 
   <div id="for" className="container" >
   <div data-aos="zoom-in" data-aos-duration="3000">
        
    
   <h1 class="libb">Formation et diplome :</h1>
   
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
                                <h5 className="title">Ingénierie 2 (Bac+5)</h5>
                                <p className="description">
                                informatique et système d'information parcours Développement
Ecole EPSI
                                
                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            <span className="month">2020</span>
                                    <span className="year">2021</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Master 1</h5>
                                <p className="description">
                                Informatique parcours Miage Université de Lille depuit septembre 2020
                                
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
                                <h5 className="title">Licence 3</h5>
                                <p className="description">
                                Informatique parcours Miage Université de Lille
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
                                <h5 className="title">Licence 2</h5>
                                <p className="description">
                                Informatique Université de Lille
                                </p>
                            </div>
                        </div>
                        
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            <span className="month">2016</span>
                                    <span className="year">2017</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Licence 1</h5>
                                <p className="description">
                                Sciences exactes et sciences pour l'ingénieurs
Université de Lille 2016-2017
                                </p>
                            </div>
                        </div>
                       

                    </div>
</div>
</div>
     </> );
}
 
export default For_dep;