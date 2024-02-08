function currentTime() {
    var clock = new Date(); /* creating object of Date class */
    var hour = clock.getHours();
    var min = clock.getMinutes();
    var sec = clock.getSeconds();
    var day = clock.getDate();
    var month = clock.getMonth();
    var year = clock.getFullYear();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    var midday = '';
    midday = (hour>12)?'PM':'AM';
    hour = (hour == 0) ? 12 : ((hour>12) ? (hour-12) : hour);
    hour = updateTime(hour);
    document.querySelector('.clock').innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */

    document.querySelector('.date').innerText = day + " / " + month + " / " + year;
    setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */