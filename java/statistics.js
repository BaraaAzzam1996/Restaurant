'use strict'

function renderFromlocal() {
    let jasonArraynew = window.localStorage.getItem("food")
    let renderArray = JSON.parse(jasonArraynew);
    for (let i = 0; i < renderArray.length; i++) {
        
        let body = document.getElementById("tableBody");
        let row = document.createElement("tr");
        let id = document.createElement("td");
        id.textContent = renderArray[i].Foodid
        row.appendChild(id);
        let name = document.createElement("td");
        name.textContent = renderArray[i].foodName;
        row.appendChild(name);
        let type = document.createElement("td");
        type.textContent = renderArray[i].Type;
        row.appendChild(type);
        let price = document.createElement("td");
        price.textContent = renderArray[i].Price + " JD";
        row.appendChild(price);
        body.appendChild(row);

    }

}
renderFromlocal();