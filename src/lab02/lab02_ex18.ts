function trainArrival(departureHour: number, departureMin: number, durationHour:number, durationMin: number):string{
    let hourArrivalMin: number = departureHour * 60 + departureMin;
    let durationHourtoMin: number = durationHour * 60 + durationMin;
    let arrivalTimeMin: number = hourArrivalMin + durationHourtoMin;

    let hourArrival: number = Math.floor(arrivalTimeMin /60) % 24; // horas e minutos da chegada convertido 
    let minArrival: number = arrivalTimeMin % 60;

    if (hourArrival < departureHour || hourArrival === departureHour && minArrival < departureMin){
        return `O comboi chega no dia seguinte às ${hourArrival.toString().padStart(2, '0')}:${minArrival.toString().padStart(2,'0')}`;
    }else{
        return `O comboio chega às  `
    }
}