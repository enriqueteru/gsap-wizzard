document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".item");
  const viewportHeight = document.documentElement.clientHeight;

  function animateItem(item) {
    const itemRect = item.getBoundingClientRect();
    const targetY = (itemRect.top - viewportHeight);
    gsap.to(item, {
      duration: 0.5,
      y: targetY,
      ease: "power2.out"
    });
  }

  items.forEach((item, index) => {
    const delay = index * 0.1;
    gsap.to(item, {
      delay: delay,
      onComplete: () => animateItem(item)
    });
  });
});

  