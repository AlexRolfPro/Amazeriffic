var main = function () {
 "use strict";
 $(".comment__button").on("click", function (event) {
   var $new_comment;
   if($(".comment__input-text").val() !== "") {
     $new_comment = $("<p>").text($(".comment__input-text").val());
     $(".comment__comments").append($new_comment);
   }
 });
};
$(document).ready(main);
