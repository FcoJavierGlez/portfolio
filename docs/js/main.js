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
        const HEADER = document.getElementsByTagName("header")[0];
        const COVER  = document.getElementById("cover");

        PARTICLES_CONF.particles.number.value = getParticlesNumber(window.innerWidth);
        if (window.innerWidth < 500) PARTICLES_CONF.particles.move.speed = 8;
    
        particlesJS('cover', PARTICLES_CONF);
    
        document.addEventListener("scroll", () => {
            HEADER.style.backgroundColor = `rgb(0,0,0,${normalizeTransparency( (window.scrollY/COVER.clientHeight).toFixed(1) )})`;
            normalizeTransparency( (window.scrollY/COVER.clientHeight).toFixed(1) ) > 0.3 ? 
                HEADER.classList.add('text-white') : HEADER.classList.remove('text-white');
        });

        const swiper = new Swiper('.swiper-container', {//#carousel
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            initialSlide: 2,
            coverflowEffect: {
              rotate: 75,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: true,
            },
            pagination: {
              el: ".swiper-pagination",
            },
          });
    });
}