document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? "block" : "none";
        });

        slideIndex = (slideIndex + 1) % slides.length; // Pindah ke slide berikutnya
        setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
    }

    showSlides();
});

document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    // Fungsi untuk menampilkan slide berdasarkan indeks
    function showSlide(index) {
        slideIndex = (index + slides.length) % slides.length; // Pastikan indeks valid
        slides.forEach((slide, i) => {
            slide.style.display = i === slideIndex ? "block" : "none";
        });
    }

    // Fungsi untuk mengubah slide
    function changeSlide(step) {
        showSlide(slideIndex + step);
    }

    // Tampilkan slide pertama
    showSlide(slideIndex);

    // Ekspor fungsi ke global agar tombol bisa memanggilnya
    window.changeSlide = changeSlide;
});