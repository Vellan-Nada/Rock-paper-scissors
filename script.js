$(".image").click(function() {
    // Disable all buttons
    $(".image").prop("disabled", true).addClass("disabled");

    let a = Math.floor(Math.random() * 3);

    // Computer choice
    if (a === 0) {
        $(".taunt").attr("src", "./assets/card-text.svg");
    } else if (a === 1) {
        $(".taunt").attr("src", "./assets/circle-fill.svg");
    } else {
        $(".taunt").attr("src", "./assets/scissors.svg");
    }

    // Determine result
    if ($(this).hasClass("paper")) {
        if (a === 0) {
            $(".title").text("It's a Draw");
        } else if (a === 1) {
            $(".title").text("You Won!");
        } else {
            $(".title").text("You Lost");
        }
    }

    if ($(this).hasClass("rock")) {
        if (a === 0) {
            $(".title").text("You Lost");
        } else if (a === 1) {
            $(".title").text("It's a Draw");
        } else {
            $(".title").text("You Won");
        }
    }

    if ($(this).hasClass("scissor")) {
        if (a === 0) {
            $(".title").text("You Won");
        } else if (a === 1) {
            $(".title").text("You Lost");
        } else {
            $(".title").text("It's a Draw");
        }
    }

    // Re-enable after 2 seconds
    setTimeout(function() {
        $(".taunt").attr("src", "./assets/taunt.svg");
        $(".title").text("ROCK, PAPER & SCISSOR");
        $(".image").prop("disabled", false).removeClass("disabled");
    }, 2000);
});

