console.log("index.js started");
var n_img=0;
var current_slide=0;
var speed=5000; //ms
function change_slide(){
  if(n_img==current_slide+1){
    $('.slideshow-img').children('#slideshow-img-'+current_slide).fadeOut('slow');
    $('.slideshow-img').children('#slideshow-img-0').fadeIn('slow');
    current_slide=0;
  }else{
    $('.slideshow-img').children('#slideshow-img-'+current_slide).fadeOut('slow');
    $('.slideshow-img').children('#slideshow-img-'+(current_slide+1)).fadeIn('slow');
    current_slide++;
  }
}
$('document').ready(function(){
  var all_img = $('.slideshow-img').children('div');
  n_img = all_img.size();
  for(var i=1;i<n_img;i++){
    $('.slideshow-img').children('#slideshow-img-'+i).hide();
  }
  setInterval(change_slide,speed);
});
