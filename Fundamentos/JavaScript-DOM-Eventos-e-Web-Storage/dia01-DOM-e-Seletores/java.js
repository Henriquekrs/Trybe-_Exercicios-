const headers = document.getElementById("header-container");
    headers.style.backgroundColor = 'rgb(0, 176, 105)';

const content1 = document.getElementsByClassName('emergency-tasks')[0];
    content1.style.backgroundColor = 'rgb(255, 159, 132)';

const contentLeft = document.querySelectorAll('.emergency-tasks h3');
    for (let index = 0;index < contentLeft.length; index += 1) {
        contentLeft[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const content2 = document.querySelector('.no-emergency-tasks');
    content2.style.backgroundColor = 'rgb(249, 219, 94)';

const contentRight = document.querySelectorAll('.no-emergency-tasks h3');
    for (let index = 0;index < contentRight.length; index += 1) {
        contentRight[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById('footer-container');
    footer.style.backgroundColor = 'rgb(0, 176, 105)';