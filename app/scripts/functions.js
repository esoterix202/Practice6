//searchbox drop
function dropSearchBox() {
    var searchIcon = $('.search-icon');
    var searchDrop = $('.dropdown.search');
    var mainNav = $('.main-nav');

    searchIcon.on('click', function () {
        searchDrop.slideToggle();
        if ($(window).width() < 768) {
            mainNav.slideUp();
        }
    });
}

// mob-menu drop
function dropMobMenu() {
    var mobIcon = $('.mob-icon');
    var mainNav = $('.main-nav');
    var searchDrop = $('.dropdown.search');

    mobIcon.on('click', function () {
        mainNav.slideToggle();
        if ($(window).width() < 768) {
            searchDrop.slideUp();
        }
    });
}

//mob-menu lists drop
function dropList() {
    var title = $('.toggle-list');

    title.on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('transform');
    });
}

//pop-up video
function videoPopUp() {
    var playVideo = $('.play-video');
    var closeVideo = $('.close-pop-up');
    var popUp = $('.pop-up');

    playVideo.on('click', function () {
        popUp.fadeIn();
    });

    closeVideo.on('click', function () {
        popUp.fadeOut();
    });
}

//move overlay boxes
function moveOverlays() {
    var overlayBoxes = $('.mini-overlays');

    if ($(window).width() < 1025) {
        overlayBoxes.insertBefore('.content-row');
    }
}

//biography pop-up
function bioPopUp() {
    var directorProfile = $('.content-box.director');
    var hiddenBiography = $('.hidden-p');
    var popUp = $('.pop-up');
    var closePopUp = $('.close-pop-up');
    var biographyBox = $('.bio-box');

    directorProfile.on('click', function () {
        popUp.fadeIn();
        $(this).clone().appendTo('.bio-box').find('.hidden-p').show();
    });
    closePopUp.on('click', function () {
        popUp.fadeOut(function() {
            biographyBox.empty(); 
        });
    });
}