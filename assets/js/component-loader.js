/* ==========================================================================
Component Loader Script
Memuat header dan footer secara dinamis agar konsisten di seluruh halaman
========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
// Load Header
fetch('/components/header.html')
.then(response => response.text())
.then(data => {
const headerPlaceholder = document.getElementById('site-header');
if (headerPlaceholder) {
headerPlaceholder.innerHTML = data;
// Re-initialize Lucide icons for injected header content
if (typeof lucide !== 'undefined') {
lucide.createIcons();
}
initMobileMenu();
}
});

// Load Footer
fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
        const footerPlaceholder = document.getElementById('site-footer');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = data;
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    });


});

function initMobileMenu() {
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}


}
