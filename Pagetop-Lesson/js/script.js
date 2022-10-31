/* global $*/

$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      //「scrollTop:0」を指定しているので、「最上部に移動する」の意味になります
      scrollTop:0
      //「800ミリ秒間（0.8秒間）かけてページの最上部まで移動する」の意味
    }, 800);
    event.preventDefault();
  });
});