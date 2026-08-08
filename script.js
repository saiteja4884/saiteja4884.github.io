javascript
/* =========================================================
   G SAITEJA PORTFOLIO
   JAVASCRIPT
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");


if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("menu-open");

    });

}


/* Close mobile menu when clicking a link */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("menu-open");

    });

});


/* =========================================================
   2. SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   3. SKILL CARDS ANIMATION
========================================================= */

const skillCards =
    document.querySelectorAll(".skill-card");


const skillObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry, index) => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }, index * 100);

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


skillCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(20px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    skillObserver.observe(card);

});


/* =========================================================
   4. PROJECT CARDS ANIMATION
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


const projectObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry, index) => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }, index * 150);

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


projectCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(25px)";

    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    projectObserver.observe(card);

});


/* =========================================================
   5. ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


const navigationLinks =
    document.querySelectorAll(".nav-links a");


const activeSectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentSection =
                        entry.target.getAttribute("id");


                    navigationLinks.forEach(link => {

                        link.classList.remove("active");

                        const href =
                            link.getAttribute("href");


                        if (href === `#${currentSection}`) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },

        {
            threshold: 0.45
        }

    );


sections.forEach(section => {

    activeSectionObserver.observe(section);

});


/* =========================================================
   6. PROFILE CARD MOUSE MOVEMENT
========================================================= */

const profileCard =
    document.querySelector(".profile-card");


const heroVisual =
    document.querySelector(".hero-visual");


if (profileCard && heroVisual) {

    heroVisual.addEventListener(
        "mousemove",
        (event) => {

            /* Disable effect on small screens */

            if (window.innerWidth <= 700) {

                return;

            }


            const rect =
                heroVisual.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -4;


            const rotateY =
                ((x - centerX) / centerX) * 5;


            profileCard.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 rotateZ(1deg)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                "rotateX(0deg) rotateY(0deg) rotateZ(1deg)";

        }
    );

}


/* =========================================================
   7. FLOATING CARD PARALLAX
========================================================= */

const floatingCards =
    document.querySelectorAll(".floating-card");


if (heroVisual && floatingCards.length > 0) {

    heroVisual.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth <= 700) {

                return;

            }


            const rect =
                heroVisual.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const moveX =
                (x - rect.width / 2) / 30;


            const moveY =
                (y - rect.height / 2) / 30;


            floatingCards.forEach(
                (card, index) => {

                    const multiplier =
                        index === 0 ? 1 : -1;


                    card.style.transform =
                        `translate(
                            ${moveX * multiplier}px,
                            ${moveY * multiplier}px
                        )`;

                }
            );

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            floatingCards.forEach(card => {

                card.style.transform =
                    "translate(0, 0)";

            });

        }
    );

}


/* =========================================================
   8. PROJECT IMAGE HOVER
========================================================= */

projectCards.forEach(card => {

    const image =
        card.querySelector(".project-media img");


    if (!image) {

        return;

    }


    card.addEventListener(
        "mouseenter",
        () => {

            image.style.transform =
                "scale(1.04)";

            image.style.transition =
                "transform 0.5s ease";

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            image.style.transform =
                "scale(1)";

        }
    );

});


/* =========================================================
   9. MOUSE GLOW EFFECT
========================================================= */

const body =
    document.body;


document.addEventListener(
    "mousemove",
    (event) => {

        if (window.innerWidth <= 700) {

            return;

        }


        const x =
            event.clientX;


        const y =
            event.clientY;


        body.style.setProperty(
            "--mouse-x",
            `${x}px`
        );


        body.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    }
);


/* =========================================================
   10. CURRENT YEAR
========================================================= */

const footer =
    document.querySelector(".footer");


if (footer) {

    const yearText =
        footer.querySelector("span");


    if (yearText) {

        yearText.textContent =
            `© ${new Date().getFullYear()} G Saiteja`;

    }

}


/* =========================================================
   11. SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                targetId.length < 2
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (!target) {

                return;

            }


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});


/* =========================================================
   12. BUTTON RIPPLE EFFECT
========================================================= */

const buttons =
    document.querySelectorAll(".button");


buttons.forEach(button => {

    button.addEventListener(
        "click",
        function (event) {

            const ripple =
                document.createElement("span");


            const rect =
                button.getBoundingClientRect();


            const size =
                Math.max(
                    rect.width,
                    rect.height
                );


            ripple.style.width =
                `${size}px`;


            ripple.style.height =
                `${size}px`;


            ripple.style.position =
                "absolute";


            ripple.style.borderRadius =
                "50%";


            ripple.style.background =
                "rgba(255,255,255,0.18)";


            ripple.style.transform =
                "translate(-50%, -50%)";


            ripple.style.pointerEvents =
                "none";


            ripple.style.left =
                `${event.clientX - rect.left}px`;


            ripple.style.top =
                `${event.clientY - rect.top}px`;


            ripple.style.animation =
                "rippleEffect 0.6s ease-out";


            button.style.position =
                "relative";


            button.style.overflow =
                "hidden";


            button.appendChild(ripple);


            setTimeout(() => {

                ripple.remove();

            }, 600);

        }
    );

});


/* =========================================================
   13. TYPING EFFECT FOR HERO ROLE
========================================================= */

const heroRole =
    document.querySelector(".hero h2");


/*
    The typing effect is intentionally disabled
    by default.

    To enable it later, change:

    const enableTyping = false;

    to:

    const enableTyping = true;
*/


const enableTyping =
    false;


if (heroRole && enableTyping) {

    const roles = [

        "Data Analyst",

        "Data Engineer",

        "Machine Learning Enthusiast",

        "IoT Developer"

    ];


    let roleIndex =
        0;


    let characterIndex =
        0;


    let deleting =
        false;


    function typeRole() {

        const currentRole =
            roles[roleIndex];


        if (!deleting) {

            heroRole.textContent =
                currentRole.substring(
                    0,
                    characterIndex + 1
                );


            characterIndex++;


            if (
                characterIndex ===
                currentRole.length
            ) {

                deleting =
                    true;

                setTimeout(
                    typeRole,
                    1500
                );

                return;

            }

        } else {

            heroRole.textContent =
                currentRole.substring(
                    0,
                    characterIndex - 1
                );


            characterIndex--;


            if (characterIndex === 0) {

                deleting =
                    false;

                roleIndex =
                    (roleIndex + 1)
                    % roles.length;

            }

        }


        setTimeout(
            typeRole,
            deleting ? 45 : 75
        );

    }


    typeRole();

}


/* =========================================================
   14. PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);


/* =========================================================
   15. CONSOLE MESSAGE
========================================================= */

console.log(
    "%cG Saiteja Portfolio",
    "font-size:20px;font-weight:bold;color:#5cc8ff;"
);

console.log(
    "%cData • Code • Insights",
    "font-size:12px;color:#8df05b;"
);
```
