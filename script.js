// Animation du header
gsap.from("header", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });

// Animation du titre (h1)
gsap.from("header h1", { opacity: 0, y: -20, duration: 1, delay: 0.5, ease: "power2.out" });

// Animation du sous-titre (p)
gsap.from("header p", { opacity: 0, y: 20, duration: 1, delay: 1, ease: "power2.out" });



let images = document.querySelectorAll(".containerphotos .photos .image");
let siteContent = document.querySelector(".site-content");

gsap.set(images, { opacity: 0, x: "100vw", rotation: 0 }); // Départ hors écran à droite

images.forEach((img, index) => {
    let randomX = Math.random() * 100 - 50; // Décalage aléatoire sur X
    let randomY = Math.random() * 100 - 50; // Décalage aléatoire sur Y
    let randomRotation = Math.random() * 40 - 40; // Rotation aléatoire entre -40° et 40°
    
    gsap.to(img, {
        opacity: 1,
        x: randomX,
        y: randomY,
        rotation: randomRotation,
        duration: Math.max(1, 2.5 - index * 0.05), // Augmentation du temps d'animation
        delay: index * 0.4, // Augmentation du délai pour un affichage plus lent
        ease: "power2.inOut",
        onComplete: () => {
            if (index === images.length - 1) {
                setTimeout(() => {
                    gsap.to(images, { opacity: 0, duration: 0.8, onComplete: () => {
                        document.querySelector(".containerphotos").style.display = "none";
                        siteContent.style.display = "block";
                        gsap.from(siteContent, { opacity: 0, duration: 1, ease: "power2.inOut" });
                    }});
                }, 500);
            }
        }
    });
});

