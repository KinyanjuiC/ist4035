// Step 1: Get user's name, default to 'Guest' if no input provided
let userName = prompt("Please enter your name:");
userName = userName && userName.trim() !== "" ? userName.trim() : "Guest";

// Step 2: Display personalized welcome message
alert(`Welcome ${userName} to EatNow cafe!`);

// Step 3:  Display Menu Items in Console
const menu = ["Grilled Matumbo & Rice", "Roasted Beef & Ugali", "Tilapia Fry with Uagli & Sukuma Wiki", "Mukimo & Chicken", "Chapati with Beef stew"];
console.log("Menu Items:");
menu.forEach((item, index) => console.log(`${index + 1}. ${item}`));

// Step 4: Prompt for new dish and update menu
const newDish = prompt("Suggest a new dish to add to the menu:");
if (newDish && newDish.trim()) {
    menu.push(newDish.trim());
    console.log("Dish added! Updated Menu:");
    menu.forEach((item, index) => console.log(`${index + 1}. ${item}`));
} else {
    console.log("Invalid input. No dish was added.");
}