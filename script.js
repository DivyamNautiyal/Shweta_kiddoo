document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  setupPageTransitions();
  setupReasonHearts();
  setupEnvelope();
  setupMusicToggle();
});

function setupPageTransitions() {
  const links = document.querySelectorAll(".page-link");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href || href.startsWith("#")) {
        return;
      }

      event.preventDefault();
      document.body.classList.add("fade-out");

      window.setTimeout(() => {
        window.location.href = href;
      }, 360);
    });
  });
}

function setupReasonHearts() {
  const hearts = document.querySelectorAll(".reason-heart");
  const message = document.querySelector(".revealed-message");

  if (!hearts.length || !message) {
    return;
  }

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      hearts.forEach((item) => item.classList.remove("active"));
      heart.classList.add("active");
      message.textContent = heart.dataset.message;
    });
  });
}

function setupEnvelope() {
  const envelope = document.querySelector(".envelope");
  const surprise = document.querySelector(".surprise-message");

  if (!envelope || !surprise) {
    return;
  }

  envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
    surprise.classList.toggle("show");
  });
}

function setupMusicToggle() {
  const button = document.querySelector(".music-toggle");
  const audio = document.querySelector("#bgMusic");

  if (!button || !audio) {
    return;
  }

  button.classList.add("paused");

  button.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        button.classList.remove("paused");
      } catch {
        button.classList.add("paused");
      }
    } else {
      audio.pause();
      button.classList.add("paused");
    }
  });
}