const tanyaPhoto= document.querySelector(".tanyaPhoto");
const johnPhoto= document.querySelector(".johnPhoto");
const tanyaDescription= document.querySelector(".tanyaDesciption");
const johnDescription= document.querySelector(".johnDesciption");
const tanyaDesignation= document.querySelector(".tanyaDesignation");
const johnDesignation= document.querySelector(".johnDesignation");

const prev= document.querySelector(".prev");
const next= document.querySelector(".next");


prev.addEventListener('click',(e)=>{
         tanyaPhoto.style.left="-108.5%";
         johnPhoto.style.left="-108.5%";

         tanyaDescription.style.left="-108.5%";
         johnDescription.style.left="-108.5%";

         tanyaDesignation.style.left="-108.5%";
         johnDesignation.style.left="-108.5%";
        console.log("clicked");
});

next.addEventListener('click',(e)=>{
    tanyaPhoto.style.left="0%";
    johnPhoto.style.left="0%";

    tanyaDescription.style.left="0%";
    johnDescription.style.left="0%";

    tanyaDesignation.style.left="0%";
    johnDesignation.style.left="0%";
});