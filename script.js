document.addEventListener("DOMContentLoaded", () => {
  const heroAnimation = document.getElementById("blockchain-animation");

  function createBlockchainVisualization() {
    const nodes = [];
    const nodeCount = 20;
    const lines = [];

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement("div");
      node.classList.add("blockchain-node");
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      node.style.left = `${x}%`;
      node.style.top = `${y}%`;
      node.dataset.x = x;
      node.dataset.y = y;
      node.style.transform = "scale(0)";
      heroAnimation.appendChild(node);
      nodes.push(node);

      // Animate node appearance
      setTimeout(() => {
        node.style.transform = "scale(1)";
      }, i * 100);
    }

    // Create connecting lines with delayed animation
    setTimeout(() => {
      nodes.forEach((node, i) => {
        const nearestNodes = findNearestNodes(node, nodes, 2);
        nearestNodes.forEach((targetNode) => {
          const line = createLine(node, targetNode);
          lines.push({
            element: line,
            sourceNode: node,
            targetNode: targetNode,
          });
        });
      });
    }, nodeCount * 100);

    // Animate nodes and update lines
    function animate() {
      nodes.forEach((node) => {
        const newX = parseFloat(node.dataset.x) + (Math.random() - 0.5) * 0.5;
        const newY = parseFloat(node.dataset.y) + (Math.random() - 0.5) * 0.5;

        node.style.left = `${newX}%`;
        node.style.top = `${newY}%`;
        node.dataset.x = newX;
        node.dataset.y = newY;
      });

      lines.forEach((line) => {
        updateLine(line.element, line.sourceNode, line.targetNode);
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  // Rest of the blockchain visualization code remains the same
  function findNearestNodes(sourceNode, allNodes, count) {
    return allNodes
      .filter((node) => node !== sourceNode)
      .sort((a, b) => {
        const distA = getDistance(sourceNode, a);
        const distB = getDistance(sourceNode, b);
        return distA - distB;
      })
      .slice(0, count);
  }

  function getDistance(nodeA, nodeB) {
    const xA = parseFloat(nodeA.dataset.x);
    const yA = parseFloat(nodeA.dataset.y);
    const xB = parseFloat(nodeB.dataset.x);
    const yB = parseFloat(nodeB.dataset.y);
    return Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));
  }

  function createLine(nodeA, nodeB) {
    const line = document.createElement("div");
    line.classList.add("blockchain-line");
    updateLine(line, nodeA, nodeB);
    heroAnimation.appendChild(line);
    return line;
  }

  function updateLine(line, nodeA, nodeB) {
    const xA = parseFloat(nodeA.dataset.x);
    const yA = parseFloat(nodeA.dataset.y);
    const xB = parseFloat(nodeB.dataset.x);
    const yB = parseFloat(nodeB.dataset.y);

    const length = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));
    const angle = (Math.atan2(yB - yA, xB - xA) * 180) / Math.PI;

    line.style.width = `${length}%`;
    line.style.left = `${xA}%`;
    line.style.top = `${yA}%`;
    line.style.transform = `rotate(${angle}deg)`;
  }

  createBlockchainVisualization();

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".feature-card, .process-card").forEach((el) => {
    observer.observe(el);
  });

  // Form handling
  const newsletterForm = document.getElementById("newsletter-signup");
  newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      showNotification(
        "Thanks for subscribing to ElimuChain updates!",
        "success"
      );
      e.target.reset();
    } catch (error) {
      showNotification(
        "Oops! Something went wrong. Please try again.",
        "error"
      );
    }
  });
});

function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("fade-out");
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}
