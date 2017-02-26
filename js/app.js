var main = function () {
 "use strict";
 $(".comment__button").on("click", function (event) { //mouse click
   var $new_comment;
   if($(".comment__input-text").val() !== "") { //input not empty
     $new_comment = $("<p>").text($(".comment__input-text").val()); //get input comment
     $new_comment.hide(); //hide to slow appear
     $(".comment__comments").append($new_comment); //add comment to page
     $new_comment.fadeIn(); //show to slow appear
     $(".comment__input-text").val(""); //clear input area
   }
  });
  $(".comment__input-text").on("keypress", function (event) { // press "Enter"
    var $new_comment;
    if( event.keyCode === 13) {
      if($(".comment__input-text").val() !== "") { //input not empty
     $new_comment = $("<p>").text($(".comment__input-text").val()); //get input comment
     $new_comment.hide(); //hide to slow appear
     $(".comment__comments").append($new_comment); //add comment to page
     $new_comment.fadeIn(); //show to slow appear
     $(".comment__input-text").val(""); //clear input area
      }
    };
  });
};
$(document).ready(main);
