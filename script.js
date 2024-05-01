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




// TRANSITION BETWEEN TECH AND BUSINESS
  window.onload = function() {
    const wordElement = document.getElementById('tech');
    const words = ['Tech', 'Business'];
    let currentIndex = 0;
  
    function toggleWord() {
      wordElement.classList.add('hide'); // Apply hide class to fade out
      setTimeout(function() {
        wordElement.textContent = words[currentIndex];
        wordElement.classList.remove('hide'); // Remove hide class to fade in
        currentIndex = (currentIndex + 1) % words.length;
      }, 500); // Wait for the fade out transition to complete (500ms)
    }
  
    setInterval(toggleWord, 3000); // Change word every 3 seconds
  };
  
  



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