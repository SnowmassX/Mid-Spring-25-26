let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function () {
    let d1 = document.getElementById('d1');

    let current = 0; // start from 0px
    let count = 0;

    let interval = setInterval(() => {
        if (count >= 20) {
            clearInterval(interval);
        } else {
            current += 10;
            d1.style.left = current + 'px';
        }
        count++;
    }, 10);
});