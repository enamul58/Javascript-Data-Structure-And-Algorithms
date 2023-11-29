const form = document.querySelector("form");

let number, arrayNumber, arrayLength, searchNumber, output;

form.addEventListener("submit", function (eventObject) {
  eventObject.preventDefault();
  number = document.querySelector("#number").value;
  arrayNumber = number.split(" ");
  arrayLength = document.querySelector("#arrayLength").value;
  searchNumber = document.querySelector("#searchNumber").value;
  output = document.querySelector("#findItem");

  //linear search function
  let findIndex = linearSearch(arrayNumber, arrayLength, searchNumber);
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

function linearSearch(arrayNumber, arrayLength, searchNumber) {
  let i;

  for (i = 0; i < arrayLength; i++) {
    if (arrayNumber[i] == searchNumber) {
      return i;
    }
  }
  i = -1;
  return i;
}
