const sr= ScrollReveal({
    viewFactor:0.2,
    viewOffset:{top:0,right:0,bottom:200,left:0}
});

const srm= ScrollReveal()

srm.reveal('.Elementos',{
    duration: 1000,
    origin: 'right',
    distance: '30px',
    delay: 200,
    easing: 'ease-out',
    reset: true
})


srm.reveal('.logo',{
    duration: 1000,
    origin: 'left',
    distance: '30px',
    delay: 300,
    easing: 'ease-in',
    reset: true
})

srm.reveal('.informacion',{
    duration: 1000,
    origin: 'bottom',
    distance: '30px',
    delay: 300,
    easing: 'ease-out',
    reset: true
})

sr.reveal('.mision',{
    duration: 1000,
    origin: 'left',
    distance: '50px',
    delay: 100,
    easing: 'ease-out',
    reset: true        
});

