//---------------SLIDE POSTER----------------

// Lấy ra container slide và item slide
var displaySlider = document.querySelector('.display-slider');
var sliderItem = Array.from(displaySlider.children);

// Lấy ra container button radio và button radio
var radioControl = document.querySelector('.radio-control');
var buttonRadio = Array.from(radioControl.children);

// lấy width của item slide
var sizeSlide = sliderItem[0].getBoundingClientRect();
var sizeWidth = sizeSlide.width;

// Set up vị trí của slide
const setSlidePosition = (slide, index) => {
    slide.style.left = sizeWidth * index + 'px';
}

sliderItem.forEach(setSlidePosition);
const changeClassSlide = (currentSlide, targetSlide) => {
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const moveToSlide = (displaySlider, currentSlide, targetSlide) => {
    const lastSlide = displaySlider.lastElementChild;
    const firstSlide = displaySlider.firstElementChild;
    if (targetSlide == lastSlide) {
        targetSlide = firstSlide;
        displaySlider.style.transform = 'translateX(' + targetSlide.style.left + ')';
        changeClassSlide(currentSlide, targetSlide);
    }
    displaySlider.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    changeClassSlide(currentSlide, targetSlide);
}
const updateRadioButton = (currentRadio, targetRadio) => {
    const lastRadio = radioControl.lastElementChild;
    const firstRadio = radioControl.firstElementChild;
    if (targetRadio == lastRadio) {
        targetRadio = firstRadio;
    }
    currentRadio.classList.remove('current-slide');
    targetRadio.classList.add('current-slide');
}


radioControl.addEventListener('click', event => {
    const targetRadio = event.target.closest('button');
    console.log(targetRadio);
    if (!targetRadio) return;
    const currentSlide = displaySlider.querySelector('.current-slide');
    const currentRadio = radioControl.querySelector('.current-slide');
    const indexTarget = buttonRadio.findIndex(dot => dot == targetRadio);
    const targetSlide = sliderItem[indexTarget];
    moveToSlide(displaySlider, currentSlide, targetSlide);
    updateRadioButton(currentRadio, targetRadio);
})

setInterval(() => {
    const currentSlide = displaySlider.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentRadio = radioControl.querySelector('.current-slide');
    const nextRadio = currentRadio.nextElementSibling;
    moveToSlide(displaySlider, currentSlide, nextSlide);
    updateRadioButton(currentRadio, nextRadio);
}, 4000);

//-------------------------------------------------------

//--------------SLIDER CINEMA FILM-----------------------

const slideCinema = document.querySelector('.slider-cinema');
const slideGroup = Array.from(slideCinema.children);

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

const paramClient = slideGroup[0].getBoundingClientRect();
const widthSlide = paramClient.width;

const setPositionCinema = (slide, index) => {
    slide.style.left = widthSlide * index + 'px';
};

slideGroup.forEach(setSlidePosition);

const changeSlideGroup = (slideCinema, activeGroup, targetGroup) => {
    const firstGroup = slideCinema.firstElementChild;
    const lastGroup = slideCinema.lastElementChild;
    if (targetGroup == lastGroup) {
        targetGroup = firstGroup;
        slideCinema.style.transform = 'translateX(' + targetGroup.style.left + ')';
        activeGroup.classList.remove('active-group');
        targetGroup.classList.add('active-group');
    }
    slideCinema.style.transform = 'translateX(-' + targetGroup.style.left + ')';
    activeGroup.classList.remove('active-group');
    targetGroup.classList.add('active-group');
}

setInterval(() => prevButton.addEventListener('click', event => {
    const activeGroup = slideCinema.querySelector('.active-group');
    const prevGroup = activeGroup.previousElementSibling;
    changeSlideGroup(slideCinema, activeGroup, prevGroup);
}), 5000);

nextButton.addEventListener('click', event => {
    const activeGroup = slideCinema.querySelector('.active-group');
    const nextGroup = activeGroup.nextElementSibling;
    changeSlideGroup(slideCinema, activeGroup, nextGroup);
})
const autoMoveGroup = setInterval(() => {
    const activeGroup = slideCinema.querySelector('.active-group');
    const nextGroup = activeGroup.nextElementSibling;
    changeSlideGroup(slideCinema, activeGroup, nextGroup);
}, 3500);

//-------------------------------------------------------

//---------------------TAB-FILM-COUNTRY------------------
// var buttons = document.getElementsByClassName('tab-film-option');
// var tabContents = document.getElementsByClassName('tab-content');

// let showContent = (id) => {
//     for (var i = 0; i < tabContents.length; i++) {
//         tabContents[i].style.display = 'none';
//     }
//     var content = document.getElementById(id);
//     content.style.display = 'block';
// }
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function(event) {
//         event.preventDefault();
//         var id = this.textContent;
//         console.log(id);
//         for (let i = 0; i < buttons.length; i++) {
//             buttons[i].classList.remove("active");
//         }
//         this.className += " active";
//         showContent(id);
//     });
// }
// showContent('HÀN QUỐC');

//-------------------------------------------------------
var buttons = document.getElementsByClassName('tab-option-item');
var contents = document.getElementsByClassName('tab-content');

function showContent(id) {
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    var content = document.getElementById(id);
    content.style.display = 'block';
}
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        event.preventDefault();
        var id = this.textContent;
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        this.className += " active";
        showContent(id);
    });
}
showContent('HÀN QUỐC');