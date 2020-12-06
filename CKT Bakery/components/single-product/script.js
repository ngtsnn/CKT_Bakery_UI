
const counter = document.querySelector('.counter');
const btnInc = document.querySelector('.btn-inc');
const btnDesc = document.querySelector('.btn-desc');
const patt1 = /\D/g;

btnInc.addEventListener('click', () => {
    counter.value = Number(counter.value) + 1;
    counter.focus();
});
btnDesc.addEventListener('click', () => {
    if (counter.value > 1) {
        counter.value = Number(counter.value) - 1;
        counter.focus();
    }
});
counter.addEventListener('keyup',()=>{
    if(counter.value===''){
        counter.value = 1;
    }
    
    counter.value = counter.value.replace(patt1,'');
})