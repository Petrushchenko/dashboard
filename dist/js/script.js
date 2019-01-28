'use strict'
window.onload = () => {
    const list = document.querySelector('.list');
    list.addEventListener('click', openCloseAddInfo);

    const tabs = document.querySelector('.tabs');
    tabs.addEventListener('click', toggleTab);

    const nav = document.querySelector('.menu');
    nav.addEventListener('click', handleMenu);

}

function projectIsReady () {
    const addEls = document.querySelectorAll('.additional li > div:first-child ');
    addEls.forEach((div) => {
        const span = div.querySelector('span');

        if (span.textContent.toLowerCase() === 'ready') {
            let mark = document.querySelector('#ready');
            div.appendChild(mark.content.cloneNode(true));

            let p = div.querySelector('p');
            p.style.textDecoration = "line-through";

        } 
    })
}

function openCloseAddInfo(e) {
    let target = e.target;
    let btn = target.closest('button');

    if (!btn) {
        return;
    } else {

        if (btn.classList.contains('info')) {
            let svg = target.closest('svg');

            let parent = btn.closest('li');
            let childrenElements = Array.from(parent.children);
            let isOpen = childrenElements.some( el => el.tagName === "UL");
            
            if (isOpen) {
                let ul = childrenElements.filter(el => el.tagName === "UL")[0];
                parent.removeChild(ul);

                svg.style.transform = "rotate(0deg)";
     
            } else {
                
                let info = document.querySelector("#additional");
                parent.appendChild(info.content.cloneNode(true));
                projectIsReady();

                svg.style.transform = "rotate(180deg)";
            }
        } 
       
    }      
}
function toggleTab (e) {
    let target = e.target.closest('li.tabs__item');
    let tabsItems = this.querySelectorAll('.tabs__item');
    let tabsContent = document.querySelectorAll('.main-scroll');
    
    tabsItems.forEach((item) => {
        item === target ? item.classList.add('active') : item.classList.remove('active');
        tabsContent.forEach((main, i) => i == target.getAttribute('data-index') ? main.classList.remove('hide') : main.classList.add('hide'));
    });
}
function handleMenu (e) {
    let target = e.target.closest('li.menu__item');
    let menuItems = this.querySelectorAll('li.menu__item');

    menuItems.forEach((item) =>  item === target ? item.classList.add('active') : item.classList.remove('active'))

}
