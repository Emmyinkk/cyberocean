function openNav() {
    const menuBar = document.querySelector('.hidden-menu');
    let hiddenNav = document.querySelector('.hidden-container');
    
    if((menuBar.classList.contains('open')) === false) {
    menuBar.classList.add('open');
    hiddenNav.style.animationName = 'slideInFromTop';
    // setTimeout(function() {
    //   hiddenNav.classList.add('showed');
    // }, 20)
    } else {
    hiddenNav.style.animationName = 'slideOutToTop';
    setTimeout(function() {
        menuBar.classList.remove('open');
    },320)
        
    }
}


window.onload = function() {
    const buttons = document.querySelectorAll('.tab');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const currentButton = document.querySelector('.showing');
        currentButton.classList.remove('showing');
        button.classList.add('showing');
      });
    });
  };  


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.fade');
hiddenElements.forEach((el) => observer.observe(el));



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