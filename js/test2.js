var main = function () {
 "use strict;"
 $("*").css("color","red");
 $("h2").css("color","blue");
 $(".relevant p").css("color","green");
 $(".relevant p:first-child").css("color","greenyellow");
 $(".relevant p:nth-child(3)").css("color","gray");
 $(".relevant").css("color","yellow");
 $(".relevant p:nth-child(even)").css("color","brown");
 $(".relevant p:last-child").css("color","black");
 $(".relevant p:gt(3)").css("color","fuchsia");
 $(".relevant p:not(.a)").css("color","orange");

 var sum = function(mas) {
   var sumAll = 0;
   var i;
   for (i = 0; i < mas.length; i++) {
     sumAll += mas[i];
   }
   return sumAll;
 };
 var $end = sum([3,6,1]);
 $("body").append($("<p>").text($end));


var sum1 = function(mas) {
  var sumAll1 = 0;
  mas.forEach (function(value) {
    sumAll1 += value;
  });
  return sumAll1;
};
var $end1 = sum1([3,6,2]);
$("body").append($("<p>").text($end1));

};


$(document).ready(main);
