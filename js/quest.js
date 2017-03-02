var main = function () {
  "use strict";
// 1
 //  $(".quest__tabs a:nth-child(1)").on("click", function () {
 //   // делаем все вкладки неактивными
 //   $(".quest__tabs .quest__tab").removeClass("quest__tab_active");
 //   // делаем активной первую вкладку
 //   $(".quest__tabs a:nth-child(1) .quest__tab").addClass("quest__tab_active");
 //   // очищаем основное содержание, чтобы переопределить его
 //   $(".main .quest__content").empty();
 //   // возвращается false, так как мы не переходим по ссылке
 //   return false;
 //   console.log("hello, world!");
 // });

// 2
// var tabsActive = function(tubNumber) {
//   var tabSelector = tubNumber;
//    $(".quest__tabs .quest__tab").removeClass("quest__tab_active");
//    $(".quest__tabs a:nth-child(" + tabSelector + ") .quest__tab").addClass("quest__tab_active");
// };
//
// $(".quest__tabs a:nth-child(1)").on("click", function () {
//   tabsActive(1);
//   return false;
// });
//
// $(".quest__tabs a:nth-child(2)").on("click", function () {
//   tabsActive(2);
//   return false;
// });
//
// $(".quest__tabs a:nth-child(3)").on("click", function () {
//   tabsActive(3);
//   return false;
// });

// 3
// var tubNumber;
// for (tubNumber = 1; tubNumber <= 3; tubNumber++) {
//   var tabSelector = ".quest__tabs a:nth-child(" + tubNumber + ") .quest__tab";
//   $(tabSelector).on("click", function () {
//     $(".quest__tabs .quest__tab").removeClass("quest__tab_active");
//     $(this).addClass("quest__tab_active");
//   });
// }

// 4
// $(".quest__tabs .quest__tab").toArray().forEach(function (element) {
//  // создаем обработчик щелчков для этого элемента
//    $(element).on("click", function () {
//      $(".quest__tabs .quest__tab").removeClass("quest__tab_active");
//        $(element).addClass("quest__tab_active");
//         $(".main .quest__content").empty();
//           return false;
//          });
//  });

// 5
 var toDos = [
  "Закончить писать эту книгу",
  "Вывести Грейси на прогулку в парк",
  "Ответить на электронные письма",
  "Подготовиться к лекции в понедельник",
  "Обновить несколько новых задач",
  "Купить продукты"
 ];
 $(".quest__tabs .quest__tab").toArray().forEach(function (element) {
 // создаем обработку щелчков для этого элемента
  $(element).on("click", function () {
 // поскольку мы используем версию элемента jQuery,
 // нужно создать временную переменную,
 // чтобы избежать постоянного обновления
   var $element = $(element);
   var $content;
   var i;
   $(".quest__tabs .quest__tab").removeClass("quest__tab_active");
   $element.addClass("quest__tab_active");
   $(".main .quest__content").empty();
    if ($element.parent().is(":nth-child(1)")) {
      $content = $("<ul>");
      for (i = toDos.length - 1; i >= 0; i--) {
       $content.append($("<li>").text(toDos[i]));
       $(".main .quest__content").append($content);
      }
    } else if ($element.parent().is(":nth-child(2)")) {
      $content = $("<ul>");
      toDos.forEach(function (toDo) {
       $content.append($("<li>").text(toDo));
      });
      $(".main .quest__content").append($content);
    } else if ($element.parent().is(":nth-child(3)")) {
      console.log("Щелчок на третьей вкладке!");
    }
   return false;
  });
 });
};
$(document).ready(main);
