var nifInput = document.forms["form"]["nif"];

function nifAlert() {
    if(nifInput.value.length != 9) {     
       document.getElementsByClassName('nif-error-message')[0].style.visibility = "visible"; 
    } else {
        document.getElementsByClassName('nif-error-message')[0].style.visibility = "hidden";  
    }
}
