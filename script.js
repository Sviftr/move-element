







let moveElement = document.querySelector('.focus') 

let staticElement = document.querySelector('.box') 

let elementViseble = true



moveElement.addEventListener('mouseover' , function(){ //not work

    document.addEventListener('mousemove' , function(event){ //start work
        if(elementViseble) {
            let X = event.clientX
            let Y = event.clientY

            moveElement.style.transform = `translate(${X}px,${Y}px)`
        }
    })
})

moveElement.addEventListener('mouseout' , function(){

    document.addEventListener('mousemove' , function(event){
        if(elementViseble) {
            let X = event.clientX
            let Y = event.clientY

            moveElement.style.transform = `translate(${X}px,${Y}px)`
        }
    })  
})