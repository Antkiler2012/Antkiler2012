document.addEventListener("DOMContentLoaded", () => {
    // Function to animate the count-up effect
    function countUp(elementId, targetValue, duration, onComplete) {
      const element = document.getElementById(elementId);
      const increment = targetValue / (duration / 10);
      let currentValue = 0;
  
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(interval);
          if (onComplete) onComplete(); // Trigger the next action when finished
        }
        element.textContent = Math.floor(currentValue);
      }, 10);
    }
  
    // First, count up the years of experience
    countUp("years", 4, 1800, () => {
      // Once the years of experience is done, count up the projects
      countUp("projects", 6, 2000);
    });
  });
  