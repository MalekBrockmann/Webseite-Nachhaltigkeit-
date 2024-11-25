// script.js
const scroller = scrollama();

// Setup Scrollama
scroller
  .setup({
    step: ".step", // Elemente, die überwacht werden
    offset: 0.5,   // Triggerpunkt (50% des Viewports)
    debug: true    // Debug-Modus für visuelles Feedback
  })
  .onStepEnter((response) => {
    // Füge die Klasse "active" beim Eintreten hinzu
    const element = response.element;
    element.classList.add("active");
  })
  .onStepExit((response) => {
    // Entferne die Klasse "active", wenn der Schritt verlassen wird
    const element = response.element;
    element.classList.remove("active");
  });

// Responsive Verhalten
window.addEventListener("resize", scroller.resize);
