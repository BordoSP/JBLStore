function sendDataToServer() {
            var data = {};
            var successForm = document.getElementById("form-success");
            data.name = document.getElementById("applicationName").value;
            data.email = document.getElementById("applicationEmail").value;
            data.telephone = document.getElementById("applicationTelephone").value;
            
            var fullData = JSON.stringify(data);
            
            var XMR = new XMLHttpRequest();
            XMR.open("POST", "index.js", true);
            XMR.send(fullData);
            successForm.style.display = "block";
        }

var formBtnClose = document.getElementById("okay");
var successForm = document.getElementById("form-success");

formBtnClose.onclick = function() {
    successForm.style.display = "none";
}