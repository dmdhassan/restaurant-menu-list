const menu = [
  {
    id: 1,
    title: "Hammburger",
    category: "breakfast",
    price: '$15.89',
    img: "./img/item-1.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam, totam autem incidunt explicabo consequatur eum excepturi ex doloremque. Velit, neque?`,
  },
  {
    id: 2,
    title: "Baked Bread",
    category: "lunch",
    price: '$11.89',
    img: "./img/item-2.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam, totam autem incidunt explicabo consequatur eum excepturi ex doloremque. Velit, neque?`,
  },
  {
    id: 3,
    title: "Bulb Fish",
    category: "super",
    price: '$17.89',
    img: "./img/item-3.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam, totam autem incidunt explicabo consequatur eum excepturi ex doloremque. Velit, neque?`,
  },
  {
    id: 4,
    title: "Cookies",
    category: "breakfast",
    price: '$21.38',
    img: "./img/item-4.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam, totam autem incidunt explicabo consequatur eum excepturi ex doloremque. Velit, neque?`,
  },
  {
    id: 5,
    title: "Fried Potatoes",
    category: "lunch",
    price: '$10.23',
    img: "./img/item-5.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam, totam autem incidunt explicabo consequatur eum excepturi ex doloremque. Velit, neque?`,
  },
  {
    id: 6,
    title: "Hot Dog",
    category: "super",
    price: '$19.72',
    img: "./img/item-6.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam, totam autem incidunt explicabo consequatur eum excepturi ex doloremque. Velit, neque?`,
  },
  {
    id: 7,
    title: "Jollof Spaghetti",
    category: "breakfast",
    price: '$26.36',
    img: "./img/item-7.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam, totam autem incidunt explicabo consequatur eum excepturi ex doloremque. Velit, neque?`,
  },
  {
    id: 8,
    title: "Samosa",
    category: "lunch",
    price: '$14.5',
    img: "./img/item-8.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam, totam autem incidunt explicabo consequatur eum excepturi ex doloremque. Velit, neque?`,
  },
  {
    id: 9,
    title: "Sausage",
    category: "super",
    price: '$14.34',
    img: "./img/item-9.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam, totam autem incidunt explicabo consequatur eum excepturi ex doloremque. Velit, neque?`,
  },
  {
    id: 10,
    title: "Sweetened Tangerine",
    category: "breakfast",
    price: '$16.43',
    img: "./img/item-10.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam, totam autem incidunt explicabo consequatur eum excepturi ex doloremque. Velit, neque?`,
  },
  {
    id: 11,
    title: "Vegetable Bread",
    category: "lunch",
    price: '$17.18',
    img: "./img/item-11.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam, totam autem incidunt explicabo consequatur eum excepturi ex doloremque. Velit, neque?`,
  },
  {
    id: 12,
    title: "Hammburger",
    category: "super",
    price: '$16.43',
    img: "./img/item-12.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam, totam autem incidunt explicabo consequatur eum excepturi ex doloremque. Velit, neque?`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtn = document.querySelectorAll(".filter-btn")
//items load
window.addEventListener("DOMContentLoaded", function (item) {
    displayMenuItems(menu);
const categories = menu.map(function(item) {
     return item.category;
});
     console.log(categories);
});


//filtr btns
filterBtn.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
          const category = e.currentTarget.dataset.id;
          const menuCategory = menu.filter(function(menuItem){
            if (menuItem.category === category){
              return menuItem;
          }
          });
          //
          if (category === 'all'){
              displayMenuItems(menu)
          }
          else {
              displayMenuItems(menuCategory)
          }
    });
});

function displayMenuItems(menuItems) {
      let displayMenu = menuItems.map(function(item){
          //console.log(item);

          return `<article class="menu-item">
                    <img src=${item.img} alt=${item.title} class="photo"/>
                    <div class="item-info">
                         <header>
                              <h4>${item.title}</h4>
                              <h4 class="price">${item.price}</h4>
                         </header>
                         <p class="item-text">
                              ${item.desc}
                         </p>
                    </div>
               </article>` ;
     });
          
     displayMenu = displayMenu.join("");
     sectionCenter.innerHTML = displayMenu;
}; 