document.addEventListener("DOMContentLoaded", async () => {
    const loadComponent = async (selector, filePath) => {
        const element = document.querySelector(selector);
        if (!element) return;
        try {
            const response = await fetch(filePath);
            if (response.ok) {
                element.innerHTML = await response.text();
            } else {
                console.error(`Gagal memuat ${filePath}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error saat mengambil komponen ${filePath}:`, error);
        }
    };

    // Muat Header dan Footer secara paralel
    await Promise.all([
        loadComponent("#header-placeholder", "components/header.html"),
        loadComponent("#footer-placeholder", "components/footer.html")
    ]);

    // Inisialisasi ulang Lucide Icons setelah komponen masuk ke DOM
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Aktifkan fungsi tombol menu mobile
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }
});
