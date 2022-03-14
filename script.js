const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

//toggle Navigation
toggle.addEventListener("click", () =>
document.body.classList.toggle("show-nav")
);

//show contact Form
open.addEventListener("click", () => modal.classList.add("show-modal"));

//close contact Form
close.addEventListener("click", () => modal.classList.remove("show-modal"));

//hide contact form on outside click
window.addEventListener("click", event =>
    event.target == modal ? modal.classList.remove("show-modal") : false
);
