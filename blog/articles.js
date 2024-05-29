const articles = [
{
id: 1,
title: "Septimus Heap Book One: Magyk",
date: "July 5, 2022",
description:
"If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
imgAlt: "Book cover for Septimus Heap 1",
ages: "10-14",
genre: "Fantasy",
stars: "****"
},
{
id: 2,
title: "Magnus Chase Book One: Sword of Summer",
date: "December 12, 2021",
description:
"The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
imgSrc:
"https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
imgAlt: "Book cover for Magnus Chase 1",
ages: "12-16",
genre: "Fantasy",
stars: "⭐⭐⭐⭐"
},
{
id: 3,
title: "Belgariad Book One: Pawn of Prophecy",
date: "Feb 12, 2022",
description:
"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
imgSrc:
"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
imgAlt: "Book cover for Pawn of Prophecy",
ages: "12-16",
genre: "Fantasy",
stars: "⭐⭐⭐⭐⭐"
}
];

//starts addNewArticle function when user scrolls down page
window.onload = function() {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addNewArticle();
  }
};

//outputs all of the different information for the different articles from array
function addNewArticle() {
  //gets book-review id from html
  const container = document.getElementById('book-review');
  //iterates over each element in the array
  articles.forEach(data => {
    //variable creates new div with details class
    const detailsDiv = document.createElement('div');
    detailsDiv.setAttribute("class", "details");

    //creates new h3 element with the date data from the array and adds it to the html
    const newH3Date = document.createElement('h3');
    newH3Date.textContent = data.date;
    detailsDiv.appendChild(newH3Date);

    //creates new p element with the ages, genre, and stars data from the array and adds it to the html
    const newPAgeGenreStars = document.createElement('p');
    newPAgeGenreStars.innerHTML = `<p>${data.ages}</p> <p>${data.genre}</p> <p>${data.stars}</p>`;
    detailsDiv.appendChild(newPAgeGenreStars);

    //appends the 'detailsDiv' <div> to the 'container' element
    container.appendChild(detailsDiv);

    //variable creates a new div with content class
    const contentDiv = document.createElement('div');
    contentDiv.setAttribute("class", "content");

    //creates new h2 element with the title data from the array and adds it to the html
    const newH2Title = document.createElement('h2');
    newH2Title.textContent = data.title;
    contentDiv.appendChild(newH2Title);

    //creates new img tag with the imgSrc and imgAlt data from the array and adds it to the html
    const newImg = document.createElement('img');
    newImg.src = data.imgSrc;
    newImg.alt = data.imgAlt;
    contentDiv.appendChild(newImg);

    //creates new p element with the description data from the array and adds it to the html
    const newPDescription = document.createElement('p');
    newPDescription.textContent = data.description;
    contentDiv.appendChild(newPDescription);

    //appends the 'contentDiv' <div> to the 'container' element
    container.appendChild(contentDiv);
  })
}