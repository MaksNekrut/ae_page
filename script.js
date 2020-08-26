const year = document.querySelectorAll('.year');
const list = document.querySelectorAll('li');


function showInfo(e) {
    list.forEach(item => {
        item.style.display = "none";
        if(item.className == e.target.id){
            item.style.display = "block";
        }  
    })
}

year.forEach(item => {
    item.addEventListener('click', showInfo);
})