function countNumber (a,b) {
    if (a===b) {
        return console.log(a);
    } else if (a < b){
        console.log(a);
        a+=1;
        countNumber(a,b);
    } else{
        console.log(a);
        a-=1;
        countNumber(a,b);

    }
}

countNumber(1,10)
countNumber(10,1)

let clock = document.querySelector('.clock');

function clocks() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (clock.classList.contains('full')){
        clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    } else (
        clock.innerHTML = `${hours}:${minutes}`
    );
}

clock.addEventListener('click', function () {
    clock.classList.toggle('full');
})

setInterval(clocks, 1000);