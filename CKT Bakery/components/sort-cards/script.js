$(".sort-by-item").each(function (index, sorter) {
  $(this).on("input", function (event) {
    const dataContainer = $($(this).attr("data-target"));
    const data = dataContainer.children();
    const comparison = $(this).val();

    for (var i = 0; i < data.length - 1; i++) {
      for (var j = i + 1; j < data.length; j++) {
        iValue = data[i].querySelector("." + comparison).innerText;
        jValue = data[j].querySelector("." + comparison).innerText;
        if (!isNaN(iValue) && !isNaN(jValue)) {
          iValue = parseFloat(iValue);
          jValue = parseFloat(jValue);
        }

        if (iValue > jValue) {
          iInner = data[i].innerHTML;
          jInner = data[j].innerHTML;
          data[i].innerHTML = jInner;
          data[j].innerHTML = iInner;
        }
      }
    }
  });
});


if($("#double-range-slider")[0]){
  $("#double-range-slider").children().on("change", function(event){
    const minVal = parseFloat($("#double-range-slider").children()[1].value);
    const maxVal = parseFloat($("#double-range-slider").children()[2].value);

    const dataContainer = $($("#double-range-slider").attr("data-target"));
    const data = dataContainer.children();

    data.each(function(index, d){
      const val = parseFloat(d.querySelector(".unit-price").innerText) * 1000;
      console.log(val);
      if (val > maxVal || val < minVal){
        if(!d.classList.contains("d-none")){
          d.classList.add("d-none");
        }
      }
      else{
        if(!d.classList.contains("d-none")){
          d.classList.remove("d-none");
        }
      }
    })
  })
}