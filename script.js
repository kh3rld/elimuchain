// Update particles.js configuration
const particlesConfig = {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#0ea5e9" },
    shape: { 
      type: "circle",
      stroke: { width: 1, color: "#10b981" },
    },
    opacity: { 
      value: 0.3,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#0ea5e9",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.6 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
};

// Initialize particles
particlesJS('particles-js', particlesConfig);

// Animate blockchain nodes
function animateNodes() {
  const nodes = document.querySelectorAll('.node');
  nodes.forEach((node, index) => {
    node.style.animation = `pulse 2s infinite ${index * 0.3}s`;
  });
}

// Create flowing data effect
function createFlowingData() {
  const chain = document.querySelector('.hero-chain');
  const dataPoint = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dataPoint.setAttribute("r", "3");
  dataPoint.classList.add('data-point');
  
  const links = document.querySelectorAll('.link');
  links.forEach(link => {
    const newPoint = dataPoint.cloneNode(true);
    chain.appendChild(newPoint);
    const length = link.getTotalLength();
    newPoint.style.animation = `flowData ${2}s linear infinite`;
  });
}

// Enhanced form handling with animation and validation
document.getElementById('support-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const message = document.getElementById('support-message');
  const type = document.getElementById('support-type');
  const button = this.querySelector('button');
  
  if (!message.value.trim()) {
    // Shake animation for invalid input
    message.classList.add('shake');
    setTimeout(() => message.classList.remove('shake'), 500);
    return;
  }
  
  // Add loading state
  button.disabled = true;
  button.classList.add('loading');
  
  // Simulate form submission
  setTimeout(() => {
    // Create success ripple
    const ripple = document.createElement('div');
    ripple.classList.add('success-ripple');
    button.appendChild(ripple);
    
    // Reset form state
    setTimeout(() => {
      button.disabled = false;
      button.classList.remove('loading');
      ripple.remove();
      
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.classList.add('success-message');
      successMsg.textContent = 'Thank you for joining the ElimuChain revolution!';
      this.appendChild(successMsg);
      
      // Reset form
      message.value = '';
      type.selectedIndex = 0;
      
      // Remove success message after delay
      setTimeout(() => successMsg.remove(), 3000);
    }, 1000);
  }, 1500);
});

// Add loading animation to form button
const formButton = document.querySelector('.support-section button');
formButton.innerHTML += `
  <svg class="loading-circle" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" />
  </svg>
`;

// Enhanced demo interaction
document.getElementById('demo-button')?.addEventListener('click', function() {
  
});

// Improved testimonial carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function rotateTestimonials() {
  testimonials[currentTestimonial].classList.remove('active');
  testimonials[currentTestimonial].classList.add('fade-out');
  
  setTimeout(() => {
    testimonials[currentTestimonial].classList.remove('fade-out');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active', 'fade-in');
    
    setTimeout(() => {
      testimonials[currentTestimonial].classList.remove('fade-in');
    }, 500);
  }, 500);
}

setInterval(rotateTestimonials, 5000);

// Add hover effects for team members
document.querySelectorAll('.team-member').forEach(member => {
  member.addEventListener('mouseenter', () => {
    member.style.transform = 'translateY(-10px)';
    member.style.boxShadow = '0 10px 30px rgba(0, 229, 255, 0.2)';
  });
  
  member.addEventListener('mouseleave', () => {
    member.style.transform = 'translateY(0)';
    member.style.boxShadow = 'none';
  });
});

// Enhanced form interactions
const form = document.querySelector('.neo-form');
const inputs = form.querySelectorAll('.neo-input, .neo-select');

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('focused');
  });
  
  input.addEventListener('blur', () => {
    if (!input.value) {
      input.parentElement.classList.remove('focused');
    }
  });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize animations on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.fade-in-element');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  animateNodes();
  createFlowingData();
});