document.querySelector(".sidebar .section.kids").addEventListener("click", ()=>{
    document.querySelector("#men").style.display = "none";
    document.querySelector("#women").style.display = "none";
    document.querySelector("#kids").style.display = "block";
});

document.querySelector(".sidebar .section.men").addEventListener("click", ()=>{
    document.querySelector("#men").style.display = "block";
    document.querySelector("#women").style.display = "none";
    document.querySelector("#kids").style.display = "none";
});

document.querySelector(".sidebar .section.women").addEventListener("click", ()=>{
    document.querySelector("#men").style.display = "none";
    document.querySelector("#women").style.display = "block";
    document.querySelector("#kids").style.display = "none";
});

document.querySelector("nav .headerpart a.cart").addEventListener("click",()=>{
    document.querySelector(".cartBackground").classList.add("open");
    setTimeout(()=>{
        document.querySelector(".cartBackground .zoomEffect").classList.add("active");
    },1);
});

document.querySelector(".cartBackground").addEventListener("click",(e)=>{
    if(e.target.classList.contains("cartBackground")){
        document.querySelector(".cartBackground .zoomEffect").classList.remove("active");
        setTimeout(()=>{
            document.querySelector(".cartBackground").classList.remove("open");
        },300);
    }
})