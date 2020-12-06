const imgUploadInput = document.querySelector('#img-upload')
const reviewBox = document.querySelector('#review-box');
const reviewImg = reviewBox.querySelector('img');

if (reviewImg.getAttribute('src')){
    if (reviewBox.classList.contains('d-none')){
        reviewBox.classList.remove('d-none');
    }
}
else{
    if (!reviewBox.classList.contains('d-none')){
        reviewBox.classList.add('d-none');
    }
}

imgUploadInput.addEventListener('change', () => {
    const img = imgUploadInput.files[0];
    if (img){
        const imgReader = new FileReader();
        imgReader.readAsDataURL(img);
        imgReader.addEventListener('load', () => {
            reviewImg.setAttribute('src', imgReader.result);
            if (reviewBox.classList.contains('d-none')){
                reviewBox.classList.remove('d-none');
            }
        })

        
    }
    else{
        if (!reviewBox.classList.contains('d-none')){
            reviewBox.classList.add('d-none');
        }
    }
    
})