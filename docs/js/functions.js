/*--- sp_menu ---*/
$(function () {
  $(".sp-menu").click(function () {
    $(this).toggleClass("active");
    $(".nav-box").stop().slideToggle();
  });

  $(".nav-box a").click(function () {
    if (window.matchMedia("(max-width: 1100px)").matches) {
      $(".sp-menu").removeClass("active");
      $(".nav-box").stop().slideUp();
    }
  });
});

/*--- gotop top-header linerin ---*/
$(function () {
  $(".for-top").hide();

  $(window).on("load scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".for-top").fadeIn("fast");
    } else {
      $(".for-top").fadeOut("fast");
    }

    function window_check() {
      var w = $(window).width();
      var x = 768;
      var z = w >= x ? true : false;
      return z;
    }
  });
});

// slider
$(function () {
  $(".slider_works").slick({
    slidesToScroll: 1,
    slidesToShow: 5,
    centerMode: true,
    infinite: true,
    arrows: true,
    prevArrow: `<span class="slick-prev slick-arrow"><img src="./img/top/works/arrow-left.png" alt="products" /></span>`,
    nextArrow: `<span class="slick-next slick-arrow"><img src="./img/top/works/arrow-right.png" alt="products" /></span>`,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});

$(function () {
  // === Split text for character animation ===
  document.querySelectorAll(".animate-chars").forEach((el) => {
    const text = el.innerText;
    el.innerHTML = text
      .split("")
      .map((char, i) => `<span style="transition-delay:${i * 50}ms">${char}</span>`)
      .join("");
  });

  // === IntersectionObserver for general animations (one-time only) ===
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // ✅ only once
        }
      });
    },
    { threshold: 0.3 }
  );

  // Observe text and block animations
  document.querySelectorAll(".animate-chars, .animate-text, .animate-left, .animate-right, .animate-bottom, .animate-bottom-2").forEach((el) => observer.observe(el));

  // === IntersectionObserver for dates (immediate animation) ===
  const chartObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          chartObserver.unobserve(entry.target); // ✅ only once
        }
      });
    },
    { threshold: 0 }
  );

  document.querySelectorAll(".animate-date").forEach((el) => chartObserver.observe(el));
});

// global js mouse stalker
$(function () {
  const cursor = document.getElementById("custom-cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.classList.remove("is-hide");
  });

  document.addEventListener("mouseleave", () => {
    cursor.classList.add("is-hide");
  });

  document.body.addEventListener("pointerover", (e) => {
    const el = e.target.closest("a, .slick-next, .slick-prev");
    if (el) cursor.classList.add("link-hover");
  });
  document.body.addEventListener("pointerout", (e) => {
    const el = e.target.closest("a, .slick-next, .slick-prev");
    if (el) cursor.classList.remove("link-hover");
  });
});

//modal
$(function () {

  const modal = $("#imageModal");
  const modalImg = $("#modalImg");

  // Open modal when image is clicked
  $(".img_box img").on("click", function () {
    modal.fadeIn(200);
    modalImg.attr("src", $(this).attr("src"));
  });

  // Close when clicking X
  $(".close-btn").on("click", function () {
    modal.fadeOut(200);
  });

  // Close when clicking outside image
  modal.on("click", function (e) {
    if ($(e.target).is("#imageModal")) {
      modal.fadeOut(200);
    }
  });

});

//sticky scroll
$(function () {
  const stickySection = document.querySelector('.sticky-section');
  const stickyPanels  = document.querySelectorAll('.sticky-panel');

  window.addEventListener('scroll', () => {
    const relScroll = window.scrollY - stickySection.offsetTop;
    const step = Math.min(stickyPanels.length - 1, Math.max(0, Math.floor(relScroll / window.innerHeight)));

    stickyPanels.forEach((p, i) => {
      p.classList.toggle('active', i === step);
    });
  }, { passive: true });
});