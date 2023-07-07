const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const accordionButton = accordion.querySelector('.accordionButton');
    accordionButton.addEventListener('click', () => {
        accordion.querySelector('.minusIcon').classList.toggle('deactive');
        accordion.querySelector('.plusIcon').classList.toggle('deactive');
        accordion.querySelector('.accordionContent').classList.toggle('deactive')
    })
});