var contactId = 1;
var isUpdateMode = false;
var updatedId;

function addContact(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    var tableRef = document.getElementsByTagName("table")[0].getElementsByTagName('tbody')[0];
    if (isUpdateMode) {
        var updatedRow = document.getElementById("row" + updatedId)
        var c = updatedRow.getElementsByTagName("td");
        for (var i = 0; i < 4; i++) {
            var c = updatedRow.getElementsByTagName("td")[i];
            if (i == 0) {
                c.innerHTML = name;
            } else if (i == 1) {
                c.innerHTML = email;
            } else if (i == 2) {
                c.innerHTML = phone;
            }
        }
    } else {
        var newRow = tableRef.insertRow();
        newRow.setAttribute("id", "row" + contactId);
        for (var i = 0; i < 4; i++) {
            var newCell = newRow.insertCell(i);

            if (i == 0) {
                var newText = document.createTextNode(name);
                newCell.appendChild(newText);
            } else if (i == 1) {
                var newText = document.createTextNode(email);
                newCell.appendChild(newText);
            } else if (i == 2) {
                var newText = document.createTextNode(phone);
                newCell.appendChild(newText);
            } else if (i == 3) {
                var deleteBtn = document.createElement("BUTTON");
                deleteBtn.innerHTML = "delete";
                deleteBtn.setAttribute("id", contactId);
                newCell.appendChild(deleteBtn);
                document.getElementById(contactId).onclick = delete_click;

                var updateBtn = document.createElement("BUTTON");
                updateBtn.innerHTML = "update";
                updateBtn.setAttribute("id", "update" + contactId);
                newCell.appendChild(updateBtn);
                document.getElementById("update" + contactId).onclick = update_click;
            }
        }
        contactId++;
    }

}
var submit = document.getElementById("submit");
submit.addEventListener("click", addContact);

var delete_click = function() {
    var cuId = this.id;
    alert("Button clicked, id " + cuId);
    var row = document.getElementById("row" + cuId);
    row.parentNode.removeChild(row);
}
var update_click = function() {
    var cuId = this.id.replace("update", "");
    updatedId = cuId;
    alert("Button clicked, id " + cuId);
    var row = document.getElementById("row" + cuId);
    var nameInp = row.cells[0].innerHTML;
    var emailInp = row.cells[1].innerHTML;
    var phoneInp = row.cells[2].innerHTML;

    var name = document.getElementById("name");
    name.value = nameInp;
    var phone = document.getElementById("phone");
    phone.value = phoneInp;
    var email = document.getElementById("email");
    email.value = emailInp;
    isUpdateMode = true;
}