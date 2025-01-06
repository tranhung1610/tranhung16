const menuItems = [
    {
        name: "Appetizers",
        description: "Juicy beef patty with lettuce, tomato, and cheese",
        price: 9.99,
        
    },
    {
        name: "Main Course",
        description: "Traditional pizza with tomato sauce, mozzarella, and basil",
        price: 12.99,
        
    },
    {
        name: "Deserts",
        description: "Crisp romaine lettuce with Caesar dressing and croutons",
        price: 7.99,
        
    },
    {
        name: "Drinks",
        description: "Fresh salmon fillet with lemon butter sauce",
        price: 15.99,
        
    }
];

function createMenuItems() {
    const menuContainer = document.getElementById('menu-container');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p class="price">$${item.price.toFixed(2)}</p>
        `;

        menuContainer.appendChild(menuItem);
    });
}

document.addEventListener('DOMContentLoaded', createMenuItems);

function filterMenuItems(){
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
}
