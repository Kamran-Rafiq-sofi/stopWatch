// let hour=document.getElementById("hour");
// let minute=document.getElementById("minute");
// let second=document.getElementById("second");
let Start=document.getElementById('start');
let Stop=document.getElementById('stop');
let Restart=document.getElementById('restart');


let hour=00;
let minute=00;
let second=00;
let counter=00;

Start.addEventListener('click', function (){
    timer=true;
    stopWatch();

});


Stop.addEventListener('click', function (){
    timer=false;
    // stopWatch();

});

Restart.addEventListener('click', function (){
    timer=false;


    
  hour=00;
 minute=00;
 second=00;
 counter=00;


 document.getElementById('hour').innerHTML="00";
document.getElementById('minute').innerHTML="00";
document.getElementById('second').innerHTML="00";
document.getElementById('counter').innerHTML="00";
    // stopWatch();

});



function stopWatch() {
    if(timer){
        counter++;
        // second++;
        if(counter==100){
            second++;
            counter =0;
        }

        if(second==60){
minute++;
second = 0;
counter = 0;
        }


        if(minute==60){
            hour++;
            minute=0;
            second = 0;
            counter = 0;
                    }
        let hourString=hour;
        let minuteString=minute;
        let secondString=second;
        let counterString=counter;
        // document.getElementById('hour').innerHTML=hourString;

        if(hour<10){
            hourString="0"+hourString;
        }

        if(minute<10){
            minuteString="0"+minuteString;
        }
        if(second<10){
            secondString="0"+secondString;
        }
        if(counter<10){
            counterString="0"+counterString;
        }


        document.getElementById('hour').innerHTML=hourString;
        document.getElementById('minute').innerHTML=minuteString;
        document.getElementById('second').innerHTML=secondString;
        document.getElementById('counter').innerHTML=counterString;
    }
            setTimeout(stopWatch,10);
    }
