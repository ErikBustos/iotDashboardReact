export function transformToTemperature(sensorData, returnValue) {
    let graphData = [];
    let averageTemp= 0;

    sensorData.forEach(element => {
        averageTemp += element.airTemperature;
        graphData.push({x: new Date(element.timestamp), y:element.airTemperature})
    });

    averageTemp = (averageTemp/graphData.length).toFixed(2);

    if(returnValue === 'graphData')
        return graphData;
    else
        return averageTemp
}

export function transformToSoilMoisture(sensorData, returnValue) {
    let graphData = [];
    let average= 0;

    sensorData.forEach(element => {
        average += parseFloat(element.soilHumidity);
        graphData.push({x: new Date(element.timestamp), y:element.soilHumidity})
    });

    average = (average/graphData.length).toFixed(2);

    if(returnValue === 'graphData')
        return graphData;
    else
        return average
}

export function transformAirHumidity(sensorData, returnValue) {
    let graphData = [];
    let average= 0;

    sensorData.forEach(element => {
        average += element.airHumidity;
        graphData.push({x: new Date(element.timestamp), y:element.airHumidity})
    });

    average = (average/graphData.length).toFixed(2);

    if(returnValue === 'graphData')
        return graphData;
    else
        return average
}

export function transformLight(sensorData, returnValue) {
    let graphData = [];
    let average= 0;

    sensorData.forEach(element => {
        average += parseFloat(element.light);
        graphData.push({x: new Date(element.timestamp), y:element.light})
    });

    average = (average/graphData.length).toFixed(2);

    if(returnValue === 'graphData')
        return graphData;
    else
        return average
}

