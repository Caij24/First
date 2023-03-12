/*--|First Page Section Background Slideshow|-- */

    let slideIndex_Next = 0;
    let slideIndex = 0;
    showFirstSectionBackgroundSlideShow();
    showFirstSectionBackgroundSlideShowPreview();
        
    function showFirstSectionBackgroundSlideShow() 
    {
        let i;
        let slides = document.getElementsByClassName("first-section-background-images");
        for(i = 0; i < slides.length; i++) 
        {
            slides[i].style.display = "none";  
        }
        slideIndex_Next++;
        if(slideIndex_Next > slides.length) {slideIndex_Next = 1}    
        slides[slideIndex_Next-1].style.display = "block"; 
        setTimeout(showFirstSectionBackgroundSlideShow, 10000);
    }

    function showFirstSectionBackgroundSlideShowPreview() 
    {
        let i;
        let slides = document.getElementsByClassName("first-section-background-images-last-preview");
        for(i = 0; i < slides.length; i++) 
        {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if(slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block"; 
        setTimeout(showFirstSectionBackgroundSlideShowPreview, 10000);
    }

/*--------------------------------------------------------------------------------------*/

function openNav() {
  document.getElementById("mySidenav").style.width = "310px";
  document.getElementById("sidenav-container").style.width = "100%";
  document.getElementById("1343px-btn").style.opacity = "0";
  document.getElementById("660px-btn").style.opacity = "0";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sidenav-container").style.width = "0";
  document.getElementById("1343px-btn").style.opacity = "100%";
  document.getElementById("660px-btn").style.opacity = "100%";
}
