// Update particles.js configuration for a more subtle effect
const particlesConfig = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#2563eb" },
    shape: {
      type: "circle",
      stroke: { width: 1, color: "#7c3aed" },
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#2563eb",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.6 } },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
};

// Initialize particles
particlesJS("particles-js", particlesConfig);

// Animate blockchain nodes
function animateNodes() {
  const nodes = document.querySelectorAll(".node");
  nodes.forEach((node, index) => {
    node.style.animation = `pulse 2s infinite ${index * 0.3}s`;
  });
}

// Create flowing data effect
function createFlowingData() {
  const chain = document.querySelector(".hero-chain");
  const dataPoint = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  dataPoint.setAttribute("r", "3");
  dataPoint.classList.add("data-point");

  const links = document.querySelectorAll(".link");
  links.forEach((link) => {
    const newPoint = dataPoint.cloneNode(true);
    chain.appendChild(newPoint);
    const length = link.getTotalLength();
    newPoint.style.animation = `flowData ${2}s linear infinite`;
  });
}

// Enhance form handling
document
  .getElementById("waitlist-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const form = this;
    const button = form.querySelector("button");

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwCVxvfngyURqP1Ln9_ISRDVzrCEPtf3nDkHt_bft_AWNWbjjk-aM85G9ZZ_oVOLR6n/exec";

    // Add loading state
    button.disabled = true;
    button.classList.add("loading");

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Submission failed");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error!", error.message);
        // Show user-friendly error message
        const errorMsg = document.createElement("div");
        errorMsg.classList.add("error-message");
        errorMsg.textContent =
          "Oops! Something went wrong. Please try again later.";
        form.appendChild(errorMsg);
        setTimeout(() => errorMsg.remove(), 5000); 
      });

    // Simulate form submission
    setTimeout(() => {
      // Create success animation
      const ripple = document.createElement("div");
      ripple.classList.add("success-ripple");
      button.appendChild(ripple);

      // Reset form state
      setTimeout(() => {
        button.disabled = false;
        button.classList.remove("loading");
        ripple.remove();

        // Show success message
        const successMsg = document.createElement("div");
        successMsg.classList.add("success-message");
        successMsg.textContent =
          "You're on the list! Welcome to the future of education.";
        form.appendChild(successMsg);

        // Reset form
        form.reset();

        // Remove success message after delay
        setTimeout(() => successMsg.remove(), 3000);
      }, 1000);
    }, 1500);
  });

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  animateNodes();
  createFlowingData();

  // Add smooth scroll for any anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
