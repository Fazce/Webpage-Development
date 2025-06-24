document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

     if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute("href").substring(1); // Get section ID
        const targetSection = document.getElementById(targetId);

         if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }

    });
});

function filterProjects(category) {
    const projects = document.querySelectorAll(".project-item");

    projects.forEach(project => {
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

document.getElementById("lightbox").addEventListener("click", (event) => {
    if (event.target === document.getElementById("lightbox")) {
        closeLightbox();
    }
});


function openLightbox(image) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = image.src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    }
}