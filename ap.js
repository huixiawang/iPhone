$(function(){
    $(".abc").click(function () {
        $(".downlist").slideToggle("slow");
        $(".icon-gouwudai101").slideToggle("slow");
        $("header .abc .one").toggleClass("one1");
        // $("header .abc .two").css({"transform":"rotate(45deg)","marginTop":"-2px"});
        $("header .abc .two").toggleClass("two2");
        $(document.body).toggleClass("ying");
    })
    $(".icon-gouwudai101").click(function(){
        $(".shops").slideToggle("fast");
    })
    $("footer .container .bos .coluumn h3").click(function () {
        $(this).next().children().toggleClass("display2");
        $(this).children().toggleClass("jj");
    })
})