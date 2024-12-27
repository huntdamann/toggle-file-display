const right = document.querySelector('#icon');
const left = document.querySelector('#icon2');
const fileTwo = document.querySelectorAll('#file-2')
const fileThree = document.querySelectorAll('#file-3')



left.addEventListener("click", function() {

    const highlight = document.querySelector('.box');

    highlight.classList.add('horizTranslate');

    fileTwo.forEach(function(x) {

        x.classList.add('reposition-file');

    })
    fileThree.forEach(function(y) {

        y.classList.add('reposition-file-2');

    })
    
    
})


right.addEventListener("click", function() {

    const highlight = document.querySelector('.box');

    highlight.classList.remove('horizTranslate');
    fileTwo.forEach(function(x) {

        x.classList.remove('reposition-file');

    })
    fileThree.forEach(function(y) {

        y.classList.remove('reposition-file-2');

    })
})