addEventListener('DOMContentLoaded', function(){
    setInterval(loop, 300);
});

var Color = {
    RED:    'rgba(255, 0, 0, 0.9)',
    GREEN:  'rgba(0, 255, 0, 0.9)',
    BLUE:   'rgba(86, 86, 255, 0.9)',
    WHITE:  'rgba(86, 86, 255, 0.3)'
};

var time = {};

function loop() {
    getCurrentTime();
    setTime();
    setFiboTime();
}

function getCurrentTime() {
    var date = new Date();

    var hours = date.getHours();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes; 

    time = {
        hours: hours, 
        minutes: minutes,
        ampm: ampm
    };
}

function setTime() {
    document.querySelector('#hours').textContent = time.hours;
    document.querySelector('#minutes').textContent = time.minutes;
    document.querySelector('#ampm').textContent = time.ampm;
}

function getFiboTime() {
    var fiboTime = {
        oneCounter1:    Color.WHITE,
        oneCounter2:    Color.WHITE,
        twoCounter:     Color.WHITE,
        threeCounter:   Color.WHITE,
        fiveCounter:    Color.WHITE
    };

    switch (time.hours) {
        case '01':
            fiboTime.oneCounter1    = Color.RED;
            break;

        case '02':
            fiboTime.twoCounter     = Color.RED;
            break;

        case '03':
            fiboTime.threeCounter   = Color.RED;
            break;

        case '04':
            fiboTime.threeCounter   = Color.RED;
            fiboTime.oneCounter1    = Color.RED;
            break;

        case '05':
            fiboTime.fiveCounter    = Color.RED;
            break;

        case '06':
            fiboTime.fiveCounter    = Color.RED;
            fiboTime.oneCounter1    = Color.RED;
            break;

        case '07':
            fiboTime.fiveCounter    = Color.RED;
            fiboTime.twoCounter     = Color.RED;
            break;

        case '08':
            fiboTime.fiveCounter    = Color.RED;
            fiboTime.threeCounter   = Color.RED;
            break;

        case '09':
            fiboTime.fiveCounter    = Color.RED;
            fiboTime.threeCounter   = Color.RED;
            fiboTime.oneCounter1    = Color.RED;
            break;

        case 10:
            fiboTime.fiveCounter    = Color.RED;
            fiboTime.threeCounter   = Color.RED;
            fiboTime.twoCounter     = Color.RED;
            break;

        case 11:
            fiboTime.fiveCounter    = Color.RED;
            fiboTime.threeCounter   = Color.RED;
            fiboTime.twoCounter     = Color.RED;
            fiboTime.oneCounter1    = Color.RED;
            break;

        case 12:
            fiboTime.fiveCounter    = Color.RED;
            fiboTime.threeCounter   = Color.RED;
            fiboTime.twoCounter     = Color.RED;
            fiboTime.oneCounter1    = Color.RED;
            break;
    }

    var tmpMinutes = Math.floor(time.minutes / 5);
    switch (tmpMinutes) {
        case 0:
            break;

        case 1:
            if (fiboTime.oneCounter1 == Color.RED) {
                fiboTime.oneCounter2 = Color.GREEN;
            } else {
                fiboTime.oneCounter1 = Color.GREEN;
            }
            break;

        case 2:
            if (fiboTime.twoCounter == Color.RED) {
                fiboTime.twoCounter = Color.BLUE;
            } else {
                fiboTime.twoCounter = Color.GREEN;
            }
            break;

        case 3:
            if (fiboTime.threeCounter == Color.RED) {
                fiboTime.threeCounter = Color.BLUE;
            } else {
                fiboTime.threeCounter = Color.GREEN;
            }
            
            break;

        case 4:
            if (fiboTime.threeCounter == Color.RED) {
                fiboTime.threeCounter = Color.BLUE;
            } else {
                fiboTime.threeCounter = Color.GREEN;
            }

            if (fiboTime.oneCounter1 == Color.RED) {
                fiboTime.oneCounter2 = Color.GREEN;
            } else {
                fiboTime.oneCounter1 = Color.GREEN;
            }
            break;

        case 5:
            if (fiboTime.threeCounter == Color.RED) {
                fiboTime.threeCounter = Color.BLUE;
            } else {
                fiboTime.threeCounter = Color.GREEN;
            }

            if (fiboTime.twoCounter == Color.RED) {
                fiboTime.twoCounter = Color.BLUE;
            } else {
                fiboTime.twoCounter = Color.GREEN;
            }
            break;

        case 6:
            if (fiboTime.fiveCounter == Color.RED) {
                fiboTime.fiveCounter = Color.BLUE;
            } else {
                fiboTime.fiveCounter = Color.GREEN;
            }

            if (fiboTime.oneCounter1 == Color.RED) {
                fiboTime.oneCounter2 = Color.GREEN;
            } else {
                fiboTime.oneCounter1 = Color.GREEN;
            }
            break;

        case 7:
            if (fiboTime.fiveCounter == Color.RED) {
                fiboTime.fiveCounter = Color.BLUE;
            } else {
                fiboTime.fiveCounter = Color.GREEN;
            }
            break;

        case 8:
            if (fiboTime.fiveCounter == Color.RED) {
                fiboTime.fiveCounter = Color.BLUE;
            } else {
                fiboTime.fiveCounter = Color.GREEN;
            }

            if (fiboTime.threeCounter == Color.RED) {
                fiboTime.threeCounter = Color.BLUE;
            } else {
                fiboTime.threeCounter = Color.GREEN;
            }
            break;

        case 9:
            fiboTime.fiveCounter = (fiboTime.fiveCounter == Color.RED) ? Color.BLUE : Color.GREEN;
            fiboTime.threeCounter = (fiboTime.threeCounter == Color.RED) ? Color.BLUE : Color.GREEN;
            
            if (fiboTime.oneCounter1 == Color.RED) {
                fiboTime.oneCounter2 = Color.GREEN;
            } else {
                fiboTime.oneCounter1 = Color.GREEN;
            }

            break;

        case 10:
            fiboTime.fiveCounter = (fiboTime.fiveCounter == Color.RED) ? Color.BLUE : Color.GREEN;
            fiboTime.threeCounter = (fiboTime.threeCounter == Color.RED) ? Color.BLUE : Color.GREEN;
            fiboTime.twoCounter = (fiboTime.twoCounter == Color.RED) ? Color.BLUE : Color.GREEN;
            break;  
        
        case 11:
            //   55 minutes   color 5-counter and 3-counter and 2-counter and 1-counter-1
            fiboTime.fiveCounter = (fiboTime.fiveCounter == Color.RED) ? Color.BLUE : Color.GREEN;
            fiboTime.threeCounter = (fiboTime.threeCounter == Color.RED) ? Color.BLUE : Color.GREEN;
            fiboTime.twoCounter = (fiboTime.twoCounter == Color.RED) ? Color.BLUE : Color.GREEN;

            if (fiboTime.oneCounter1 == Color.RED) {
                fiboTime.oneCounter2 = Color.GREEN;
            } else {
                fiboTime.oneCounter1 = Color.GREEN;
            }

            break;
    }

    return fiboTime;
}

function setFiboTime() {
    var fiboTime = getFiboTime();

    document.querySelector('#two-counter').style.backgroundColor = fiboTime.twoCounter;
    document.querySelector('#one-counter-1').style.backgroundColor = fiboTime.oneCounter1;
    document.querySelector('#one-counter-2').style.backgroundColor = fiboTime.oneCounter2;
    document.querySelector('#three-counter').style.backgroundColor = fiboTime.threeCounter;
    document.querySelector('#five-counter').style.backgroundColor = fiboTime.fiveCounter;
}