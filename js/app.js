document.querySelector(".hambeger").addEventListener("click", () => {
  const show_hambeger = document.querySelector(".navmobi");
  show_hambeger.style.display = "block";
});

document.querySelector(".hid").addEventListener("click", () => {
  const hidden_hambeger = document.querySelector(".navmobi");
  hidden_hambeger.style.display = "none";
});

document.querySelector(".calls").addEventListener("click", () => {
  const social_insta = document.querySelector(".instagram");
  const soccial_teleg = document.querySelector(".telegram");
  const social_whats = document.querySelector(".whatsapp");

  if (
    social_insta.style.bottom == "10px" &&
    soccial_teleg.style.bottom == "10px" &&
    social_whats.style.bottom == "10px"
  ) {
    social_insta.style.bottom = "50px";
    soccial_teleg.style.bottom = "82px";
    social_whats.style.bottom = "115px";
  } else {
    social_insta.style.bottom = "10px";
    soccial_teleg.style.bottom = "10px";
    social_whats.style.bottom = "10px";
  }
});
