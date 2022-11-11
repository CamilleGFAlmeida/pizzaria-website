const sideMenu = document.querySelector("aside"); 
const menuBtn = document.querySelector("#menu-btn"); 
const closeBtn = document.querySelector("#close-btn"); 
const themeToggler = document.querySelector(".theme-toggler"); 

// mostra a sidebar 
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'; 
})

// fecha a sidebar 
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'; 
})

// muda de cor // mesmo esquema do site principal 
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme-variables"); 

    themeToggler.querySelector('span').classList.toggle('active'); 
}) 

// itens da tabela 
Orders.forEach(order => {
    const tr = document.createElement('tr'); 
    const trContent = `
                      <td>${order.productName}</td>
                      <td>${order.productNumber}</td>
                      <td>${order.productStatus}</td>
                      <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                      <td class="primary">Details</td>
    `; 
    tr.innerHTML = trContent; 
    document.querySelector('table tbody').appendChild(tr); 
})