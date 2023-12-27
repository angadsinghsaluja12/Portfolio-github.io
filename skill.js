var progressBars = document.querySelectorAll('.skill-progress > div');

function initialiseBars(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (let bar of progressBars) {
    initialiseBars(bar);
}

function fillBar(bar) {
    var targetWidth = bar.getAttribute('data-bar-width');
    let currentwidth = 0;
    let interval = setInterval(() => {
        if (currentwidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentwidth++;
        bar.style.width = currentwidth + '%';
    }, 8);
}

function checkScroll(){
    for(let bar of progressBars){
        let barCoordinates = bar.getBoundingClientRect();
        if(bar.getAttribute("data-visited") == "false" && barCoordinates.top <= window.innerHeight - barCoordinates.height){
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        }
        else if(barCoordinates.top > window.innerHeight){
            bar.setAttribute("data-visited", false);
            initialiseBars(bar);
        }
    }
}

window.addEventListener("scroll",checkScroll);
window.addEventListener("load",checkScroll);