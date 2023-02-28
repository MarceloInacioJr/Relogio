const theme = document.querySelector("#theme");


// fuction
const showTimes = () => {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hour -= 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    clock.innerText = `${hour} : ${min} : ${sec} ${am_pm}`

};

setInterval(showTimes, 1000);
showTimes();

// Events
   let light_sun = "img/theme/sun.png";
   let dark_moon = "img/theme/moon.png"
   let img_current = dark_moon;
   let img_previsious = light_sun;


   theme.addEventListener("click", () =>{ 
    
    let body = document.querySelector("body");
     body.classList.toggle("dark");
   
    let image_theme = document.querySelector("#image-theme");
     image_theme.src = img_current;

     let aux = img_current;
     img_current = img_previsious;  

     img_previsious = aux;
     
    
    
   });


