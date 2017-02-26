var main2 = function () {
   "use strict";
   // создаем и скрываем содержимое в div
   var $content = $("<div>Hello, World!</div>").hide();
   var $moreContent = $("<div>Goodbye World!</div>").hide();
   // делаем его потомком элемента body
   $(".main").append($content);
   // добавляем скользящее отображение за 2 секунды
    $content.slideDown(2000, function () {
     // отправляем новое содержимое в body
     $(".main").append($moreContent);
     // заставляем новое содержимое постепенно отобразиться
     $moreContent.fadeIn();
    $($moreContent).fadeOut(1000, function () {
     // это происходит, когда элемент div
     // постепенно исчезает
     $($moreContent).remove();
     });
     $($content).fadeOut(7000, function () {
      // это происходит, когда элемент div
      // постепенно исчезает
      $($content).remove();
    });
  });
 }
$(document).ready(main2);
