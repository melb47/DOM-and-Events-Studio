// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeOff = null;
let landing = null;
let flightStatus = null;
let missionAbort = null;
let move = null;
let rocket = null;
let rockX = 0;
let rockY = 0;

function init () {
    missionAbort = document.getElementById("missionAbort");
    takeOff = document.getElementById("takeoff");
    landing = document.getElementById("landing");
    flightStatus = document.getElementById("flightStatus");    
    move = document.querySelectorAll(".move");
    rocket = document.getElementById("rocket");

    function liftoff() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if(response === true) {
                flightStatus.innerHTML = "Shuttle in flight.";
                document.getElementById("shuttleBackground").style.backgroundColor = "blue";
                document.getElementById("spaceShuttleHeight").innerHTML= 10000;
            }
    }

    takeOff.addEventListener("click", liftoff);

    function land() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
        rockX = 0;
        rockY = 250;
        rocket.style.transform = "translate(" + rockX + "px, " + rockY + "px)";
    }

    landing.addEventListener("click", land);

    function abort() {
        let answer = window.confirm("Confirm that you want to abort the mission.");
            if(answer === true) {
                flightStatus.innerHTML = "Mission aborted.";
                document.getElementById("shuttleBackground").style.backgroundColor = "green";
                document.getElementById("spaceShuttleHeight").innerHTML = 0;
                rockX = 0;
                rockY = 250;
                rocket.style.transform = "translate(" + rockX + "px, " + rockY + "px)";
            }
    }

    missionAbort.addEventListener("click", abort);


    function translateX(num) {
        rockX += +num;
        rocket.style.position = "relative";
        rocket.style.transform = "translate(" + rockX + "px, " + rockY + "px)";
        }
    
    function translateY(num) {    
        rockY += +num;
        rocket.style.position = "relative";
        rocket.style.transform = "translate(" + rockX + "px, " + rockY + "px)";
        }

    move.forEach(function(element) {
       element.addEventListener("click", function() {
            if(element.innerHTML == "Up") {
                translateY(-10);     
                document.getElementById("spaceShuttleHeight").innerHTML = +document.getElementById("spaceShuttleHeight").innerHTML + 10000;       
            } 
            else if(element.innerHTML == "Down") {
                translateY(10);
                document.getElementById("spaceShuttleHeight").innerHTML -= 10000;
            }
            else if(element.innerHTML == "Left") {
               translateX(-10);
            }
            else if(element.innerHTML == "Right") {
               translateX(10);
            }
       }); 
    });

        //     });
        // }
        // if(move.innerHTML = "Left") {
        //     move.addEventListener("click", function(event) {
        //         
        //     });
        // }
        // if(move.innerHTML = "Right") {
        //     move.addEventListener("click", function(event) {
        //         
        //     });
        // }
    // }
}
window.onload = init;