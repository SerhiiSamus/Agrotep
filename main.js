var swiper = new Swiper('.my-swiper', {
  effect: 'cube',
  direction: 'vertical',
  // grabCursor: true,
  speed: 1200,
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  cubeEffect: {
    shadow: false,
    slideShadows: false,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// ANIMATIONS
// gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
// function animateItems() {
//   gsap.utils.toArray('.partner-item').forEach((item, index) => {
//     gsap.to(item, {
//       filter: 'grayscale(0)',
//       duration: 0.6,
//       delay: (index + 0.7) * 4,
//       onComplete: () => {
//         // Коли анімація завершена для останнього елемента, ми викликаємо функцію знову для початку анімації
//         setTimeout(() => {
//           gsap.to(item, {
//             filter: 'grayscale(1)', // Повертаємо фільтр на 1 (застосовуємо чорно-білий ефект)
//             duration: 0.6, // Тривалість анімації - 1 секунда
//           });
//         }, 2000);
//         if (index === gsap.utils.toArray('.partner-item').length - 1) {
//           animateItems();
//         }
//       },
//     });
//   });
// }
// animateItems();

const heroTl = gsap.timeline();
const expTl = gsap.timeline();
heroTl
  .from('.logo-img', {
    yPercent: -175,
    opacity: 0,
    duration: 1.2,
  })
  .from('.logo-text', {
    yPercent: -175,
    opacity: 0,
    duration: 1.2,
    delay: -0.7,
  })
  .from('.nav-item', {
    opacity: 0,
    xPercent: 100,
    stagger: 0.2,
    // delay: 0.7,
    duration: 0.9,
  });
// .from('.hero-title', { duration: 2, text: ' Компанія AGROTEP', delay: 0.5 });
// gsap.from('.hero-title', { duration: 2.2, text: 'AGROTEP', delay: 1.8 });
gsap.from('.history-text', {
  scrollTrigger: {
    trigger: '.history',
    start: 'center bottom',
  },
  xPercent: 120,
  duration: 1.2,
  opacity: 0,
});

gsap.from('.exp-bg-text', {
  scrollTrigger: {
    trigger: '.exp-bg',
    // markers: true,
    start: 'center bottom',
  },
  xPercent: -275,
  duration: 0.8,
  stagger: 0.6,
  // opacity: 0,
});
gsap.from('.exp-3d', {
  scrollTrigger: {
    trigger: '.exp-bg',
    start: 'bottom bottom',
  },
  xPercent: 270,
  duration: 1,
  delay: 1.6,
  stagger: 0.8,
  // opacity: 0,
  // ease: 'power1.in',
});

let lastScrollTop = 0;

window.addEventListener(
  'scroll',
  function () {
    let currentScroll = window.scrollY;

    if (currentScroll < 200) {
      document.querySelector('.header').classList.remove('hidden');
      return; // Вийдіть з функції, якщо перші 100 пікселів
    }
    if (currentScroll > lastScrollTop) {
      // Scroll down
      document.querySelector('header').classList.add('hidden');
    } else {
      // Scroll up
      document.querySelector('header').classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  },
  false
);
