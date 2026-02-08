function loadMockup(event) {
  const img = document.getElementById("designPreview");
  const file = event.target.files[0];

  if (!file) return;

  img.src = URL.createObjectURL(file);
  img.style.display = "block";
}

function changeProduct() {
  const type = document.getElementById("productType").value;
  const mockup = document.getElementById("mockup");
  const ring = document.getElementById("ring");
  const img = document.getElementById("designPreview");

  if (type === "pin") {
    mockup.className = "mockup pin";
    img.style.borderRadius = "50%";
    ring.style.display = "none";
  }

  if (type === "keychain") {
    mockup.className = "mockup pin";
    img.style.borderRadius = "50%";
    ring.style.display = "block";
  }
}8
