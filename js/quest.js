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
$(".quest__tabs .quest__tab").toArray().forEach(function (element) {
 // создаем обработчик щелчков для этого элемента
   $(element).on("click", function () {
     $(".quest__tabs .quest__tab").removeClass("quest__tab_active");
       $(element).addClass("quest__tab_active");
        $(".main .quest__content").empty();
          return false;
         });
 });
};
$(document).ready(main);
