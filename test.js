let video = document.getElementById("video");

window.onload = function () {
    video.setAttribute("autoplay");
}

// -----------------------------------------------------------------

let span = document.getElementById("span"),
    count = document.getElementById("count"),
    z = 0;


count.onclick = function () {
    z += 1;

    span.innerHTML = z;

}
