/**
 * @author Francisco Javier González Sabariego
 * 
 * My Script portfolio
 */
{
    const normalizeTransparency = value => value >= 1 ? 1 : value;

    document.addEventListener("DOMContentLoaded", () => {
        const HEADER = document.getElementsByTagName("header")[0];
        const COVER  = document.getElementById("cover");
    
        particlesJS('cover', PARTICLES_CONF);
    
        document.addEventListener("scroll", () => {
            //console.log(`rgb(40,40,40,${normalizeTransparency( (window.scrollY/COVER.clientHeight).toFixed(1) )})`);
            HEADER.style.backgroundColor = `rgb(0,0,0,${normalizeTransparency( (window.scrollY/COVER.clientHeight).toFixed(1) )})`;
        })
    });
}