const button = document.getElementById('btn');
const button1 = document.getElementById('btn-1');
const target = document.getElementById('target');
const target2 = document.getElementById('target2')
const target1 = document.getElementById('target1')
button.addEventListener('click', () => {
    const isMobile = window.matchMedia("(max-width: 376px)").matches;
    if (isMobile) {
        target1.classList.toggle('hidden');
        target2.classList.toggle('hidden');

    } else {
        target.classList.toggle('hidden');
        button.classList.toggle('bg-btn');
    }
})

button1.addEventListener('click', () => {
    target1.classList.toggle('hidden');
    target2.classList.toggle('hidden');
})