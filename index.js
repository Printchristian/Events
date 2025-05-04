 let numberBank = [];
 let oddNumbers = [];
 let evenNumbers = [];

 const app = document.createElement("div");
 document.body.appendChild(app);

 const input = document.createElement("input");
 input.type = "number";
 input.placeholder = "Enter a number";

 const addButton = document.createElement("button");
 addButton.textContent = "Add Number";
 
 const sortOneButton = document.createElement("button");
 sortOneButton.textContent = "Sort 1";
 
 const sortAllButton = document.createElement("button");
 sortAllButton.textContent = "Sort All";

 const bankDisplay = document.createElement("div");
const oddDisplay = document.createElement("div");
const evenDisplay = document.createElement("div");

app.append(input, addButton, sortOneButton, sortAllButton, bankDisplay, oddDisplay, evenDisplay);
function render() {
    bankDisplay.textContent = "Number Bank: " + numberBank.join(", ");
    oddDisplay.textContent = "Odd: " + oddNumbers.join(", ");
    evenDisplay.textContent = "Even: " + evenNumbers.join(", ");
  }

  addButton.addEventListener("click", () => {
    const num = parseInt(input.value);
    if (!isNaN(num)) {
      numberBank.push(num);
      input.value = "";
      render();
    }
  });

  sortOneButton.addEventListener("click", () => {
    const num = numberBank.shift();
    if (num !== undefined) {
      (num % 2 === 0 ? evenNumbers : oddNumbers).push(num);
      render();
    }
  });

  sortAllButton.addEventListener("click", () => {
    while (numberBank.length > 0) {
      const num = numberBank.shift();
      (num % 2 === 0 ? evenNumbers : oddNumbers).push(num);
    }
    render();
  });