// main js
function closeModal(){
    var modal_c = document.getElementsByClassName("modal-container")[0];
    modal_c.style.display = "none";
};

window.onload = function(){
    // Code. . .
    var modal_c = document.getElementsByClassName("modal-container")[0];
    var modal = document.getElementsByClassName("modal")[0];
    var close = document.getElementsByClassName("close")[0];
        
    var images = document.getElementsByClassName("img-thmb");

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function(e){
            modal_c.style.display = "block";
            modal.innerHTML = e.target.outerHTML;
        }, false);
    }


}
