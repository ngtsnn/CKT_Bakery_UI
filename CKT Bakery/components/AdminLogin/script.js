window.sessionStorage.setItem("signed", false);

$("#admin-login").on("submit", (event) => {
  event.preventDefault();
  if ($("#username").val() != "admin" || $("#password").val() != "admin") {
    if ($(".fail").attr("class").indexOf("d-none") != -1) {
      $(".fail").removeClass("d-none");
      $(".fail").addClass("d-block");
    }
  } 
  else {
    window.sessionStorage.setItem("signed", true);
    if (window.sessionStorage.getItem("page")) {
      window.location.href = window.sessionStorage.getItem("page");
    }
    else{
      window.location.href = "./dashboard.html";
    }

  }
});
