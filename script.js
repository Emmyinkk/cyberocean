// FOR THE SWITCHING OF TABS IN THE AVAILABLE SECTION
const divs = document.querySelectorAll('.tab');

  divs.forEach(div => {
    div.addEventListener('click', function() {
      // Remove the "showing" class from all divs
      divs.forEach(d => d.classList.remove('showing'));
      
      // Add the "showing" class to the clicked div
      this.classList.add('showing');
    });
  });



// FOR OPENING AND CLOSING OF THE HIDDEN NAVBAR
function openNav() {
    const menuBar = document.querySelector('.hidden-menu');
    let hiddenNav = document.querySelector('.hidden-container');
    
    if((menuBar.classList.contains('open')) === false) {
    menuBar.classList.add('open');
    hiddenNav.style.animationName = 'slideInFromTop';
    } else {
    hiddenNav.style.animationName = 'slideOutToTop';
    setTimeout(function() {
        menuBar.classList.remove('open');
    },320)
        
    }
}
  
  



// OBSERVER FOR THE FADE UP ANIMATION
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.fade');
hiddenElements.forEach((el) => observer.observe(el));



// OBSERVER FOR THE FADE DOWN ANIMATION
const observerdown = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    });
});

const hiddenElementsDown = document.querySelectorAll('.fade-down');
hiddenElementsDown.forEach((el) => observer.observe(el));



// OBSERVER FOR THE FADE LEFT ANIMATION
const observedElements1 = document.querySelectorAll('.fade-left');

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    const targetElement = entry.target;

    if (entry.isIntersecting) {
        // Add or remove classes based on the intersection
        targetElement.classList.add('reveal');
    }
    });
});

observedElements1.forEach(element => {
    observer1.observe(element);
});



// OBSERVER FOR THE FADE RIGHT ANIMATION
const observedElements2 = document.querySelectorAll('.fade-right');

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    const targetElement = entry.target;

    if (entry.isIntersecting) {
        // Add or remove classes based on the intersection
        targetElement.classList.add('reveal');
    }
    });
});

observedElements2.forEach(element => {
    observer2.observe(element);
});


window.onload = function() {
  const flexContainer = document.querySelector('.pictureDisplay');
  const images = flexContainer.querySelectorAll('img');
  const scrollSpeed = 1; // Adjust the scroll speed as needed
  const totalWidth = flexContainer.scrollWidth; // Total width of all images
  let scrollPos = 0;
  let isPaused = false;
  
  function scrollImages() {
      if(!isPaused) {
          scrollPos += scrollSpeed;
          if (scrollPos >= totalWidth) {
              scrollPos = 0;
          flexContainer.scrollLeft = 0;
          } else {
              flexContainer.scrollLeft += scrollSpeed;
          }
      }
      
  }
  setInterval(scrollImages, 10); // Adjust the interval for smoother or faster scrolling

  // Pause scrolling when the cursor is over the container
  flexContainer.addEventListener('mouseenter', function() {
      isPaused = true;
  });

  // Resume scrolling when the cursor leaves the container
  flexContainer.addEventListener('mouseleave', function() {
      isPaused = false;
  });

  // Pause scrolling when there's a touch input
  flexContainer.addEventListener('touchstart', function() {
      isPaused = true;
  });

  // Resume scrolling when the touch input ends
  flexContainer.addEventListener('touchend', function() {
      isPaused = false;
  });
};


// UPDATE YEAR
let date = new Date().getFullYear();
document.getElementById("currentYear").textContent = date;