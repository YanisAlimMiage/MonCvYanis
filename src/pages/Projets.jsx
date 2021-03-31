import React from 'react';

import mywatch from './../../src/mywatch.png';
import cvyanis from './../../src/cv.png';
import jeux from './../../src/carte.PNG';
import pyramide from './../../src/pyramide.PNG';
import musique from './../../src/accuil.jpg';
import biprax from './../../src/biprax.PNG';


const Projets = ({history,match}) => {



    return ( <>
       <div id="projet" className="about container pt-5">
               <div class="proj">
                       <h2>Mes Projets :</h2>
               </div>
           <div class="row">
         
          
 
                                        <div className="card carte" width="100" height="100" >
                                                <img class="card-img-top pro " src={mywatch} alt="Card image cap" width="100" height="100"></img>

                                                <div class="card-body">
                                                <h5 class="card-title">MyWatch</h5>
                                                <p class="card-text">Site de E-Commerce Pour la vente de montre realiser avec les technologie  spring boot ,Jsp,bootstrap,java script,JPA .</p>
                                                <a href="https://github.com/YanisAlimMiage/MyWatch" class="btn btn-primary">CODE</a>
                                                </div>

                                        </div>
                                        <div class="card carte" >
                                                <img class="card-img-top pro" src={cvyanis} alt="Card image cap"></img>
                                                <div class="card-body">
                                                <h5 class="card-title">Mon Cv</h5>
                                                <p class="card-text">Mon cv en ligne realisé avec les technologie React et bootstrap.</p>
                                                <a href="https://github.com/YanisAlimMiage/MonCvYanis" class="btn btn-primary">Code</a>
                                                </div>

                                        </div>
                                        <div class="card carte" >
                                                <img class="card-img-top pro" src={jeux} alt="Card image cap"></img>
                                                <div class="card-body">
                                                <h5 class="card-title">JEUX DE CARTES</h5>
                                                <p class="card-text">jeux de cartes realisé avec html,css,Jquary.</p>
                                                <a href="https://github.com/YanisAlimMiage/JeuxDeCarte" class="btn btn-primary">CODE</a>
                                                </div>

                                        </div>
                                        <div class="card carte" >
                                                <img class="card-img-top" src={pyramide} alt="Card image cap"></img>
                                                <div class="card-body">
                                                <h5 class="card-title">Pyramide</h5>
                                                <p class="card-text">creation d'un jeux (pyramide) ou on doit trouver un mot caché avec des indices ,une API reste ou j'ai developper le back end avec .net (c#) et la partie front end avec react et bootstrape.</p>
                                                <a href="https://github.com/YanisAlimMiage/pyramide" class="btn btn-primary">CODE</a>
                                                </div>

                                        </div>
                                        <div class="card carte" >
                                                <img class="card-img-top" src={musique} alt="Card image cap"></img>
                                                <div class="card-body">
                                                <h5 class="card-title">n'oubliez pas les paroles</h5>
                                                <p class="card-text">N'oubliez pas les paroles application mobile android realisé avec app inventor .</p>
                                                <a href="https://github.com/YanisAlimMiage/musique" class="btn btn-primary">CODE</a>
                                                </div>

                                        </div>
                                        <div class="card carte" >
                                                <img class="card-img-top" src={biprax} alt="Card image cap"></img>
                                                <div class="card-body">
                                                <h5 class="card-title">SATGE</h5>
                                                <p class="card-text">  CONCEPTION ET DÉVELOPPEMENT D'UNE APPLICATION WEB
                                 DE GESTION D’ENTREPRISE CHEZ BIPRAX CONSULTING
                                 (API SYMFONY-REACT ).
                                 -conception et créationd'une base de données relationnelle
                                  (MCD,MLD,SGBD,MySQL).
                                 -développement d'une APIRest avec Symfony
                                 -DÉVELOPPEMENT D'UNE INTERFACE WEB AVEC REACT.</p>
                                                
                                                </div>

                                        </div>
               



           

                                        </div>






       </div>
     </> );
}
 
export default Projets;