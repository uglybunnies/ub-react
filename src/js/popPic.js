 module.exports = function(e) {
    let showing = document.querySelectorAll('.view');
    let shows = (showing.length > 0) ? true : false;
    let target = e.target;
    let reset = function(showing) {
        showing.forEach(function(pic) {
            if (pic.classList.contains('view')) {
                pic.classList.remove('view');
                pic.removeAttribute('style');
            }
        });
    }
    if (target.matches('.pop-pic')) {
        let viewWidth = (window.innerWidth < 800) ? true : false;
        let parent = target.offsetParent;
        let translateVals = (viewWidth) ? 'scale(1.8)' : 'scale(2)';
        if (parent.matches('.view') && shows) {
            reset(showing);
        }
        else {
            if (shows) {
                reset(showing);
            }
            parent.classList.add('view');
            parent.style.zIndex = 5;
            parent.style.transform = translateVals;
        }

    }
    else {
        reset(showing);
    }
}
