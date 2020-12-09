$(".sort-by-item").each(function (index, sortToggler) {
  $(this).on("input", function () {
    //variables
    const sortBy = $(this).val();
    const tableRows = $("thead")[index].querySelectorAll("th");
    let sortByIndex = -1;
    let sortData = $("tbody")[index].querySelectorAll("tr");

    //get index to sort
    if (sortBy == "id") {
      sortByIndex = 0;
    } 
    else {
      for (var i = 1; i < tableRows.length; i++) {
        if (sortBy == tableRows[i].innerText){
          sortByIndex = i;
        }
      }
    }

    //interchange sort
    if (sortByIndex == -1){
      return;
    }

    let dataQuantity = sortData.length;
    if($("tbody")[index].getAttribute("hasSumary") == "true"){
      dataQuantity--;
    }

    // let test = [];
    // for (var i = 0; i < dataQuantity; i++){
    //   test.push(parseFloat(sortData[i].children[sortByIndex].innerText));
    // }

    // console.log(test);

    // for (var i = 0; i < dataQuantity - 1; i++){
    //   for (var j = i+1; j < dataQuantity; j++){
    //     if(test[i] > test[j])
    //     {
    //       console.log(test[i]);
    //       console.log(i);
    //       console.log(test[j]);
    //       console.log(j);
    //       console.log("Swap");
    //       var temp = test[i];
    //       test[i] = test[j];
    //       test[j] = temp;
    //     }
    //   }
    // }

    // console.log(test);

    for (i = 0; i < dataQuantity-1; i++){
      for(var j = i + 1; j <dataQuantity; j++){
        preRowData = sortData[i].children[sortByIndex].innerText;
        folRowData = sortData[j].children[sortByIndex].innerText;
        if (!isNaN(preRowData) && !isNaN(folRowData)){
          if (sortByIndex == 0){
            if (parseFloat(preRowData) > parseFloat(folRowData)){
              var xInner = sortData[i].innerHTML;
              var yInner = sortData[j].innerHTML;
              sortData[i].innerHTML = yInner;
              sortData[j].innerHTML = xInner;
            }
          }
          else
          {
            if (parseFloat(preRowData) < parseFloat(folRowData)){
              var xInner = sortData[i].innerHTML;
              var yInner = sortData[j].innerHTML;
              sortData[i].innerHTML = yInner;
              sortData[j].innerHTML = xInner;
            }
          }
        }
        else{
          if (preRowData > folRowData){
            console.log(preRowData);
            console.log(folRowData);
            console.log("Swap");
            var xInner = sortData[i].innerHTML;
            var yInner = sortData[j].innerHTML;
            sortData[i].innerHTML = yInner;
            sortData[j].innerHTML = xInner;
          }
        }
      }
    }
  });
});
