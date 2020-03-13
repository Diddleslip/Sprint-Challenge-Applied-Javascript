// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(object) {
    let tab = document.createElement("div");

    tab.textContent = object;

    tab.classList.add("tab");

    return tab;
}
let parentTwo = document.querySelector(".topics");
let newArray = [];

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then((response) => {
    newArray.push(response.data.topics)
})
.catch(() => {
    console.log("Fail");
})

.then(() => {
    newArray.forEach(function(X) {
        parentTwo.append(Tab(X));
        console.log(X);
    })
})
.catch((error) => {
    console.log("Fail 2 " + error);
})

