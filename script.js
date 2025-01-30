$(document).ready(function (){
    $(".col-md-4").waypoint(function (){
        $(".col-md-4").addClass(
            "animate__animated animate__fadeInLeft"
        );
    },{offset:"80%"});
    $("#location").waypoint(function (){
        $("#location").addClass(
            "animate__animated animate__fadeInRight"
        );
    },{offset:"80%"});
    $("#carouselExampleIndicators").waypoint(function (){
        $("#carouselExampleIndicators").addClass(
            "animate__animated animate__zoomIn"
        );
    },{offset:"80%"});
    $("#deebcarcare").waypoint(function (){
        $("#deebcarcare").addClass(
            "animate__animated animate__fadeInDown"
        );
    },{offset:"80%"});

});