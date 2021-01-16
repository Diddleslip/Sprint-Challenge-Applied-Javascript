// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
{/* <div class="card"> */
  {/* <div class="headline">{Headline of article}</div>*/}
  /*<div class="author">
    <div class="img-container">
      <img src={url of authors image} />
    </div>
    <span>By {authors name}</span>
  </div>
 </div> */}
//
// Create a card for each of the articles and add the card to the DOM.

function Article0(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.javascript[0].headline;
    img.src = object.data.articles.javascript[0].authorPhoto;
    span.textContent = object.data.articles.javascript[0].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

let parentThree = document.querySelector(".cards-container");



axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article0(response));
    console.log(response);
    console.log(arrObj);
    console.log(response.data.articles.javascript[0].headline)
})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article1(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.javascript[1].headline;
    img.src = object.data.articles.javascript[1].authorPhoto;
    span.textContent = object.data.articles.javascript[1].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article1(response));

})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article2(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.javascript[2].headline;
    img.src = object.data.articles.javascript[2].authorPhoto;
    span.textContent = object.data.articles.javascript[2].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article2(response));

})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article3(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.javascript[3].headline;
    img.src = object.data.articles.javascript[3].authorPhoto;
    span.textContent = object.data.articles.javascript[3].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article3(response));
})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article5(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.bootstrap[0].headline;
    img.src = object.data.articles.bootstrap[0].authorPhoto;
    span.textContent = object.data.articles.bootstrap[0].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article5(response));
    console.log(response);
    console.log(arrObj);
    console.log(response.data.articles.bootstrap[0].headline)
})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article6(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.bootstrap[1].headline;
    img.src = object.data.articles.bootstrap[1].authorPhoto;
    span.textContent = object.data.articles.bootstrap[1].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article6(response));
})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article7(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.bootstrap[2].headline;
    img.src = object.data.articles.bootstrap[2].authorPhoto;
    span.textContent = object.data.articles.bootstrap[2].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article7(response));
})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article8(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.technology[0].headline;
    img.src = object.data.articles.technology[0].authorPhoto;
    span.textContent = object.data.articles.technology[0].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article8(response));
})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article9(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.technology[1].headline;
    img.src = object.data.articles.technology[1].authorPhoto;
    span.textContent = object.data.articles.technology[1].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article9(response));
})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article10(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.technology[2].headline;
    img.src = object.data.articles.technology[2].authorPhoto;
    span.textContent = object.data.articles.technology[2].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article10(response));
})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article11(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.jquery[0].headline;
    img.src = object.data.articles.jquery[0].authorPhoto;
    span.textContent = object.data.articles.jquery[0].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article11(response));
})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article12(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.jquery[1].headline;
    img.src = object.data.articles.jquery[1].authorPhoto;
    span.textContent = object.data.articles.jquery[1].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article12(response));
})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article13(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.jquery[2].headline;
    img.src = object.data.articles.jquery[2].authorPhoto;
    span.textContent = object.data.articles.jquery[2].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article13(response));
})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article14(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.node[0].headline;
    img.src = object.data.articles.node[0].authorPhoto;
    span.textContent = object.data.articles.node[0].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article14(response));
})
.catch((error) => {
    console.log("Error1 is: " + error);
})

function Article15(object) {
    let cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imgDiv = document.createElement("div"),
        img = document.createElement("img"),
        span = document.createElement("span");

    headlineDiv.textContent = object.data.articles.node[1].headline;
    img.src = object.data.articles.node[1].authorPhoto;
    span.textContent = object.data.articles.node[1].authorName;

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
        
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgDiv, span);
    imgDiv.append(img);

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    let newArr = response;
    let arr = Object.keys(newArr.data.articles);
    let arrObj = arr.map((key) => {
        return {[key]: newArr.data.articles[key]};
    })
    parentThree.append(Article15(response));
})
.catch((error) => {
    console.log("Error1 is: " + error);
})