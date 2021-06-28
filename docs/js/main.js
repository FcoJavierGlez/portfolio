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
    });
}