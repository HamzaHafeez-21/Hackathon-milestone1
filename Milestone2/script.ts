const toggleButton = document.getElementById('toggle-btn') as HTMLButtonElement;
const Exp = document.getElementById('Exp') as HTMLElement

toggleButton.addEventListener('click' ,()=>{
    if(Exp.style.display === 'none'){
        Exp.style.display = 'block'
    }else{
        Exp.style.display='none'
    }
});