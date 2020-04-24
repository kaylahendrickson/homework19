// need event listener for clicking on tab
$ (".tabButton").on("click", function() {

    if ($(this).hasClass("tabButton1")){
        $("#tab1").find("div").removeClass("inactive");
        $("#tab1").find("div").addClass("active");
    }
    else if ($(this).hasClass("tabButton2")){
        $("#tab2").removeClass("inactive");
        $("#tab2").addClass("active");
    }
    else if ($(this).hasClass("tabButton3")){
        $("#tab3").find("div").removeClass("inactive");
        $("#tab3").find("div").addClass("active");
    };
});