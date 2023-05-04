// write code for your buttons here.

count = 0;
function countFunction() {
    console.log("count");
    const countDisplay = document.getElementById("countDisplay");
    
    if (count == 3){
        count = 0;
    }
    else{
        count = count+1;
    }
    countDisplay.innerHTML = count;

  }

