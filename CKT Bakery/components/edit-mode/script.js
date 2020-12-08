$(".add").on("click", () => {
  sessionStorage.setItem("editMode", "add");
});

$(".edit").each(function(index, editBtn) {
  $(this).on("click", () => {
    sessionStorage.setItem("editMode", "edit");
    sessionStorage.setItem("idEditing", $(this).parent().parent().children()[0].innerText);
  });
})

$(".delete").each(function (index, delBtn) {
  $(this).on("click", function () {
    $(this).parent().parent().fadeOut(500);
    setTimeout(() => {
      //update database here
      console.log($(this).parent().parent().children()[0].innerText)
      //end update database
      $(this).parent().parent().remove();
    }, 500);
  });
});
