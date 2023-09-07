AOS.init();

const myLink = document.getElementById("myLink");

myLink.addEventListener("click", function (e) {
  e.preventDefault();
  const email = myLink.getAttribute("href").substr(7);
  alert("Đã copy email ");
});
