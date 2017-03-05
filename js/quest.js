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
   var $questInput;
   var $questButton;
   var $newQuest;
   $(".quest__tabs .quest__tab").removeClass("quest__tab_active");
   $element.addClass("quest__tab_active"); // active clicked tab
   $(".main .quest__content").empty(); // clean content
    if ($element.parent().is(":nth-child(1)")) {
      $content = $("<ul>");
      for (i = toDos.length - 1; i >= 0; i--) { // массив в обратном порядке, последняя запись будет первой
       $content.append($("<li>").text(toDos[i])); // добавляем в элементы списка, значения из массива
       $(".main .quest__content").append($content); // добавляем список в DOM дерево
      }
    } else if ($element.parent().is(":nth-child(2)")) {
      $content = $("<ul>");
      toDos.forEach(function (toDo) { //выводим весь массив от начала до конца
       $content.append($("<li>").text(toDo));
      });
      $(".main .quest__content").append($content);
    } else if ($element.parent().is(":nth-child(3)")) {
      $questInput = $("<input type='text'>"); //add input tag to html
      $questButton = $("<button>").text("+"); //add button tag to html
      $(".main .quest__input").append($questInput, $questButton);
      var addCommentFromInputBox = function () { //mouse click
        if($(".quest__input input").val() !== "") { //input not empty
          $newQuest = $(".quest__input input").val(); //get input quest
          toDos.push($newQuest); // add input value to array
          $(".quest__input input").val(""); //clear input area
        }
       };
         $(".quest__input button").on("click", function (event) { //mouse click
          addCommentFromInputBox();
          });
         $(".quest__input input").on("keypress", function (event) { // press "Enter"
          if (event.keyCode === 13) {
          addCommentFromInputBox();
          }
        });
    }
   return false;
  });
 });
 $(".quest__tabs a:first-child .quest__tab").trigger("click");
};
$(document).ready(main);
