/* Dom Manipulation - Document(html file loaed in the browser) object (created as an object type)model(tree representation)*/

// select an element and save the reference to a variable
/*const a = document.querySelector("a");
// change the text content of the selected element
a.textContent = "Landing Page or Entry";

// create a new node - you need a parent to add the node to
const section = document.querySelector("section");

// create a new paragraph element
const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph that was created using javascript.";

section.appendChild(newPara);

// removal of nodes
// section.removeChild(newPara);
// newPara.remove(); 
// this is a more modern way to remove a node

// manipulating styles
newPara.style.color = "red";
newPara.style.padding = "20px";

// Events
// to react to an event, you need to look out for it using an event listener


const btn = document.querySelector("button");

function callMe(e) {
    document.body.style.backgroundColor = "olive";
    console.log(e);
}

btn.addEventListener("click", callMe);
// arrays

const sample = ["money", "paper", "cars"];

console.log(sample.length);
*/

// array is an indexed collection of items, and the index starts at 0.
console 

/**
 * 
 Practice - shopping list
- Create four variables that hold references to <ul>, <input>, <p> and <button> elements. 
Also create an empty array called shoppingList — this will store your items as the user adds them.
- Create a function that will run in response to the button being clicked.
- Inside the function body, start by calling preventDefault(). 
Since the input is wrapped in a form element, pressing the Enter key will trigger the form to submit. 
The call to preventDefault() will prevent the form from refreshing the page so a new item can be added to the list instead.
- Continue by storing the current value of the input in a variable and then push it into your shopping list. */


// step 1. create 4 variables

const btn = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const para = document.querySelector(".summary");

const shoppingList = [];

// step 2. create a function that will add the input value to the array and display it in the list
function addItemToList(e) {
    // step 3. prevent the form from refreshing the page
    e.preventDefault();

    //step 4. store the input value in a variable
    const inputValue = input.value.trim();
    // if item stop working, return
    if(!inputValue) return;
    // step 4.5 push/add the item value into the shopping list array
    shoppingList.push(inputValue);
    
    //step 5
    input.value = "";

    // step 6. create a new list item and add it to the list
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    // step 7. Append the span and the button to the list item
    span.textContent = inputValue;
    button.textContent = 'Delete';
    li.append(span, button);

    // step 8. Append <li> to the <ul> element
    list.append(li);

    // step 9.
   if(shoppingList.length === 0) {
        para.textContent = "Shopping list is empty";
    }
    else {
        para.textContent = `You have ${shoppingList.length}
        item(s) in list`
    }
    // step 10
    button.addEventListener("click", function() {
        const index = shoppingList.indexOf(span.textContent);
    shoppingList.splice(index, 1);
    li.remove();
     if(shoppingList.length === 0) {
        para.textContent = "Shopping list is empty";
    }
    else {
        para.textContent = `You have ${shoppingList.length}
        item(s) in list`    
    }
    })

    // step 11
    input.focus();

}

btn.addEventListener("click", addItemToList);