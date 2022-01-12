var nifInput = document.forms["form"]["nif"];

function nifAlert() {
    if(nifInput.value.length != 9) {     
       document.getElementsByClassName('nif-error-message')[0].style.visibility = "visible"; 
       document.getElementById('nif-input').style.border = "solid 2px";
       document.getElementById('nif-input').style.borderColor = "#D52B1E";
    } else {
        document.getElementsByClassName('nif-error-message')[0].style.visibility = "hidden";  
    }
}
