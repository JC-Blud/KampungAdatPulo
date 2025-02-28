// efek typing gerak
const typingText = document.querySelector(".bawah");
const text = typingText?.textContent || "";
typingText.textContent = "";
let i = 0;
const typeEffect = () => i < text.length && (typingText.textContent += text[i++], setTimeout(typeEffect, 50));
document.addEventListener("DOMContentLoaded", typeEffect);

// biru2 diatas
const progressBar = Object.assign(document.createElement("div"), {
  style: "position:fixed;top:0;left:0;height:5px;background-color:#00a2c6;width:0%;z-index:9999;"
});
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  progressBar.style.width = `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`;
});


// Scroll to top button
const scrollTopButton = Object.assign(document.createElement("button"), {
  textContent: "↑",
  style: "position:fixed;bottom:20px;right:20px;padding:10px 15px;font-size:20px;border:none;border-radius:50%;background-color:#00a2c6;color:white;cursor:pointer;display:none;z-index:9999;"
});
document.body.appendChild(scrollTopButton);

window.addEventListener("scroll", () => {
  scrollTopButton.style.display = window.scrollY > 200 ? "block" : "none";
});
scrollTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

darkModeToggle.style.bottom = "60px"; 