// POPUP PROJECT USING JAVASCRIPT

/*

I'm a full stack developer using Mern-stack but a prefer Front-end ,i've gained skills through working of different projects 
and internship at SOLVIT AFRICA and  i also use Javascript,PHP ,Bootstrap and Firebase. 
I enjoy collaborating with team members as well as delivering the task given on time also i'm very passionate in codding

*/
const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const closeWrapper = document.querySelector(".popup-close");
button.addEventListener("click", () => {
  popup.style.display = "block";
});
closeWrapper.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});
