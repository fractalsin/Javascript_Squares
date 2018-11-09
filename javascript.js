/* magicDiv effect */


document.addEventListener("DOMContentLoaded", function() {
    const magicDiv = document.querySelectorAll(".magicDiv");
    for (let k=0; k<magicDiv.length; k++) {
        setTimeout(function(){ magicDiv[k].style.backgroundColor="green"; }, 2000);
    }
});
/* magicDiv_2 effect */
document.addEventListener("mousewheel", function() {
    const magicDiv = document.querySelectorAll(".magicDiv_2");
    for (let j=0; j<magicDiv.length; j++) {
        setTimeout(function(){ magicDiv[j].style.backgroundColor="grey"; }, 4000);
    }
});
/* magicDiv_3 effect */
document.addEventListener("DOMContentLoaded", function () {
    const magicDiv = document.querySelectorAll(".magicDiv_3");
    for (let x = 0; x < magicDiv.length; x++) {

        setInterval(function() {
            magicDiv[x].style.borderTopColor = "blue";
            magicDiv[x].style.borderBottomColor = "lime";
            magicDiv[x].style.borderLeftColor = "orange";
            magicDiv[x].style.borderRightColor = "lightgrey";

        }, 1500);

    }
    if (true) {
        const magicDiv = document.querySelectorAll(".magicDiv_3");
        for (let x = 0; x < magicDiv.length; x++)
            setInterval(function() {
                magicDiv[x].style.borderTopColor = "yellow";
                magicDiv[x].style.borderBottomColor = "pink";
                magicDiv[x].style.borderLeftColor = "teal";
                magicDiv[x].style.borderRightColor = "skyblue";
            }, 3000);

    } else {
        document.write("error");
    }
    return;
});
/* magicDiv_5 effect */
function yellowFunction() {
    document.addEventListener("click", function () {
        let test = document.querySelectorAll(".yellow");
        for (let i = 0; i < test.length; i++) {
            let background = document.querySelectorAll(".magicDiv_5");
            for (let j = 0; j <= background.length; j++) {
                background[j].style.backgroundColor = "yellow";

            }

        }

    });
}
function orangeFunction() {
    document.addEventListener("click", function () {
        let test = document.querySelectorAll(".orange");
        for (let i = 0; i < test.length; i++) {
            let background = document.querySelectorAll(".magicDiv_5");
            for (let j = 0; j <= background.length; j++) {
                background[j].style.backgroundColor = "orange";

            }

        }

    });
}
function tealFunction() {
    document.addEventListener("click", function () {
        let test = document.querySelectorAll(".teal");
        for (let i = 0; i < test.length; i++) {
            let background = document.querySelectorAll(".magicDiv_5");
            for (let j = 0; j <= background.length; j++) {
                background[j].style.backgroundColor = "teal";

            }

        }

    });
}

document.addEventListener("mousewheel", function() {
    const magicDiv = document.querySelectorAll(".magicDiv_7");
    for (let j=0; j<magicDiv.length; j++) {
        setTimeout(function(){
          magicDiv[j].style.backgroundColor="white"; }, 2000);
    }
});
/* magicDiv_8a */
document.addEventListener("click", function() {
    const magicDiv = document.querySelectorAll(".magicDiv_8a");
    for (let j=0; j<magicDiv.length; j++) {
        setTimeout(function(){ magicDiv[j].style.borderTopColor="limegreen"; }, 4000);
    }
});
/* magicDiv_8b */
document.addEventListener("click", function() {
    const magicDiv = document.querySelectorAll(".magicDiv_8b");
    for (let j=0; j<magicDiv.length; j++) {
        setTimeout(function(){ magicDiv[j].style.borderRightColor="blue"; }, 5000);
    }
});
/* magicDiv_8c */
document.addEventListener("click", function() {
    const magicDiv = document.querySelectorAll(".magicDiv_8c");
    for (let j=0; j<magicDiv.length; j++) {
        setTimeout(function(){ magicDiv[j].style.borderBottomColor="orange"; }, 6000);
    }
});
document.addEventListener("click", function() {
    const magicDiv = document.querySelectorAll(".magicDiv_8c");
    for (let j=0; j<magicDiv.length; j++) {
        setTimeout(function(){ magicDiv[j].style.borderRightColor="orange"; }, 6000);
    }
});
/* magicDiv_8d */
document.addEventListener("click", function() {
    const magicDiv = document.querySelectorAll(".magicDiv_8d");
    for (let j=0; j<magicDiv.length; j++) {
        setTimeout(function(){ magicDiv[j].style.borderLeftColor="yellow"; }, 7000);
    }
});
