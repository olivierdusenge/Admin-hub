
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=>  {
const li = item.parentElement;


item.addEventListener('click', function () {
   allSideMenu.forEach(i=> {
    i.parentElement.classList.remove('active');

   })
    li.classList.add('active');
})

});

//Sidebar

const menuBar = document.querySelector('#content nav .bx.bx-menu ');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function ()  {
    sidebar.classList.toggle('hide');
})




 

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const saerchForm =document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
    if(window.innerWidth <  768) {
    e.preventDefault()
    saerchForm.classList.toggle('show');
        if(saerchForm.classList.contains ('show')){
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        }else{
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        }
    
    }
    
})