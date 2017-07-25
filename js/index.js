$(".loading").height($(window).height());
$(".loading").width($(window).width());


$(".loading img").css({
    paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
    paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2
});

$(window).resize(function () {

    "use strict";

    $(".loading").height($(window).height());
    $(".loading").width($(window).width());


    $(".loading img").css({
        paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
        paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2
    });

});

$(window).mousemove(function (e) {

    "use strict";

    $(".original").css({
        left: e.pageX - 16,
        top: e.pageY - 16
    });

});

$("body").on("click", function (e) {

    "use strict";

    $(".original").clone(true).appendTo("body").css({
        left: e.pageX - 16,
        top: e.pageY - 16
    }).removeClass("original");

    var colors=new Array("#00C8F8", "#59C4C5", "#FFC33C", "#FBE2B4", "#FF4C65", "#fff782");
    var index = Math.floor((Math.random()*10)/2);
    console.log(index)
    $(".original").css({
      "background-color": colors[index]
    });

});
