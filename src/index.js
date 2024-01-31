
const contentBtns = document.querySelectorAll('.content-btn');
const pageContent = document.querySelector('#content');

contentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const buttonId = btn.id;
        console.info('buttonId: ', buttonId);
    });
});