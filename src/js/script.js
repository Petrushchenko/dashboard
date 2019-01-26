'use strict'
window.onload = () => {
    const list = document.querySelector('.list');
    list.addEventListener('click', openCloseAddInfo);
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
     
            } else {
                
                let info = document.querySelector("#additional");
                parent.appendChild(info.content.cloneNode(true));
                projectIsReady();

                svg.style.transform = "rotate(180deg)";
            }
        } 
       
    }    
    
}