// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

const run = document.getElementById('run');
const min = document.getElementById('min');
const max = document.getElementById('max');
const sum = document.getElementById('sum');
const avg = document.getElementById('average');


function randInt(min, max) {
    // max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function minInArr(arr) {
    let minNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i]
        }
    }
    return minNum
}

function maxInArr(arr) {
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }
    }
    return maxNum
}

function sumOfArr(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i];
    }
    return count
}

function avgOfArr(arr) {
    return sumOfArr(arr) / arr.length;
}

function displayNumbers() {
    let tenRandNum = [];

    for (let i = 0; i < 10; i++) {
        tenRandNum.push(randInt(1, 10));
    }

    for (let i = 0; i < tenRandNum.length; i++) {
        document.getElementById(`n-${i+1}`).innerText = tenRandNum[i];
    }

    min.innerHTML = minInArr(tenRandNum);
    max.innerHTML = maxInArr(tenRandNum);
    sum.innerHTML = sumOfArr(tenRandNum);
    avg.innerHTML = avgOfArr(tenRandNum);



}

// your code here

run.addEventListener('click', () => {
    displayNumbers();
});