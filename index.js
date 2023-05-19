const open_btn = document.querySelector(".bi-list");
const nav_bar = document.querySelector(".nav-bar");
const close_btn = document.querySelector(".close-btn");
const nav_list_items = document.querySelectorAll(".nav-list-items");
const body = document.querySelector(".content-container");
var spans = document.querySelectorAll('#btn span');


var e = document.getElementById('btn');
e.addEventListener('click', function () {
    // open button
    if (this.className == 'on') {
        this.classList.remove('on');
        nav_list_items.forEach(ele => ele.classList.toggle('active'));

        body.classList.toggle("overlay-active");

        setTimeout(() => {
            spans.forEach(function (span) {
                span.style.border = ' 1.9px solid black';
                span.style.background = 'black';
            });
            nav_bar.classList.toggle('active');
        }, 500);
    }
    else {
        // close button
        body.classList.toggle("overlay-active");
        nav_list_items.forEach(ele => ele.classList.toggle('active'));
        nav_bar.classList.toggle('active');
        spans.forEach(function (span) {
            span.style.border = ' 1.9px solid white';
            span.style.background = 'white';
        });
        this.classList.add('on');

    }
});
