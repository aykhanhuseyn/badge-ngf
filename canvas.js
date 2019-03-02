// get canvas element
var canvas = document.getElementById("myCanvas");
// get input element
var selectBG = document.getElementById('selectBG');
// get canvas context to draw
var context = canvas.getContext("2d");
// get fullname 
let fullname = document.getElementById("fullname").value;

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
let rectWidth;
rectWidth = function () {
    return (textWidth + 10);
}

let textWidth;
textWidth = fullname.addEventListener('keyup', function (event) {
    let textWidth = context.measureText(fullname).width;
    return textWidth;
})

fullname.addEventListener('keyup', function () { drawRect() })

function drawRect() {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.rect(((600 - rectWidth) / 2), 245, (600 - ((600 - rectWidth) / 2)), 275);
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.strokeRect(((600 - rectWidth) / 2), 245, (600 - ((600 - rectWidth) / 2)), 275);
    context.stroke();
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
    // creating gradient 
    let gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", " magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    context.fillStyle = gradient;

    context.font = "30px Arial";
    context.textAlign = "center";

    fullname.addEventListener("keyup", function (event) {
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
