let rotatorCase = document.querySelector('span.rotator__case');

rotatorCase.style.color = rotatorCase.getAttribute('data-color');
let rotateSpeed = rotatorCase.closest('span.rotator').firstElementChild.getAttribute('data-speed');
function rotateFn() {
    if (rotatorCase.nextElementSibling === null) { 
        rotatorCase.closest('span.rotator').lastElementChild.classList.remove('rotator__case_active');
        rotatorCase = rotatorCase.closest('span.rotator').firstElementChild;
        rotatorCase.classList.toggle('rotator__case_active');
        rotateSpeed = rotatorCase.getAttribute('data-speed');
        styleAtt = rotatorCase.getAttribute('data-color');
        rotatorCase.style.color = styleAtt;
    } else {
        rotatorCase.classList.toggle('rotator__case_active');
        rotatorCase = rotatorCase.nextElementSibling
        rotatorCase.classList.toggle('rotator__case_active');
        rotateSpeed = rotatorCase.getAttribute('data-speed')
        styleAtt = rotatorCase.getAttribute('data-color');
        rotatorCase.style.color = styleAtt;
    };
    setTimeout(rotateFn, rotateSpeed); 
};

setTimeout(rotateFn, rotateSpeed);