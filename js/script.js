$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin: 32,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})