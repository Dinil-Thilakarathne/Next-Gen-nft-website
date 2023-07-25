// import ScrollReveal from "scrollreveal";

// scroller reveal 
animateElement = (element,distance,duration,origin,delay) => {
    // Initialize ScrollReveal with options
    const sr = ScrollReveal({
        distance: distance,
        duration: duration,
        easing: 'ease-in-out',
        origin: origin,
        delay: delay,
    });
  
    // Reveal the element
    sr.reveal(element);
}

// header section 
animateElement('.header','500px',1000,'top',0);

// hero section 
const herosectionContentItems = document.querySelectorAll('.hero-section__content *');

herosectionContentItems.forEach((item,index) => {
    animateElement(item,'500px',500,'left',500 * (index + 1))
})

animateElement('.hero-section__image','500px',750,'right',500)


// brand section 
const brands = document.querySelectorAll('.brand__logo');

brands.forEach((item,index) => {
    animateElement(item,'500px',500,'right',500 * (index + 1))
})

// nft collection section 

animateElement('.marketplace-section__header','100%',500,'left',750)

const nftCards = document.querySelectorAll('.marketplace-section .card')

nftCards.forEach((item,index) => {
    animateElement(item,'500px',500,'right',750 * (index + 1))
})

// creators section

const creatorsectionContentItems = document.querySelectorAll('.creators-section .section-content *')
creatorsectionContentItems.forEach((item,index) => {
    animateElement(item,'500px',500,'left',500 * (index + 1))
})

const creatorsectionCards = document.querySelectorAll('.creators-section .card')

creatorsectionCards.forEach((item,index) => {
    animateElement(item,'500px',500,'right',750 * (index + 1))
})


// news letter seciton 
animateElement('.news-letter__image','500px',500,'left',500)

const newlettersectionContent = document.querySelectorAll('.news-letter__content *')

newlettersectionContent.forEach((item,index) => {
    animateElement(item,'500px',500,'right',750 * (index + 1))
})

// nft collection section 
animateElement('.nft-collection .section__content','500px',500,'left',500)

const nftcollectionCards = document.querySelectorAll('.nft-section .card')

nftcollectionCards.forEach((item,index) => {
    animateElement(item,'500px',500,'right',750 * (index + 1))
})

// blog section 
animateElement('.blog__section .section__header .__header','500px',500,'left',500)
animateElement('.blog__section .section__header .__btn','500px',500,'right',500)


const blogSectionCards = document.querySelectorAll('.blog__section .card')

blogSectionCards.forEach((item,index) => {
    animateElement(item,'500px',500,'right',750 * (index + 1))
})