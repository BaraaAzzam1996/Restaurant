
'use strict';

function FoodGenerator(id,Name, type, price) {
  this.Foodid =id;
  this.foodName = Name;
  this.Type = type;
  this.Price = price;
}

function generateId() {
  let Id= Math.floor(Math.random() * 9000) + 1000;
  return Id ;
}
function handle(e) { 
    e.preventDefault();
    let foodName = document.getElementById('FoodName').value;
    let foodType = document.getElementById('Type').value;
    let price = document.getElementById('Price').value;
  
    let food = new FoodGenerator (generateId(), foodName, foodType, price);
    food.renderfood()
  
    document.getElementById('FoodName').value = '';
    document.getElementById('Type').value = '';
    document.getElementById('Price').value = '';
  }

    

    
    
let foodForm = document.getElementById('foodForm');
foodForm.addEventListener('submit', handle);




FoodGenerator.prototype.renderfood = function() {
  let body = document.getElementById('tableBody');
  let tablerow = document.createElement("tr");
  let idcell = document.createElement("td");
  idcell.textContent = this.Foodid;
  tablerow.appendChild(idcell);
  let namecell = document.createElement("td");
  namecell.textContent = this.foodName;
  tablerow.appendChild(namecell);
  let typecell = document.createElement("td");
  typecell.textContent = this.Type;
  tablerow.appendChild(typecell);
  let pricecell = document.createElement("td");
  pricecell.textContent = this.Price + " JD";
  tablerow.appendChild(pricecell);
  body.appendChild(tablerow);
};