
const counter = document.querySelector('.counter');
const btnInc = document.querySelector('.btn-inc');
const btnDesc = document.querySelector('.btn-desc');
const patt1 = /\D/g;
const wishListBtn0 = document.getElementById("id-add-wish-list");
wishListBtn0.style.color = "rgb(0, 123, 255)";

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


function addWish() {
    const wishListBtn = document.getElementById("id-add-wish-list");
    console.log(wishListBtn.style.color);
    if(wishListBtn.style.color == "rgb(255, 0, 129)"){
        wishListBtn.style.color = "rgb(0, 123, 255)";
    }
    else
        wishListBtn.style.color = "rgb(255, 0, 129)";

}