const cl = console.log;
$(document).ready(function(){
    
    const $navlink = $("#mainnavbar .navbar-nav .nav-link")
    const $scrollTop = $("#scrollTop1")
    $navlink.on("click",function(){
        cl($(this).attr("data-id"))

        let $selectedsec = $("#"+$(this).attr("data-id"))
        // cl(selectedsec.html())
        $("body , html").animate({
            scrollTop :$selectedsec.offset().top
        },"slow")
    })

    $scrollTop.on("click",function(){

        console.log("hello Html")
        $("body,html").animate({
            scrollTop:0
        },4000)
    })
})