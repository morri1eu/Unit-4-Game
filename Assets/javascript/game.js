
$(document).ready(function () {


var wins = 0
    var losses = 0
    var result = 0
    var diamonds = 0
    var onyxs = 0
    var rubys = 0
    var emeralds = 0

    $(".crystals").one("click", function () {
        max = 12
        min = 1
        diamonds = Math.floor(Math.random() * (max - min + 1)) + min;
        onyxs = Math.floor(Math.random() * (max - min + 1)) + min;
        emeralds = Math.floor(Math.random() * (max - min + 1)) + min;
        rubys = Math.floor(Math.random() * (max - min + 1)) + min;
        maxCom = 120
        minCom = 19
        random = Math.floor(Math.random() * (maxCom - minCom + 1)) + minCom;
        result = 0
        console.log(diamonds)
        console.log(onyxs)
        console.log(emeralds)
        console.log(rubys)
        $("#numToGuess").text(random)

        function reset(){
            diamonds = Math.floor(Math.random() * (max - min + 1)) + min;
            onyxs = Math.floor(Math.random() * (max - min + 1)) + min;
            emeralds = Math.floor(Math.random() * (max - min + 1)) + min;
            rubys = Math.floor(Math.random() * (max - min + 1)) + min;
            random = Math.floor(Math.random() * (maxCom - minCom + 1)) + minCom;
        result = 0
        console.log(diamonds)
        console.log(onyxs)
        console.log(emeralds)
        console.log(rubys)
        $("#numToGuess").text(random)
        }

        $("button").on("click", function () {
            //for each click
            var id = $(this).attr("id")
            console.log(id)
            
            if (id == "crystal diamond") {
                result = result + diamonds
                console.log(diamonds)
                Display()
            }
            else if (id == "crystal onyx") {
                result = result + onyxs
                console.log(onyxs)
                Display()
            }
            else if (id == "crystal ruby") {
                result = result + rubys
                console.log(rubys)
                Display()
            }
            else if (id == "crystal emerald") {
                result = result + emeralds
                console.log(emeralds)
                Display()
            }
            if (result == random) {
                wins++
                $("#wins").text(wins)
                Display()
                reset()
            }
            if (result > random){
                losses++
                $("#losses").text(losses)
                Display()
                reset()
            }
            console.log(this)
            // Determine what gem was clicked
            // Add value of that gem to result
            // Display result
            // Check if result equals random
            // If result = random wins++ and run reset 
            // If result > random losses++ and run reset
            function Display() {
                $("#points").text(result)

                console.log(result)
            }
        })

    })



})