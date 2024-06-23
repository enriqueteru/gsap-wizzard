document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  gsap.to(loader, {
    duration: 2,
    innerText: 100,
    snap: { innerText: 1 },
    ease: "none",
    onUpdate: function () {
      loader.innerText = `${Math.round(this.targets()[0].innerText)}%`;
    },
    onComplete: () => {
      gsap.to(loader, {
        duration: .5,
        opacity: 0,
        onComplete: () => loader.remove()
      });
    },
  });
});
