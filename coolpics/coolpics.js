'use strict'

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
        </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    if (event.target.tagName === 'IMG') {
    	// get the src attribute from that element and 'split' it on the "-"
        // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
        const src = event.target.getAttribute('src').split('-')[0] + '-full.jpeg';
        const alt = event.target.getAttribute('alt');
        // insert the viewerTemplate into the top of the body element
	    // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
        const viewerHtml = viewerTemplate(src, alt);
        document.body.insertAdjacentHTML("afterbegin", viewerHtml);
        // add a listener to the close button (X) that calls a function called closeViewer when clicked
        document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
}

document.querySelector('.gallery').addEventListener('click', viewHandler);

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.parentNode.removeChild(viewer);
}

//this function toggles nav to hide or view
const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);
//this function uses if else to remove or add .menu hide to open or close on window size. 
function handelResize() {
    const menu = document.querySelector(".menu")
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handelResize();
window.addEventListener("resize", handelResize);

