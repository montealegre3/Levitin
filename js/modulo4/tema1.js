document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("podcastModal");
    var img = document.querySelector(".card-image");
    var span = document.getElementsByClassName("close")[0];

    img.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});