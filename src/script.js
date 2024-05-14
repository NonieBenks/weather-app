function buildHomePage() {
  const container = document.createElement("div");
  const header = document.createElement("h3");

  header.textContent = "Welcome";

  container.appendChild(header);
  document.body.appendChild(container);
}

buildHomePage();
