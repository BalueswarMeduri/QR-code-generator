let imgbox = document.querySelector(".imgbox");
let qr = document.querySelector("#QR");
let qrtext = document.querySelector("#qrtext");

function generateqr(){
    // Check if the input field is empty
    if(qrtext.value.trim() === "") {
        alert("Please enter text or URL before generating QR code.");
        return; // Stop further execution of the function
    }

    // Generate QR code if the input field is not empty
    qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    imgbox.classList.add("show-img");
}
