setInterval(() => {
    d  = new Date();

    htime = d.getHours();

    mtime = d.getMinutes();

    // stime = s.getSecounds();\

    stime = d.getSeconds();

    hrotation =30*htime +mtime/2;


    mrotation  = 6*mtime;

    srotation  = 6*stime; 

    hour.style.transform = `rotate(${hrotation}deg)`;

    minute.style.transform = `rotate(${mrotation}deg)`;

    secound.style.transform = `rotate(${srotation}deg)`;

   


    
}, 1000);

