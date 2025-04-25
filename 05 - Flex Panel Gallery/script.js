const panels = document.querySelectorAll('.panel');

function openToggle(){
    this.classList.toggle('open');
}
function activeToggle(e){
    if(e.propertyName === "flex-grow" && "flex"){
        this.classList.toggle('open-active');
    }
    return
}
panels.forEach(panel => panel.addEventListener('click',openToggle))
panels.forEach(panel => panel.addEventListener('transitionend',activeToggle))