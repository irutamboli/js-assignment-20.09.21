function findFirstUnique(arr) {
    debugger;
    let occurenceArr = arr.map(item => arr.filter(val => val == item).length);
    return occurenceArr && arr[occurenceArr.indexOf(1)] ? arr[occurenceArr.indexOf(1)]  : "null";
  }
  
  function buttonClick() {
    var arr = document.getElementById("enter-array").value;
    if (arr) {
      //remove starting [ or ] in the entered values on first or last place
      arr = arr.split(",");
      if (arr[0].includes("[")) {
        arr[0] = arr[0].slice(1);
      }
      if (arr[arr.length - 1].includes("]")) {
        arr[arr.length - 1] = arr[arr.length - 1].slice(0, -1);
      }
      
      document.getElementById("result").innerHTML = findFirstUnique(arr);
    }
  }
  