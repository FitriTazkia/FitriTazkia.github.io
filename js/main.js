window.addEventListener('DOMContentLoaded', () => {
    const fireBg = document.getElementById('fire-background');
    const flameCount = 40; // jumlah api

    for (let i = 0; i < flameCount; i++) {
        const flame = document.createElement('div');
        flame.className = 'bg-flame';
        // posisi random
        flame.style.left = Math.random() * 100 + 'vw';
        flame.style.top = (70 + Math.random() * 25) + 'vh';
        flame.style.width = (20 + Math.random() * 30) + 'px';
        flame.style.height = (40 + Math.random() * 60) + 'px';
        flame.style.animationDuration = (1.5 + Math.random() * 2) + 's';
        flame.style.animationDelay = (Math.random() * 2) + 's';
        fireBg.appendChild(flame);
    }

    // Opening logic
    const opening = document.getElementById('fire-opening');
    const header = document.querySelector('.fire-header');
    setTimeout(() => {
        opening.classList.add('hide');
        setTimeout(() => {
            opening.style.display = 'none';
            header.style.display = '';
        }, 1000); // tunggu transisi selesai
    }, 2500); // tampil 2.5 detik
});