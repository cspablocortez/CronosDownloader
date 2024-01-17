function toggleMenu() {
    const menuBtn = document.getElementsByClassName('fa-solid');
    console.log(menuBtn[0]);

    if (menuBtn[0].classList.contains('fa-bars')) {
        menuBtn[0].classList.remove('fa-bars');
        menuBtn[0].classList.add('fa-xmark');
        showNavItems();
    } else {
        menuBtn[0].classList.remove('fa-xmark');
        menuBtn[0].classList.add('fa-bars');
        hideNavItems();
    }
        
    console.log("Toggled.")
}

function showNavItems() {
    const navItemsUL = document.querySelector('.nav-items');
    navItemsUL.style.visibility = 'visible';
}

function hideNavItems() {
    const navItemsUL = document.querySelector('.nav-items');
    navItemsUL.style.visibility = 'hidden';
}