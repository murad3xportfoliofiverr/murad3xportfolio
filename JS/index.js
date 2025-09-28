
// ***************** Header Menu Active Start*****************

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".header .container nav ul li a");
  const currentURL = window.location.href;

  links.forEach(link => {
    const linkURL = link.href;

    if (currentURL === linkURL || (currentURL.endsWith("/") && linkURL.endsWith("/index.html"))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".header .container nav ul li");
  const currentURL = window.location.href;

  listItems.forEach(li => {

    const aTag = li.querySelector('a');
    if (!aTag) return;

    const linkURL = aTag.href;

    if (
      currentURL === linkURL ||
      (currentURL.endsWith("/") && linkURL.endsWith("/index.html"))
    ) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger-icon');
  const menu = document.querySelector('.menu-item');

  hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});


// ***************** Header Menu Active End *****************


const items = document.querySelectorAll('.let-me-item');

    items[3].classList.add('active');

    items.forEach(item => {
      item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });




let lastScrollTop = 0; 

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 200) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
