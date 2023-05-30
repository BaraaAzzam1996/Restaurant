
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
    food.renderfood();
  
    document.getElementById('FoodName').value = '';
    document.getElementById('Type').value = '';
    document.getElementById('Price').value = '';
  }

  let foodForm = document.getElementById('foodForm');
  foodForm.addEventListener('submit', handle);
    

  FoodGenerator.prototype.renderfood = function() {
    let body = document.getElementById('tableBody');
    let row = document.createElement("tr");
    let id = document.createElement("td");
    id.textContent = this.Foodid;
    row.appendChild(id);
    let name = document.createElement("td");
    name.textContent = this.foodName;
    row.appendChild(name);
    let type = document.createElement("td");
    type.textContent = this.Type;
    row.appendChild(type);
    let price = document.createElement("td");
    price.textContent = this.Price + " JD";
    row.appendChild(price);
    body.appendChild(row);
  };
    
    



