
        const counter = document.querySelector('.counter');
        const btnInc = document.querySelector('.btn-inc');
        const btnDesc = document.querySelector('.btn-desc');

        btnInc.addEventListener('click', () => {
            counter.innerHTML = Number(counter.innerHTML)+1;
        });
        btnDesc.addEventListener('click', () => {
            if(counter.innerHTML>1){
                counter.innerHTML = Number(counter.innerHTML)-1;
            }
        });