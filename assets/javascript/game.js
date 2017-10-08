var randomNumber = "";
var wins = 0;
var losses = 0;
var crystalOne = "";
var crystalTwo = "";
var crystalThree = "";
var crystalFour = "";
var totalScore = 0;

$(document).ready(function () {

    // On load of page a random number is generated between 19-120 in the randomNumber box.
    $(".random-number").ready(function () {
        var randomNumber = "";
        for (var i = 19; i < 120; i++) {
            var randomNumber = Math.floor(Math.random() * 120) + 1
        };
        $(".random-number").html(randomNumber);
    }); // End random number generation for random number field.

    // ===========================================================
    // Random numbers also generated for each crystal between 1-12.

    // On load of page generate a random number for Crystal One.
    $(".crystal-one-field").ready(function () {
        var crystalOne = "";
        for (var i = 1; i < 12; i++) {
            var crystalOne = Math.floor(Math.random() * 12) + 1
        };
        $(".crystal-one-field").html(crystalOne);
    }); // End random number generation for random number field.

    // On load of page generate a random number for Crystal Two.
    $(".crystal-two-field").ready(function () {
        var crystalTwo = "";
        for (var i = 1; i < 12; i++) {
            var crystalTwo = Math.floor(Math.random() * 12) + 1
        };
        $(".crystal-two-field").html(crystalTwo);
    }); // End random number generation for random number field.

    // On load of page generate a random number for Crystal Three.
    $(".crystal-three-field").ready(function () {
        var crystalThree = "";
        for (var i = 1; i < 12; i++) {
            var crystalThree = Math.floor(Math.random() * 12) + 1
        };
        $(".crystal-three-field").html(crystalThree);
    }); // End random number generation for random number field.

    // On load of page generate a random number for Crystal Four.
    $(".crystal-four-field").ready(function () {
        var crystalFour = "";
        for (var i = 1; i < 12; i++) {
            var crystalFour = Math.floor(Math.random() * 12) + 1
        };
        $(".crystal-four-field").html(crystalFour);
    }); // End random number generation for random number field.

    // ===========================================================

    // On click of a crystal the number corrisponding to the crystal is printed to the results field.
    $(".crystal-one-field").on("click", function () {
        var crystalValue = ($(".crystal-one-field").text());
        crystalValue = parseInt(crystalValue);

        // Takes what is in Total Score field, puts it into variable totalScoreValue and converts it from a string to an integer.
        var totalScoreValue = ($(".total-score-field").text());
        totalScoreValue = parseInt(totalScoreValue);

        // If totalScoreValue and totalScore are 0 just output what is in crystalValue directly to the Total Score field.
        if (totalScoreValue && totalScore === 0) {
            $(".total-score-field").html(crystalValue);
        } else {
            // Otherwise crystalValue is totalScoreValue and crystalValue added together and printed to Total Score field.
            (crystalValue = totalScoreValue + crystalValue)
            $(".total-score-field").html(crystalValue);
        }

        totalScore = crystalValue;

        console.log(totalScore);
    });

    $(".crystal-two-field").on("click", function () {
        var crystalValue = ($(".crystal-two-field").text());
        crystalValue = parseInt(crystalValue);

        // Takes what is in Total Score field, puts it into variable totalScoreValue and converts it from a string to an integer.
        var totalScoreValue = ($(".total-score-field").text());
        totalScoreValue = parseInt(totalScoreValue);

        // If totalScoreValue and totalScore are 0 just output what is in crystalValue directly to the Total Score field.
        if (totalScoreValue && totalScore === 0) {
            $(".total-score-field").html(crystalValue);
        } else {
            // Otherwise crystalValue is totalScoreValue and crystalValue added together and printed to Total Score field.
            (crystalValue = totalScoreValue + crystalValue)
            $(".total-score-field").html(crystalValue);
        }

        totalScore = crystalValue;

        console.log(totalScore);

    });

    $(".crystal-three-field").on("click", function () {
        var crystalValue = ($(".crystal-three-field").text());
        crystalValue = parseInt(crystalValue);
        
        // Takes what is in Total Score field, puts it into variable totalScoreValue and converts it from a string to an integer.
        var totalScoreValue = ($(".total-score-field").text());
        totalScoreValue = parseInt(totalScoreValue);

        // If totalScoreValue and totalScore are 0 just output what is in crystalValue directly to the Total Score field.
        if (totalScoreValue && totalScore === 0) {
            $(".total-score-field").html(crystalValue);
        } else {
            // Otherwise crystalValue is totalScoreValue and crystalValue added together and printed to Total Score field.
            (crystalValue = totalScoreValue + crystalValue)
            $(".total-score-field").html(crystalValue);
        }

        totalScore = crystalValue;

        console.log(totalScore);
    });

    $(".crystal-four-field").on("click", function () {
        var crystalValue = ($(".crystal-four-field").text());
        crystalValue = parseInt(crystalValue);
        
        // Takes what is in Total Score field, puts it into variable totalScoreValue and converts it from a string to an integer.
        var totalScoreValue = ($(".total-score-field").text());
        totalScoreValue = parseInt(totalScoreValue);

        // If totalScoreValue and totalScore are 0 just output what is in crystalValue directly to the Total Score field.
        if (totalScoreValue && totalScore === 0) {
            $(".total-score-field").html(crystalValue);
        } else {
            // Otherwise crystalValue is totalScoreValue and crystalValue added together and printed to Total Score field.
            (crystalValue = totalScoreValue + crystalValue)
            $(".total-score-field").html(crystalValue);
        }

        totalScore = crystalValue;

        console.log(totalScore);
    });



});



// On each consecultive click the number is added to the results number.

// If result field matches randomNumber field a point goes in the win field and the game starts over(clearing results field, genrating a new random number and generating new random numbers for the crystals).

// If result field goes over randomNumber field a point goes in losses field and the game starts over (clearing results field, genrating a new random number and generating new random numbers for the crystals).