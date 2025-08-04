document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".home-content h1").classList.add("animated");
    }, 500); // 0.5s delay for h1

    setTimeout(() => {
        document.querySelector(".home-content h3").classList.add("animated");
    }, 1000); // 1s delay for h3

    setTimeout(() => {
        document.querySelector(".home-content p").classList.add("animated");
    }, 1500); // 1.5s delay for p

    setTimeout(() => {
        document.querySelector(".home-content .btn-box").classList.add("animated");
    }, 2000); // 2s delay for btn-box

    setTimeout(() => {
        document.querySelector(".home-sci").classList.add("animated");
    }, 2500); // 2.5s delay for home-sci
});

// Scroll sections 
window.onscroll = () => {
    // Sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".navbar a");

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    document.querySelector(".navbar a[href='#" + id + "']").classList.add("active");
                });
            }
        });
    };
});

document.getElementById("submitBtn").addEventListener("click", function () {
    // Get values from inputs
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let responseMessage = document.getElementById("responseMessage");

    // Check if all fields are filled
    if (fullName && email && mobile && subject && message) {
        responseMessage.style.display = "block";
        responseMessage.textContent = "Response Saved Successfully!";
        responseMessage.style.color = "green";

        // Clear form after 2 seconds
        setTimeout(() => {
            document.getElementById("contactForm").reset();
            responseMessage.style.display = "none";
        }, 2000);
    } else {
        responseMessage.style.display = "block";
        responseMessage.textContent = "Please fill all the fields!";
        responseMessage.style.color = "red";
    }
});

