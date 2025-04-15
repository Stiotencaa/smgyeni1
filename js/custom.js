let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Aşağı scroll
    navbar.classList.add('visible');
  } else if (currentScroll < 100) {
    // Yukarı scroll ve sayfa tepesine yakın
    navbar.classList.remove('visible');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Navbar scroll behavior
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
});

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.project_carousel').owlCarousel({
    loop: false,
    margin: 15,
    center: true,
    startPosition: 2,
    autoplay: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        769: {
            items: 2,
        },
        992: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Sayfa yüklendiğinde animasyonları başlat
window.addEventListener('load', function() {
  // Logo animasyonunu başlat
  setTimeout(() => {
    document.querySelector('.logo-container').classList.add('animate');
  }, 500);

  // Welcome text animasyonunu başlat
  setTimeout(() => {
    document.querySelector('.welcome-text').classList.add('animate');
  }, 2000);

  // Discover button animasyonunu başlat
  setTimeout(() => {
    document.querySelector('.discover-btn').classList.add('animate');
  }, 3000);
});

// Scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('section');
    
    animateElements.forEach(element => {
        element.classList.add('animate-on-scroll');
    });

    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.9) {
                element.classList.add('visible');
            }
        });
    }

    // Initial check
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Read more functionality
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const fullText = document.getElementById('fullText');
    
    if (readMoreBtn && fullText) {
        readMoreBtn.addEventListener('click', function() {
            if (fullText.style.display === 'none' || !fullText.style.display) {
                fullText.style.display = 'block';
                readMoreBtn.textContent = 'Daha Az Göster';
                fullText.style.opacity = '0';
                setTimeout(() => {
                    fullText.style.opacity = '1';
                }, 10);
            } else {
                fullText.style.display = 'none';
                readMoreBtn.textContent = 'Devamını Oku';
            }
        });
    }
});

// Mobile Navigation Toggle
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.navbar')) {
        document.querySelector('.nav-links').classList.remove('active');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
    });
});