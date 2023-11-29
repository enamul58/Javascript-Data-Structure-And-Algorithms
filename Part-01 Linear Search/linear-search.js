const form = document.querySelector("form");

let number, arrayNumber, arrayLength, searchNumber, output;

form.addEventListener("submit", function (eventObject) {
  eventObject.preventDefault();
  number = document.querySelector("#number").value;
  arrayNumber = number.split(" ");
  arrayLength = document.querySelector("#arrayLength").value;
  searchNumber = document.querySelector("#searchNumber").value;
  output = document.querySelector("#findItem");

  //binary search function
  let findIndex = binarySearch(arrayNumber, arrayLength, searchNumber);
  if (findIndex === -1) {
    output.value = findIndex;
  } else {
    output.value = arrayNumber[findIndex];
  }

  const formRest = document.querySelector("#formRest");
  formRest.addEventListener("click", function () {
    form.reset();
  });
});

arrayNumber.sort(function (a, b) {
  return a - b;
});

function binarySearch(arrayNumber, arrayLength, searchNumber) {
  let left = 0;
  let right = arrayLength - 1;

  while (left <= right) {
    let mid = (left + right) / 2;

    if (arrayNumber[mid] == searchNumber) {
      return mid;
    }

    if (arrayNumber[mid] <= searchNumber) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
