var container = document.getElementById("array"); 
function resetArray() {
  container.innerHTML = "";
  generatearray(); // Call the function to generate a new array
}
function generatearray() { 
  for (var i = 0; i < 15; i++) 
  { 
    var value = Math.ceil(Math.random() * 100); 
    var array_ele = document.createElement("div");  
    array_ele.classList.add("block"); 
    array_ele.style.height = `${value * 3}px`; 
    array_ele.style.transform = `translate(${i * 30}px)`; 
  
    // Creating label element for displaying 
    var array_ele_label = document.createElement("label"); 
    array_ele_label.classList.add("block_id"); 
    array_ele_label.innerText = value; 
  
    // Appending created elements to index.html 
    array_ele.appendChild(array_ele_label); 
    container.appendChild(array_ele); 
  } 
  var output = document.getElementById("text");
  output.innerText = "";
} 

async function LinearSearch(delay = 300) { 
  var blocks = document.querySelectorAll(".block"); 
  var output = document.getElementById("text"); 
  
  //Extracting the value entered by the user 
  var num = document.getElementById("fname").value; 
  
  //Changing the color of all the blocks to violet 
  for (var i = 0; i < blocks.length; i += 1) { 
    blocks[i].style.backgroundColor = "#6b5b95"; 
  } 
  
  output.innerText = ""; 
  
  var flag = 0; 
  for (var i = 0; i < blocks.length; i += 1) { 
   blocks[i].style.backgroundColor = "#FF4949"; 
    // To wait for .1 sec 
    await new Promise((resolve) => 
      setTimeout(() => { 
        resolve(); 
      }, delay) 
    ); 
  
    //Extracting the value of current block 
    var value = Number(blocks[i].childNodes[0].innerHTML); 
  
    // To compare block value with entered value 
    if (value == num) { 
      flag = 1; 
      output.innerText = "Element Found"; 
      blocks[i].style.backgroundColor = "#13CE66"; 
      break; 
    } else { 
      // Changing the color to the previous one 
      blocks[i].style.backgroundColor = "#6b5b95"; 
    } 
  } 
  //When element is not found in the array 
  if (flag == 0) { 
    output.innerText = "Element Not Found"; 
  }
} 
  
// Calling generatearray function 
generatearray(); 
async function startBinarySearch(delay = 2000) {
  var blocks = document.querySelectorAll(".block");
  var output = document.getElementById("text");

  // Extract the value entered by the user
  var num = Number(document.getElementById("fname").value);

  // Changing the color of all the blocks to violet
  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#6b5b95";
  }

  output.innerText = "";

  // Sort the array based on user input
  blocks = Array.from(blocks).sort((a, b) => {
    return Number(a.childNodes[0].innerHTML) - Number(b.childNodes[0].innerHTML);
  });

  // Rearrange blocks visually based on the sorted array
  var container = document.getElementById("array");
  container.innerHTML = "";
  blocks.forEach((block, index) => {
    block.style.transform = `translate(${index * 30}px)`;
    container.appendChild(block);
  });

  let low = 0;
  let high = blocks.length - 1;
  let flag = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    blocks[mid].style.backgroundColor = "#FF4949";

    // To wait for .1 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    let value = Number(blocks[mid].childNodes[0].innerHTML);

    if (value === num) {
      flag = 1;
      output.innerText = "Element Found";
      blocks[mid].style.backgroundColor = "#13CE66";
      break;
    } else if (value < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    blocks[mid].style.backgroundColor = "#6b5b95";
  }

  // When element is not found in the array
  if (flag === 0) {
    output.innerText = "Element Not Found";
  }
}
