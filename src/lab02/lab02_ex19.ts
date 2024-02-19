function processTime(hourBeggin: number, minBeggin: number, secondBeggin: number, secondDuration: number){
    let hourB: number = hourBeggin * 3600;
    let minB: number = minBeggin * 60;

    let totalTimeSec: number = hourB + minB + secondBeggin + secondDuration;

    let totalTimeHours: number = Math.trunc(totalTimeSec/3600) % 24;

    let totalTimeMin: number = Math.trunc(totalTimeSec%3600) / 60;

    let totalTimeinSec: number = totalTimeSec % 60;

    return `O tempo de processamento é ${totalTimeHours.toString().padStart(2, '0')}:${totalTimeMin.toString().padStart(2,'0')}:${totalTimeinSec.toString().padStart(2,'0')}`;


}