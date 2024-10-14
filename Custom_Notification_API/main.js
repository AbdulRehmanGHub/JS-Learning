let inputField = document.querySelector("input");

function notify() {
  // console.log(inputField);
  Notification.requestPermission().then(function (results) {
    if (results === "granted") {
      popupNotif();      
    } else {
      console.log("Permission denied");
    }
  });
}

function popupNotif() {
  const notification = new Notification("New Notification", {
    body: inputField.value || "This is a default message.",
  });  

  notification.onclick = function () {
    console.log("Notificaiton clicked");
  };
}
