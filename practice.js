function lengthMethod(){
    let inputValue = document.getElementById("word").value;
    let lengthOfWord = inputValue.length;
    document.getElementById("wordLengthDisplay").innerHTML = lengthOfWord;
}

function splitMethod(){
    let splitInput = document.getElementById("string").value;
    let noSpaces = splitInput.split(' ');
    document.getElementById("stringWithoutSpaces").innerHTML = noSpaces;
}

function sliceMethod(){
    let sliceInput = document.getElementById("stringToSlice").value;
    let indexInput = document.getElementById("indexToSlice").value;
    let sliceIndex = sliceInput.slice(indexInput);
    document.getElementById("slicedString").innerHTML = sliceIndex;
}