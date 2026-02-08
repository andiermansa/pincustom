function loadMockup(event){
  const preview = document.getElementById("designPreview");

  if(!event.target.files[0]) return;

  preview.src = URL.createObjectURL(event.target.files[0]);
}
