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

document.getElementById('tema1-btn').onclick = function() {
    window.location.href = 'tema1.html';
};
document.getElementById('tema2-btn').onclick = function() {
    window.location.href = 'tema2.html';
};
document.getElementById('tema3-btn').onclick = function() {
    window.location.href = 'tema3.html';
};
document.getElementById('tema4-btn').onclick = function() {
    window.location.href = 'tema4.html';
};