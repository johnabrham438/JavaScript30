const Checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked;
function Handle(e){
    let isBetween = false;
    if(e.shiftKey && this.checked){
        Checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this){
                isBetween = !isBetween;

            }
            if(isBetween){
                checkbox.checked = true;
            }
            
        })

    }
    
}
Checkboxes.forEach( Checkbox => Checkbox.addEventListener('click', Handle));
