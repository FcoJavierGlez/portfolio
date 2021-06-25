/**
 * @author Francisco Javier González Sabariego
 * 
 * My Script portfolio
 */
document.addEventListener("DOMContentLoaded", () => {
    /* const CONF = new URL('https://cdn.jsdelivr.net/npm/particles.js@2.0.0/package.json');
    console.log(CONF);
    particlesJS.load('cover', 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/package.json', function() {
        console.log('callback - particles.js config loaded');
    }); */
    particlesJS.load('cover', '../assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
});