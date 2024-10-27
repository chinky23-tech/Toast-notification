document.addEventListener("DOMContentLoaded",() => {
    const toastOverlay = document.getElementById("toast-overlay");

    function showToast(message, bgColor){
        toastOverlay.textContent = message;
        toastOverlay.style.backgroundColor= bgColor;
        toastOverlay.classList.add("toast-show");

        setTimeout(() => {
            toastOverlay.classList.remove("toast-show");
        },3000);
    }
 document.getElementById("btn1").addEventListener( "click" , () => {
    showToast("success! Your action was submitted.", "green");
 });
 document.getElementById("btn2").addEventListener("click" , () => {
    showToast("Error!  Action  failed to process.", "red");
 });
 document.getElementById("btn3").addEventListener("click" , () => {
    showToast("Info: Here's some Information.", "yellowgreen");
 });
 document.getElementById("btn4").addEventListener("click" , () => {
    showToast("Warning! Check your action.", "orange");
 });

});
