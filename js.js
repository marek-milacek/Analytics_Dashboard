let fps = 0;
let lastTime = performance.now();

function countFPS() {
  fps++;
  let now = performance.now();
  if (now >= lastTime + 1000) {
    console.log(`FPS: ${fps}`);
    fps = 0;
    lastTime = now;
  }
  requestAnimationFrame(countFPS);
}
countFPS();

function measureLayout() {
  const start = performance.now();
  document.querySelectorAll('.stat-card').forEach(card => {
    card.offsetHeight; // přinutí layout
  });
  console.log(`Layout duration: ${performance.now() - start} ms`);
}
measureLayout();