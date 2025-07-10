document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    function setActiveLink() {
        let currentHash = window.location.hash;
        navLinks.forEach(link => {
            if (link.hash === currentHash) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }
})