"use srtict";
// nav bar active  start
$(document).on("click", ".nav-one", function (e) {
    $(".blue").removeClass("blue")
    $(e.target).parent().find("a").addClass("blue")
})
// nav bar active end

// slider start
let index = 0;
let slides = document.querySelectorAll(".slider-ul li")

$(document).ready(function () {

    $(document).on("click", ".right", function () {
        SlideLeft()
    })

    $(document).on("click", ".left", function () {
        SlideRight()
    })
})

function SlideRight() {
    index++;
    if (index = slides.length) {
        index = 0;
    }
    Slide();
}

function SlideLeft() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    Slide();
}

function Slide() {
    document.querySelector('.slider-ul').style.left = -index * 100 + "%";
}
// slider start


// small bars start
$(".small-drop-down").hide()
$(document).on("click", ".bars-icon", function () {
    $(".small-drop-down").slideToggle()
})

$(".second-ul").hide()
$(document).on("click", ".small-dropdown-icon", function (e) {
    $(e.target).parent().next().slideDown();
    $(e.target).addClass("d-none")
    $(e.target).next().removeClass("d-none")

    $(document).on("click", ".minus", function (ev) {
        $(ev.target).addClass("d-none")
        $(ev.target).prev().removeClass("d-none")
        $(ev.target).parent().next().slideUp();
    })
})
// small bars start


// tabs li start
$(document).on("click", ".tabs-ul li", function () {
    let oneUnderTabsActive = $(".under-tabs-active")
    let oneUnderTabs = $(".under-tabs")
    $(".tab-active").removeClass("tab-active")
    $(this).addClass("tab-active")

    let id = $(this).attr("data-id")
    let tabId = $(`.under-tabs[data-type="${id}"]`)

    oneUnderTabsActive.removeClass("under-tabs-active");
    tabId.addClass("under-tabs-active")
})
// tabs li end

// tabs second li start          //sehvler var baxarsan
$(document).on("click", ".narrow-right", function () {
    let active = $(".second-tab-active")
    active.removeClass("second-tab-active")
    active.next().addClass("second-tab-active")

    let id = $(".second-tab-active").attr("get-id")
    let tabId = $(`.under-tabs-s[data-type="${id}"]`)

    $(".under-tabs-active").removeClass("under-tabs-active")
    tabId.addClass("under-tabs-active")

    if (active.next().length === 0) {
        active = $(".in-second-tabs-ul li:first-child")
        active.removeClass("second-tab-active")
        active.next().addClass("second-tab-active")
    }
})

$(document).on("click", ".narrow-left", function () {
    let active = $(".second-tab-active")
    active.removeClass("second-tab-active")
    active.prev().addClass("second-tab-active")

    let id = $(".second-tab-active").attr("get-id")
    let tabId = $(`.under-tabs-s[data-type="${id}"]`)

    $(".under-tabs-active").removeClass("under-tabs-active")
    tabId.addClass("under-tabs-active")

    if (active.prev().length === 0) {
        active = $(".in-second-tabs-ul li:last-child")
        active.removeClass("second-tab-active")
        active.prev().addClass("second-tab-active")
    }
})
// tabs second li end



// Hot Hotel Details start

$(".hotel-li").on("click", function () {
    $(".hotel-active").removeClass("hotel-active")
    $(this).addClass("hotel-active")

    let id = $(".hotel-active").attr("data-id")
    let detailID = $(`.Details[get-data="${id}"]`)

    $(".Details-active").removeClass("Details-active")
    detailID.addClass("Details-active")

})



$(".circle-one").on("click", function () {
    $(".bg-hole").removeClass("bg-hole")
    $(this).addClass("bg-hole")

    let id = $(".bg-hole").attr("data-id")
    let detailID = $(`.incol-2[get-data="${id}"]`)

    $(".Details-active-a").removeClass("Details-active-a")
    detailID.addClass("Details-active-a")
})
// Hot Hotel Details start




// pages li start
$(".page-li-one").on("click", function () {
    $(".page-li-active").removeClass("page-li-active")
    $(this).addClass("page-li-active")

    let id = $(".page-li-active").attr("data-id")
    let detailID = $(`.under-div[get-data="${id}"]`)

    $(".under-page-li-active").removeClass("under-page-li-active")
    detailID.addClass("under-page-li-active")
})
// pages li end


$(".toggle-p").hide()
// toggle start
$(".toggle-acardion").on("click",function(){
    // $(".toggle-p").toggleClass("d-none")
    $(this).next().slideToggle()
})


