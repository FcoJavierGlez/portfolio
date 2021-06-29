/**
 * @author Francisco Javier González Sabariego
 * 
 * My Script portfolio
 */
{
    const normalizeTransparency = value => value >= 1 ? 1 : value;

    const getParticlesNumber = value => {
        if (window.innerWidth < 550 ) return 30;
        else if (window.innerWidth < 750 ) return 45;
        else if (window.innerWidth < 1050 ) return 60;
        else return 75;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const NAV = document.getElementsByTagName("nav")[0];
        const COVER  = document.getElementById("cover");

        /* Particles */
        PARTICLES_CONF.particles.number.value = getParticlesNumber(window.innerWidth);
        if (window.innerWidth < 500) PARTICLES_CONF.particles.move.speed = 8;
    
        particlesJS('cover', PARTICLES_CONF);
    
        /* Animación scroll nav */
        document.addEventListener("scroll", () => {
            NAV.style.backgroundColor = `rgb(0,0,0,${normalizeTransparency( (window.scrollY/COVER.clientHeight).toFixed(1) )})`;
            normalizeTransparency( (window.scrollY/COVER.clientHeight).toFixed(1) ) > 0.3 ? 
                NAV.classList.add('text-white') : NAV.classList.remove('text-white');
        });

        //Swiper (carousel)
        const swiper = new Swiper('.swiper-container', SWIPER_CONF);

        //Jquey UI - Tooltip
        $( function() {
          $( document ).tooltip({
            track: true
          });
        });

        const CHART_JS = new Chart(
            document.getElementById('knowledge_js'),
            CHART_CONFIG.config_js
        );
        const CHART_TS = new Chart(
            document.getElementById('knowledge_ts'),
            CHART_CONFIG.config_ts
        );
        const CHART_PHP = new Chart(
            document.getElementById('knowledge_php'),
            CHART_CONFIG.config_php
        );
        const CHART_JAVA = new Chart(
            document.getElementById('knowledge_java'),
            CHART_CONFIG.config_java
        );
        const CHART_PYTHON = new Chart(
            document.getElementById('knowledge_python'),
            CHART_CONFIG.config_python
        );
        const CHART_REACT = new Chart(
            document.getElementById('knowledge_react'),
            CHART_CONFIG.config_react
        );
        const CHART_ANGULAR = new Chart(
            document.getElementById('knowledge_angular'),
            CHART_CONFIG.config_angular
        );
        const CHART_EXPRESS = new Chart(
            document.getElementById('knowledge_express'),
            CHART_CONFIG.config_express
        );
        const CHART_SOCKETIO = new Chart(
            document.getElementById('knowledge_socketio'),
            CHART_CONFIG.config_socketio
        );
        const CHART_MONGOOSE = new Chart(
            document.getElementById('knowledge_mongoose'),
            CHART_CONFIG.config_mongoose
        );

        const CHART_MYSQL = new Chart(
            document.getElementById('knowledge_mysql'),
            CHART_CONFIG.config_mysql
        );
        const CHART_MONGODB = new Chart(
            document.getElementById('knowledge_mongodb'),
            CHART_CONFIG.config_mongodb
        );
    });
}