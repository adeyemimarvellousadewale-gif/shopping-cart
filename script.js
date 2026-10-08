
let cart = [];

function addItem() {

  if (userInput.value.trim() == "") {

    alert("input should not be empty");

  } else {

    cart.push(userInput.value);

    userInput.value = "";

    displayItems();

  }

}


function displayItems() {

  document.getElementById("display").innerHTML = "";

  for (let index = 0; index < cart.length; index++) {

    const element = cart[index];

    document.getElementById("display").innerHTML += `

      <div class="cart-item">

        <p>
          ${index + 1}. ${element}
        </p>

        <button
          class="btn btn-danger"
          onclick="deleteItem(${index})">
          Delete
        </button>

      </div>

    `;
  }

}


function deleteItem(del) {

  cart.splice(del, 1);

  displayItems();

}


function deleteLast() {

  cart.pop();

  displayItems();

}


function deleteAllItems() {

  if (cart.length < 1) {

    alert("There is no item to delete");

  } else {

    let check = confirm("Are you sure you want to delete?");

    if (check == true) {

      cart.splice(0, cart.length);

      displayItems();

    }

  }

}

