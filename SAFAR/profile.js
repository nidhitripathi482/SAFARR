function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    var tabs = document.getElementsByClassName("tab");
    
   
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    
    
    document.getElementById(tabName).style.display = "block";
    event.target.classList.add("active");
}