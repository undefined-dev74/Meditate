<<<<<<< HEAD
export function Scroll (e) {
    const headline, feature__text, check, gallary__item;
e.headline = ScrollReveal().reveal('.headline')
e.feature__text = ScrollReveal().reveal('.feature__text', { delay: 1000 })
e.check = ScrollReveal().reveal('.check', { delay: 500 })
e.gallary__item = ScrollReveal().reveal('.gallery__item', {
=======
export const Scroll = (e) => {
	
ScrollReveal().reveal('.headline')
ScrollReveal().reveal('.feature__text', { delay: 1000 })
ScrollReveal().reveal('.check', { delay: 500 })
ScrollReveal().reveal('.gallery__item', {
>>>>>>> e848c0b388c29c39a004e22a5b28968403e82e8c
	delay: 1000,
	interval: 16,
	reset: true,
})
}