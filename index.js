// navbar toggle
const togglebtn= document.getElementById('navbar-toggler');
const navdiv=document.querySelector('.navbar-collapse')
togglebtn.addEventListener('click',()=>{
    navdiv.classList.toggle('shownav');
    if(togglebtn.firstElementChild.className == "fas fa-bars fa-fw"){
        togglebtn.firstElementChild.className = "fas fa-times fa-fw";
        document.body.style.overflow="hidden";
    }else{
        togglebtn.firstElementChild.className = "fas fa-bars fa-fw"
        document.body.style.overflow="visible";
    }
});

let resizetimer;
window.addEventListener('resize',()=>{
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizetimer);
    resizetimer=setTimeout(()=>{
        document.body.classList.remove("resize-animation-stopper");
    },400);
});
// review slider
const prevbtn= document.querySelector('.prev-btn');
const nextbtn=document.querySelector('.next-btn');
let idcount=0;
const reviewslide=document.querySelectorAll('.review-item');
showcurrentslide(idcount);

function showcurrentslide(id){
    hideallslide();
    reviewslide.forEach((item,idx)=>{
        if(id==idx){
            item.classList.add('activeslide');
        }
    });
}
function hideallslide(){
    reviewslide.forEach((item)=>{
        item.classList.remove('activeslide');
    });
}
prevbtn.addEventListener('click',()=>{
    idcount--;
    if(idcount<0){
        // idcount=2;
        idcount=reviewslide.length-1;
    }
    showcurrentslide(idcount);
})
nextbtn.addEventListener('click',()=>{
    idcount++;
    if(idcount == reviewslide.length){
        idcount=0;
    }
    showcurrentslide(idcount);
})
// navigation in small screen
const links=document.querySelectorAll('.nav-link');
links.forEach((link)=>{
    links.addEventListener('click',()=>{
        document.body.style.overflow='visible';
      navdiv.classList.remove('shownav');
    togglebtn.firstElementChild.className="fas fa-bars fa-fw";
    });
})