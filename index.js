const root = document.querySelector('#root')
const image = document.createElement('img')

image.setAttribute('id','player')
image.src = 'https://media.tenor.com/images/0791eb3858075aca85eed5ecfe08c778/tenor.gif'
image.style.top = '0px'
image.style.left = '0px'

root.append(image)
let direction = 'right';

setInterval(() => {
    const currentLeft = image.style.left.replace('px','')
    let newPosition = currentLeft

    if(direction === 'left'){
        newPosition = `${parseInt(currentLeft) - 50}px`
        image.classList.add('inverse')
    }else if(direction === 'right'){
        newPosition = `${parseInt(currentLeft) + 50}px`
        image.classList.remove('inverse')
    }
    if(parseInt(newPosition.replace('px','')) < 0 && direction !== 'right'){
        newPosition = "-78px";
        setTimeout(() => {
            direction = 'right'
        },2000)
    }
    else if(parseInt(newPosition.replace('px','')) >= window.innerWidth - 140 && direction !== 'left'){
        newPosition = `${window.innerWidth-140}px`
        setTimeout(() => {
            direction = 'left'
        },2000)
    }
    console.log(newPosition)
    image.style.left = newPosition

},300)

document.addEventListener('keydown',function(e){

    const currentTop = image.style.top.replace('px','')
    const currentLeft = image.style.left.replace('px','')

    if(e.keyCode === 38){
        let newPosition = `${parseInt(currentTop) - 50}px`
        image.style.top = newPosition
    }
    else if(e.keyCode === 40){
        let newPosition = `${parseInt(currentTop) + 50}px` 
        image.style.top = newPosition
    }
    else if(e.keyCode === 37){
        direction = 'left'
        let newPosition = `${parseInt(currentLeft) - 50}px`
        image.style.left = newPosition
        image.classList.add('inverse')
    }
    else if(e.keyCode === 39){
        direction = 'right'
        let newPosition = `${parseInt(currentLeft) + 50}px`
        image.style.left = newPosition
        image.classList.remove('inverse')
    }
})