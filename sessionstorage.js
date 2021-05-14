// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem("lastname", "Hemadri");
    // Retrieve
    document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }