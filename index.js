//js practice.......


const arrow = document.querySelectorAll('.arrow');

const movieList = document.querySelectorAll('.movie-list');


arrow.forEach((arrows, i) => {
    const itemlengths = movieList[i].querySelectorAll('img').length;
    let clickCounter = 0;
    arrows.addEventListener('click', () => {
        const aspectRatio = Math.floor(window.innerWidth / 300);
        clickCounter++;
        if (itemlengths - (4 + clickCounter) + (4-aspectRatio) >= 0) {
            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get('transform')[0].x.value - 300}px)`
        }
        else {
            movieList[i].style.transform = 'translateX(0)';
            clickCounter = 0;
        }

    })
})



const balltoggle = document.querySelector('.toggle-ball');

const items = document.querySelectorAll('.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle');

balltoggle.addEventListener('click',()=>{

    items.forEach((item)=>{
        item.classList.toggle('active')
    })
    balltoggle.classList.toggle('active')
})
