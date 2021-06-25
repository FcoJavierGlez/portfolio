/**
 * @author Francisco Javier González Sabariego
 * 
 * My Script portfolio
 */
{
    const normalizeTransparency = value => value >= 1 ? 1 : value;

    const getParticlesNumber = value => {
        if (window.innerWidth < 550 ) return 40;
        else if (window.innerWidth < 750 ) return 55;
        else if (window.innerWidth < 1050 ) return 70;
        else return 80;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const HEADER = document.getElementsByTagName("header")[0];
        const COVER  = document.getElementById("cover");

        PARTICLES_CONF.particles.number.value = getParticlesNumber(window.innerWidth);
    
        particlesJS('cover', PARTICLES_CONF);
    
        document.addEventListener("scroll", () => {
            //console.log(`rgb(40,40,40,${normalizeTransparency( (window.scrollY/COVER.clientHeight).toFixed(1) )})`);
            HEADER.style.backgroundColor = `rgb(0,0,0,${normalizeTransparency( (window.scrollY/COVER.clientHeight).toFixed(1) )})`;
            normalizeTransparency( (window.scrollY/COVER.clientHeight).toFixed(1) ) > 0.3 ? 
                HEADER.classList.add('text-white') : HEADER.classList.remove('text-white');
        })
    });
}