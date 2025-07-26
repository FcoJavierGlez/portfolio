/**
 * @author Francisco Javier González Sabariego
 * 
 * My Script portfolio
 */
document.addEventListener("DOMContentLoaded", () => {

  const back = document.getElementById("back");

  back.addEventListener( "click", event => {
    event.preventDefault();
    history.back();
  } );

  //Jquey UI - Tooltip
  $( function() {
    $( document ).tooltip({
      track: true
    });
  });
});