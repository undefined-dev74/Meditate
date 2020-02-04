export function Scroll (e) {
    const headline, feature__text, check, gallary__item;
e.headline = ScrollReveal().reveal('.headline')
e.feature__text = ScrollReveal().reveal('.feature__text', { delay: 1000 })
e.check = ScrollReveal().reveal('.check', { delay: 500 })
e.gallary__item = ScrollReveal().reveal('.gallery__item', {
	delay: 1000,
	interval: 16,
	reset: true,
})
}