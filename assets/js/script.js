$(document).ready(function() {
  $("a.button").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
      duration: 2000,
      easing: "swing"
      });
    return false;
});
});
console.log('Demonics')