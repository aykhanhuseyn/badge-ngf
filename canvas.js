// get canvas element
var canvas = document.getElementById("myCanvas");
// get input element
var selectBG = document.getElementById('selectBG');
// get canvas context to draw
var context = canvas.getContext("2d");


// add event listener to know when file has been selected
selectBG.addEventListener('change', function (event) {

    // if first file is present
    if (event.target.files && event.target.files[0]) {

        // initialize new FileReader object
        let reader = new FileReader();

        reader.onload = function (e) {

            // when file has been converted to base 64 string
            // create new HTMLImageElement
            // set its `src` attribute
            // then draw it inside canvas context

            let img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                context.drawImage(img, 0, 0);
            }

        }

        // convert first file to base64 image
        reader.readAsDataURL(event.target.files[0]);

    }
});


person.addEventListener('change', function (event) {

    if (event.target.files && event.target.files[0]) {

        let reader = new FileReader();

        reader.onload = function (e) {
            let img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                context.drawImage(img, 225, 70);
            }
        }
        reader.readAsDataURL(event.target.files[0]);
    }
});


// ADDING TEXT 

// creating text-area / rectangle 
rectWidth = function () {
    let fullName = document.getElementById("fullname");
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");

    let textWidth = fullName.addEventListener('keyup', function (event) {
        let textWidth = context.measureText(fullName).width;
        return textWidth;
    })
    return (textWidth + 10);
}

drawRect();
function drawRect () {
    context.fillStyle = white;
    context.rect(((600 - rectWidth) / 2), 245, (600 - ((600 - rectWidth) / 2)), 275);
    context.stroke();
    let clearRect = function () {
        let fullName = document.getElementById("fullname");
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");

        fullName.addEventListener('keyup', function(){
            
        })
    }
}

// creating gradient 
let gradient = context.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop("0", " magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
context.fillStyle = gradient;

context.font = "30px Arial";
context.textAlign = "center";

context.fillText("Aykhan Huseyn", canvas.width / 2, 260);

addText();

function addText() {
    let fullName = document.getElementById("fullname");
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    // creating gradient 
    let gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", " magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    context.fillStyle = gradient;

    context.font = "30px Arial";
    context.textAlign = "center";

    fullName.addEventListener("keyup", function (event) {
        if (this) {
            //Add The text to canvas:
            context.fillText(this.value, canvas.width / 2, 260);
            context.stroke();
        }
    });


}


document.getElementById("create").addEventListener('click', function (event) {

    event.preventDefault();
})
