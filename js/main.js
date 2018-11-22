$(window).scroll(function(){

    var st = $(this).scrollTop();

    $(".sel1").css({
        "transform" : "translate(0%," + st /20 + "%"
    })
    $(".top").css({
        "transform" : "translate(0%," + st /30 + "%"
    })
    $(".top1").css({
        "transform" : "translate(0%," + st /10 + "%"
    })
    $(".bottom").css({
        "transform" : "translate(0%,-" + st /4 + "%"
    })
})




