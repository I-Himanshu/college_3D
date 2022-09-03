(function(){
    var myDiv = document.getElementById("snow_fall"),
      show = function () {
        myDiv.style.display = "block";
        setTimeout(hide, 5000); // 5 seconds
      },
      hide = function () {
        myDiv.style.display = "none";
      };

    show();
  })();

// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//     document.querySelector("body").style.visibility = "hidden";
//     document.querySelector("#snow_fall").style.visibility = "visible";
//   } else {
//     document.querySelector("#snow_fall").style.display = "none";
//     document.querySelector("body").style.visibility = "visible";
//   }
// };
