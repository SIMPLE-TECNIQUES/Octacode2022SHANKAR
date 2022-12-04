const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
 body.classList.remove("disabled");
 cancelBtn.onclick = ()=>{
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 2 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


// theme
var theme=document.getElementById("theme");
theme.onclick=function()
  {document.body.classList.toggle("dark-theme");}
