let btn = document.querySelector('#menuBtn');
let sidebar = document.querySelector(".sidebar");

btn.onclick = function(){
    sidebar.classList.toggle("active")
}