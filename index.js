// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

// QUESTION: What should you do first? How can you display menu items by category?

// Function to display menu items by category
function displayMenuItems(menu) {
  // QUESTION: What do you need to get from the HTML to display the menu? Find a way to reference it.
  // ANSWER: Reference the menu container by its ID "menu".
  const menuContainer = document.getElementById("menu");
  menuContainer.innerHTML = ""; // Clear any previous content

  // QUESTION: How can you loop through each category and its items in the menu object?
  // ANSWER: Use Object.entries() to loop through the key/value pairs.
  for (const [category, items] of Object.entries(menu)) {
    // QUESTION: What HTML element represents a category? Create it here.
    // ANSWER: Create an <h3> element for the category header.
    const categoryHeader = document.createElement("h3");
    // QUESTION: How can you set the text content of the category element to the category name?
    categoryHeader.textContent = category;
    // QUESTION: How can you append the category element to the menu container in the HTML?
    menuContainer.appendChild(categoryHeader);

    // QUESTION: What HTML element represents a list of items? Create it here.
    // ANSWER: Create an unordered list (<ul>) for the items.
    const ul = document.createElement("ul");

    // QUESTION: Loop through the items in the category and create list items for each one.
    items.forEach((item) => {
      // QUESTION: Create a list item element here.
      const li = document.createElement("li");
      // QUESTION: How can you set the text content of the list item element to the item name?
      li.textContent = item;

      // For this example, we'll assign a default price based on category (in Rands):
      let price = 0;
      if (category === "Starters") {
        price = 59.99;
      } else if (category === "MainCourses") {
        price = 129.99;
      } else if (category === "Desserts") {
        price = 69.99;
      }

      // QUESTION: Attach a click event listener to the list item to add it to the order.
      li.addEventListener("click", function () {
        // Call our addToOrder function (which will be defined/overridden in initMenuSystem)
        addToOrder(item, price);
      });

      // QUESTION: How can you append the list item to the list of items for this category?
      ul.appendChild(li);
    });

    // Append the unordered list to the menu container.
    menuContainer.appendChild(ul);
  }
}

// QUESTION: How can you update the order when an item is added? What elements in the HTML do you need to reference?

// Global addToOrder function is defined as a placeholder.
// It will be redefined inside initMenuSystem so that it has access to order state.
function addToOrder(itemName) {
  // Placeholder - this function will be overridden in initMenuSystem.
}

// QUESTION: What's the first step to initialize the menu system and display the menu?

// Function to initialize the menu system
function initMenuSystem(menu) {
  // QUESTION: What function should you call to display the menu?
  // ANSWER: We need to call displayMenuItems(), but first we set up the order state.

  // Get the HTML elements for the order items list and order total.
  const orderItemsList = document.getElementById("order-items");
  const orderTotalElement = document.getElementById("order-total");

  // Initialize the order total (this state will be maintained by our closure)
  let orderTotal = 0;

  // Redefine addToOrder so it can access orderItemsList and orderTotal
  addToOrder = function (itemName, itemPrice) {
    // QUESTION: Create a list item for the order here.
    const li = document.createElement("li");
    // QUESTION: How can you set the text content of the list item to the item name?
    // Note: Pricing is in Rands (R) here.
    li.textContent = `${itemName} - R${itemPrice.toFixed(2)}`;
    // QUESTION: How can you append the list item to the order items list?
    orderItemsList.appendChild(li);

    // QUESTION: Calculate and update the total price. How can you access the current total and item price?
    orderTotal += itemPrice;
    // QUESTION: How can you update the text content of the order total element with the new total?
    orderTotalElement.textContent = orderTotal.toFixed(2);
  };

  // Now call displayMenuItems to show the menu.
  displayMenuItems(menu);
}

// QUESTION: How can you start the menu system? What function should you call here?

// Call the init function to start the menu system
initMenuSystem(menu);
