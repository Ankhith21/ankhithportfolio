document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.querySelector("a[href^='mailto:']");
  if (emailLink) {
    emailLink.addEventListener("click", function () {
      alert("Opening email app...");
    });
  }
});
