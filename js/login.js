const btn_move = document.getElementById("btn-move");
const login_login = document.querySelector(".login");
const login_reg = document.querySelector(".reg");

document.querySelector(".btn-register").addEventListener("click", () => {
  btn_move.style.left = "110px";
  login_reg.style.left = "0";
  login_login.style.left = "-400px";
});
document.querySelector(".btn-login").addEventListener("click", () => {
  btn_move.style.left = "0px";
  login_reg.style.left = "380px";
  login_login.style.left = "0px";
});
