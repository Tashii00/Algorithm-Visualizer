var container=document.getElementById("array");
function resetArray(){
 container.innerHTML="";
 generatearray();
}
function generatearray()
{
    for(var i=0;i<15;i++)
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
generatearray();

async function bubbleSort(delay = 100) {
    const blocks = document.querySelectorAll('.block');
    
    for (let i = 0; i < blocks.length; i++) {
      for (let j = 0; j < blocks.length - i - 1; j++) {
        // Highlight elements being compared
        blocks[j].style.backgroundColor = '#FF4949';
        blocks[j + 1].style.backgroundColor = '#FF4949';
  
        // Delay for visualization
        await new Promise(resolve => setTimeout(resolve, delay));
  
        // Compare values and swap if necessary
        const value1 = Number(blocks[j].childNodes[0].innerHTML);
        const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
  
        if (value1 > value2) {
          // Swap heights
          const tempHeight = blocks[j].style.height;
          blocks[j].style.height = blocks[j + 1].style.height;
          blocks[j + 1].style.height = tempHeight;
  
          // Swap text content
          const tempText = blocks[j].childNodes[0].innerText;
          blocks[j].childNodes[0].innerText = blocks[j + 1].childNodes[0].innerText;
          blocks[j + 1].childNodes[0].innerText = tempText;
  
          // Swap positions in the DOM
          const nextNode = blocks[j].nextSibling;
          blocks[j].parentNode.insertBefore(blocks[j + 1], blocks[j]);
          blocks[j].parentNode.insertBefore(blocks[j], nextNode);
        }
  
        // Revert back to original color after comparison
        blocks[j].style.backgroundColor = '#6b5b95';
        blocks[j + 1].style.backgroundColor = '#6b5b95';
      }
  
      // Mark sorted elements
      blocks[blocks.length - i - 1].style.backgroundColor = '#13CE66';
    }
  }
  async function insertionSort(delay = 100) {
    const blocks = document.querySelectorAll('.block');
    
    for (let i = 1; i < blocks.length; i++) {
      let j = i - 1;
      const currentBlock = blocks[i];
      const currentValue = Number(currentBlock.childNodes[0].innerHTML);
  
      // Highlight current block being compared
      currentBlock.style.backgroundColor = '#FF4949';
  
      // Delay for visualization
      await new Promise(resolve => setTimeout(resolve, delay));
  
      while (j >= 0 && Number(blocks[j].childNodes[0].innerHTML) > currentValue) {
        // Shift the blocks to the right
        blocks[j + 1].style.height = blocks[j].style.height;
        blocks[j + 1].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
  
        // Move to the previous block for comparison
        j--;
  
        // Highlight blocks being shifted
        for (let k = i; k > j; k--) {
          blocks[k].style.backgroundColor = '#13CE66';
        }
  
        // Delay for visualization
        await new Promise(resolve => setTimeout(resolve, delay));
      }
  
      // Place the current block in the correct position
      blocks[j + 1].style.height = `${currentValue * 3}px`;
      blocks[j + 1].childNodes[0].innerText = currentValue;
  
      // Revert back to original color after comparison
      for (let k = i; k >= 0; k--) {
        blocks[k].style.backgroundColor = '#6b5b95';
      }
    }
  }
  async function selectionSort(delay = 100) {
    const blocks = document.querySelectorAll('.block');
  
    for (let i = 0; i < blocks.length; i++) {
      let minIndex = i;
  
      // Highlight current block being compared as the minimum
      blocks[i].style.backgroundColor = '#FF4949';
  
      // Delay for visualization
      await new Promise(resolve => setTimeout(resolve, delay));
  
      for (let j = i + 1; j < blocks.length; j++) {
        // Highlight the next block being compared
        blocks[j].style.backgroundColor = '#13CE66';
  
        // Delay for visualization
        await new Promise(resolve => setTimeout(resolve, delay));
  
        const value1 = Number(blocks[j].childNodes[0].innerHTML);
        const value2 = Number(blocks[minIndex].childNodes[0].innerHTML);
  
        if (value1 < value2) {
          // Revert the previous minimum block's color
          blocks[minIndex].style.backgroundColor = '#6b5b95';
          minIndex = j;
        } else {
          // Revert the current block's color
          blocks[j].style.backgroundColor = '#6b5b95';
        }
      }
  
      // Swap heights and text content
      const tempHeight = blocks[minIndex].style.height;
      const tempText = blocks[minIndex].childNodes[0].innerText;
      blocks[minIndex].style.height = blocks[i].style.height;
      blocks[minIndex].childNodes[0].innerText = blocks[i].childNodes[0].innerText;
      blocks[i].style.height = tempHeight;
      blocks[i].childNodes[0].innerText = tempText;
  
      // Highlight the minimum block after the swap
      blocks[i].style.backgroundColor = '#13CE66';
    }
  }
  
  
