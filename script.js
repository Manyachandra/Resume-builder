document.querySelectorAll("#name, #email, #phone, #summary").forEach(input => {
  input.addEventListener("input", updatePreview);
});
document.querySelectorAll(".skill").forEach(checkbox => {
  checkbox.addEventListener("change", updatePreview);
});
document.querySelectorAll(".education, .experience").forEach(field => {
  field.addEventListener("input", updatePreview);
});

function updatePreview() {
  document.getElementById("preview-name").textContent = document.getElementById("name").value;
  document.getElementById("preview-email").textContent = document.getElementById("email").value;
  document.getElementById("preview-phone").textContent = document.getElementById("phone").value;
  document.getElementById("preview-summary").textContent = document.getElementById("summary").value;

  // Education
  const eduList = document.getElementById("preview-education");
  eduList.innerHTML = "";
  document.querySelectorAll(".education").forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.textContent = input.value;
      eduList.appendChild(li);
    }
  });

  // Experience
  const expList = document.getElementById("preview-experience");
  expList.innerHTML = "";
  document.querySelectorAll(".experience").forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.textContent = input.value;
      expList.appendChild(li);
    }
  });

  // Skills
  const skills = [...document.querySelectorAll(".skill:checked")].map(cb => cb.value);
  document.getElementById("preview-skills").textContent = skills.join(", ");

  // Progress
  updateProgressBar();
}

function addEducation() {
  const newEdu = document.createElement("input");
  newEdu.type = "text";
  newEdu.placeholder = "Degree, Year";
  newEdu.className = "education";
  newEdu.addEventListener("input", updatePreview);
  document.getElementById("education-section").appendChild(newEdu);
  updatePreview();
}

function addExperience() {
  const newExp = document.createElement("input");
  newExp.type = "text";
  newExp.placeholder = "Role, Company";
  newExp.className = "experience";
  newExp.addEventListener("input", updatePreview);
  document.getElementById("experience-section").appendChild(newExp);
  updatePreview();
}

function clearForm() {
  document.getElementById("resume-form").reset();
  updatePreview();
  document.getElementById("preview-education").innerHTML = "";
  document.getElementById("preview-experience").innerHTML = "";
  document.getElementById("preview-skills").textContent = "";
}

function updateProgressBar() {
  const totalFields = document.querySelectorAll("#resume-form input, #resume-form textarea").length;
  const filledFields = [...document.querySelectorAll("#resume-form input, #resume-form textarea")]
    .filter(el => el.value.trim()).length;
  const percent = (filledFields / totalFields) * 100;
  document.getElementById("progress-bar").style.width = `${percent}%`;
}

function downloadPDF() {
  window.print(); // Basic version
  // Advanced: Use html2pdf.js or jsPDF for better formatting
}
