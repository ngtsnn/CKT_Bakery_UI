const see_moreBtns = document.querySelectorAll('.see-more-btn')

see_moreBtns.forEach(see_moreBtn => {
    const dataCollapse = document.querySelector(see_moreBtn.getAttribute('data-target'));
    const data = dataCollapse.children;
    const quantityShow = dataCollapse.getAttribute('set-quantity-show-collapse');

    if (data.length <= quantityShow){
        see_moreBtn.classList.add('d-none');
        return;
    }

    for(var i = 0; i < data.length; i++){
        if (i >= quantityShow){
            data[i].classList.add('d-none');
        }
    }

    see_moreBtn.addEventListener('click', ()=>{
        see_moreBtn.children[0].classList.toggle('d-none');
        see_moreBtn.children[1].classList.toggle('d-none');

        for(var i = 0; i < data.length; i++){
            if (i >= quantityShow){
                data[i].classList.toggle('d-none');
            }
        }
    });
})