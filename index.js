var imageElement = document.getElementById('brand-Logo');
var lableElement = document.getElementById("label-span");
var loaderIconElement = document.getElementById("loader-Icon");
var uploadIconElement = document.getElementById("upload-Icon");
var closeIconElement = document.getElementById("close-Icon");
var flexHandleElement = document.getElementById("flex-handle");

function cssHelper(color, elementName, imageUrl){
    checkForBoxShadow();
    elementName.style.boxShadow = `0px 0px 2px 3px ${color} inset`;
    document.getElementById("image").src = imageUrl;
    var body = document.getElementsByTagName("BODY")[0]
    body.style.backgroundColor = color;
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        imageElement.style.display = "none";
        loaderIconElement.style.display = "block";
        uploadIconElement.style.display = "none";
        reader.onload = function (e) {
            imageElement.setAttribute('src', e.target.result);
            closeIconElement.style.display = "block";
            flexHandleElement.style.display = "none";
            setTimeout(() => {
                loaderIconElement.style.display = "none";
                imageElement.style.width = "10%";
                imageElement.style.height = "5%";
                imageElement.style.display = "block";
                uploadIconElement.style.display = "block";
            }, 2000);
        };
        lableElement.innerText = input.files[0].name;
        reader.readAsDataURL(input.files[0]);
    }
}

function DeleteImage(){
    imageElement.style.display = "none";
    lableElement.innerText = "Select a file"
    closeIconElement.style.display = "none";
    flexHandleElement.style.display = "block";
}

function checkForBoxShadow() { 
    blueColorPalate.style.boxShadow = "none";
    pinkColorPalate.style.boxShadow = "none";
    yellowColorPalate.style.boxShadow = "none";
 }

var blueColorPalate = document.getElementById("bg-blue");   
blueColorPalate.addEventListener("click", () =>{
    cssHelper("#c2d7eb", blueColorPalate,  "./assets/Blue umbrella.png");
})


var pinkColorPalate = document.getElementById("bg-pink");
pinkColorPalate.addEventListener("click", () =>{
    cssHelper("#e3c5ed", pinkColorPalate,  "./assets/pink umbrella.png");
})

var yellowColorPalate = document.getElementById("bg-yellow");
yellowColorPalate.addEventListener("click", () =>{
    cssHelper("#fff9da", yellowColorPalate,  "./assets/yello umbrella.png");
})