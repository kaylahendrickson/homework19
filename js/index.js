// // need event listener for clicking on tab
// $ (".tabButton").on("click", function() {
//     $(this).find("button").toggleClass("checked");

//     if ($(this).hasClass("tabButton1") && $(this).hasClass("checked")){
//         $("#tab1").removeClass("inactive");
//         $("#tab1").addClass("active");

//         $("#tab2").removeClass("active");
//         $("#tab2").addClass("inactive");
//         $(".tabButton2").removeClass("checked");

//         $("#tab3").removeClass("active");
//         $("#tab3").addClass("inactive");
//         $(".tabButton3").removeClass("checked");

//     }
//     else if ($(this).hasClass("tabButton2")){
//         $("#tab2").removeClass("inactive");
//         $("#tab2").addClass("active");
//         // $(".tabButton2").addClass("checked");

//         $("#tab1").removeClass("active");
//         $("#tab1").addClass("inactive");
//         $(".tabButton1").removeClass("checked");

//         $("#tab3").removeClass("active");
//         $("#tab3").addClass("inactive");
//         $(".tabButton3").removeClass("checked");
//     }
//     else if ($(this).hasClass("tabButton3")){
//         $("#tab3").removeClass("inactive");
//         $("#tab3").addClass("active");
//         // $(".tabButton3").addClass("checked");

//         $("#tab1").removeClass("active");
//         $("#tab1").addClass("inactive");
//         $(".tabButton1").removeClass("checked");

//         $("#tab2").removeClass("active");
//         $("#tab2").addClass("inactive");
//         $(".tabButton2").removeClass("checked");
//     };
// });


$ (".tabButton").on("click", function() {
    // $(this).toggleClass("checked");

    if ($(this).hasClass("tabButton1")){
        $("#tab1").removeClass("inactive");
        $("#tab1").addClass("active");
        $(this).find("button").toggleClass("checked");

        $("#tab2").removeClass("active");
        $("#tab2").addClass("inactive");
        $(".tabButton2").removeClass("checked");

        $("#tab3").removeClass("active");
        $("#tab3").addClass("inactive");
        $(".tabButton3").removeClass("checked");

    }
    else if ($(this).hasClass("tabButton2")){
        $("#tab2").removeClass("inactive");
        $("#tab2").addClass("active");
        $(this).find("button").addClass("checked");

        $("#tab1").removeClass("active");
        $("#tab1").addClass("inactive");
        $(".tabButton1").removeClass("checked");

        $("#tab3").removeClass("active");
        $("#tab3").addClass("inactive");
        $(".tabButton3").removeClass("checked");
    }
    else if ($(this).hasClass("tabButton3")){
        $("#tab3").removeClass("inactive");
        $("#tab3").addClass("active");
        $(this).find("button").addClass("checked");

        $("#tab1").removeClass("active");
        $("#tab1").addClass("inactive");
        $(".tabButton1").removeClass("checked");

        $("#tab2").removeClass("active");
        $("#tab2").addClass("inactive");
        $(".tabButton2").removeClass("checked");
    };
});