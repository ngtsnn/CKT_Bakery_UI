$("#admin-login").on("submit", (event) => {
  event.preventDefault();
  if ($("#username").val() != "admin" || $("#password").val() != "admin") {
    if ($(".fail").attr("class").indexOf("d-none") != -1) {
      $(".fail").addClass("d-none");
      $(".fail").addClass("d-block");
    }
  }
  else{
    if (!window.sessionStorage.getItem('signed')){
        window.sessionStorage.setItem('signed', true)
    }
    window.location.href = './dashboard.html'
  }
});
