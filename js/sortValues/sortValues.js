const insertNumber = document.getElementById("insertNumber");
const btnInsertNumber = document.getElementById("btnInsertNumber");
const insertArrayLengthInput = document.getElementById("insertArrayLength");
const btnInsertArrayLength = document.getElementById("btnInsertArrayLength");
const btnSortArray = document.getElementById("btnSortArray");
const containerArray = document.getElementById("containerArray");
const smallContainerArray = document.getElementById("smallContainerArray");
const mediumContainerArray = document.getElementById("mediumContainerArray");
const largeContainerArray = document.getElementById("largeContainerArray");
const newArray = document.getElementById("largeContainerArray");

let smallNumbers = [];
let mediumNumbers = [];
let largeNumbers = [];

let mainArray = [];
let sortedArray = [];

function createRandomArr(len) {
    const array = [];
    let i = 0;
    while (i < len) {
        array[i] = Math.floor((Math.random() * 101));
        i += 1;
    }
    return array;
}

function bubble(array) {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}

btnInsertNumber.addEventListener('click', () => {
    mainArray.push(Number(insertNumber.value));

});

btnInsertArrayLength.addEventListener('click', () => {
    mainArray.push(...createRandomArr(Number(insertArrayLengthInput.value)));
});

btnSortArray.addEventListener('click', () => {
    sortedArray = bubble(mainArray);
    sortedArray.forEach((element, index) => {
        if (element >= 0 && element <= 30) {
            smallNumbers.push(element);
        }
        else if (element >= 31 && element <= 60) {
            mediumNumbers.push(element);
        }
        else if (element >= 61 && element <= 100) {
            largeNumbers.push(element);
        }

    });
    mainArray = [];
    console.log(sortedArray);
    containerArray.innerText = sortedArray;
    sortedArray = [];
    smallContainerArray.innerText = smallNumbers;
    mediumContainerArray.innerText = mediumNumbers;
    largeContainerArray.innerText = largeNumbers;
    smallContainerArray = [];
    mediumContainerArray = [];
    largeContainerArray = [];

});



function sortMultipleArrays(arrays) {
    const sortedArrays = [];
    let i = 0;
    for (let arr in arrays) {
        sortedArrays[i] = bubble(arr);
        i += 1;
    }
    return sortedArrays;
}




// סעיף אחרון בבונוס
// arrS.forEach((w) => {
//     if (arrS.length > arrM.length + 1 || arrS.length > arrL.length + 1) {
//         arrS.pop();
//     };
// });


// arrM.forEach((w) => {
//     if (arrM.length > arrS.length + 1 || arrM.length > arrL.length + 1) {
//         arrM.pop();
//     };
// });

// arrL.forEach((w) => {
//     if (arrL.length > arrS.length + 1 || arrL.length > arrM.length + 1) {
//         arrL.pop();
//     };
// });
