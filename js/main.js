window.onscroll = function() {scrollFunction()};

const t1 = document.getElementById("tag1");
const t2 = document.getElementById("tag2");
const t3 = document.getElementById("tag3");
const t4 = document.getElementById("tag4");
const header = document.getElementById("header");

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    header.classList.add("highlight");
    t1.classList.add("white");
    t2.classList.add("white");
    t3.classList.add("white");
    t4.classList.add("white");
  } else {
   header.classList.remove("highlight");
   t1.classList.remove("white");
   t2.classList.remove("white");
   t3.classList.remove("white");
   t4.classList.remove("white");
  }
}