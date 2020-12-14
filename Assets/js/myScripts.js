// After user scrolls 300 pixels, the 'Back to Top' button will appear
window.onscroll = function() {scrollCheck()}; // when user scrolls, scrollCheck function is called
function scrollCheck() {
    // if user has scrolled 300 pixels from top of screen, the 'Back to Top' button will appear
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("backToTopButton").style.display = "block";
    }
    // otherwise it will stay hidden
    else {
        document.getElementById("backToTopButton").style.display = "none";
    }
}


// take user back to top of page after they click 'Back to Top' button
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
