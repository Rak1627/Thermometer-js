{/* <span id="temp" class="fa"></span> */}

const temp = document.getElementById('temp');

const tempLoad = () => {
    temp.innerHTML = "&#xf2cb";
    temp.style.color = '#fff'
    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = '#b8e994';
    }, 1000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = '#f6b93b';
    }, 2000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color = '#e58e26'
    }, 3000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "#b71540"
    }, 4000);

}
tempLoad();
setInterval(tempLoad, 5000);