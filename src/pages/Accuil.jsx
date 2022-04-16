import React from 'react';


const Accuil = ({history,match}) => {

        
     var TxtType = function(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = '';
          this.tick();
          this.isDeleting = false;
      };
      TxtType.prototype.tick = function() {
          var i = this.loopNum % this.toRotate.length;
          var fullTxt = this.toRotate[i];
  
          if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
  
          this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
          var that = this;
          var delta = 200 - Math.random() * 100;
  
          if (this.isDeleting) { delta /= 2; }
  
          if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
          }
  
          setTimeout(function() {
          that.tick();
          }, delta);
      };
  
      window.onload = function() {
          var elements = document.getElementsByClassName('typewrite');
          for (var i=0; i<elements.length; i++) {
              var toRotate = elements[i].getAttribute('data-type');
              var period = elements[i].getAttribute('data-period');
              if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
              }
          }
          // INJECT CSS
          var css = document.createElement("style");
          css.type = "text/css";
          css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
          document.body.appendChild(css);
      };
  
  
 
    return ( <>
     <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html">ALIM Yanis</a></h1>
   
    

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Accuil</a></li>
          <li><a class="nav-link scrollto " href="#about">A Propos</a></li>
          <li><a class="nav-link scrollto" href="#for">Formation</a></li>
          <li><a class="nav-link scrollto" href="#exp">Expériences</a></li>
          <li><a class="nav-link scrollto" href="#projet">Projets</a></li>
          
          
          
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
    <div id="hero" class="hero route bg-image">
    <div class="overlay-itro"></div>
    <div class="hero-content display-table">
      <div class="table-cell">
        <div class="container">
          
          <h1 class="hero-title mb-4">Je suis Yanis alim</h1>
          <p class="hero-subtitle"><span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
          <h1 >
                  <a href="" class="typewrite" data-period="2000" data-type='[ "Développeur Full Stack.", "Développeur Web.", "DATA.","ingénieur logiciel." ]'>
                   <span class="wrap"></span>
                 </a>
</h1>
        
        </div>
      </div>
    </div>
  </div>
     </> );
}
 
export default Accuil;