import { antiguaArray, dayTripsArray, foodArray } from "./arrays.mjs";

function generateContent(array) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';

    array.forEach((item, index) => {
        const contentItem = document.createElement('div');
        contentItem.className = 'content-item';
        
        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.imgAlt;
        
        const textContainer = document.createElement('div');
        textContainer.className = 'text-container';
        
        const title = document.createElement('h2');
        title.textContent = item.title;
        
        const info = document.createElement('p');
        info.textContent = item.info;
        
        textContainer.appendChild(title);
        textContainer.appendChild(info);
        
        if (index % 2 === 0) {
            contentItem.appendChild(img);
            contentItem.appendChild(textContainer);
        } else {
            contentItem.appendChild(textContainer);
            contentItem.appendChild(img);
        }
        
        contentContainer.appendChild(contentItem);
    });
}

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('antigua.html')) {
        return 'antigua';
    } else if (path.includes('day-trips.html')) {
        return 'day-trips';
    } else if (path.includes('food.html')) {
        return 'food';
    } else {
        return null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = getCurrentPage();
    
    if (currentPage === 'antigua') {
        generateContent(antiguaArray);
    } else if (currentPage === 'day-trips') {
        generateContent(dayTripsArray);
    } else if (currentPage === 'food') {
        generateContent(foodArray);
    }
});

