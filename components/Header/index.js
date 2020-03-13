// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let header = document.createElement("div"),
        spanOne = document.createElement("span"),
        h1 = document.createElement("h1"),
        spanTwo = document.createElement("span");

        header.classList.add("header");
        spanOne.classList.add("date");
        spanTwo.classList.add("temp");

        spanOne.textContent = "SMARCH 28, 2019";
        h1.textContent = "Lambda Times";
        spanTwo.textContent = "98°";

        header.append(spanOne, h1, spanTwo);

    return header;
}

let parent = document.querySelector(".header-container");

parent.append(Header());
