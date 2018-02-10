$("#firstButton").on("click", function() {
    $("div").fadeOut(1000, function () {   // THIS LINE ONLY FADES THE ELEMENT OUT.
        $(this).remove();                  // THIS LINE RUNS AFTER THE FADE OUT COMPLETES.
    });

    $("div").remove();                     // THIS LINE RUNS BEFORE THE DIVS HAVE COMPLETED FADING.

    $("div").fadeIn(1000);
    $("div").fadeToggle(1000);
});

$("#secondButton").on("click", function() {
    $("div").slideDown(1000); // SLIDE ANIMATION
    $("div").slideUp(1000);
});
