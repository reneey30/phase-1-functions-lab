// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block > 42){
        return block - 42;
    }
    else{
        return 42 - block;
    }
    
}
function distanceFromHqInFeet(block) {

    const actualBlocks = distanceFromHqInBlocks(block);

    const actualDistance = actualBlocks * 264; 

    return actualDistance;
}
function distanceTravelledInFeet(start, destination) {

    let travelledBlocks = 0;
    if (start > destination){
        travelledBlocks = start - destination;
    }
    if (destination > start){
        travelledBlocks = destination - start;
    }

    return travelledBlocks * 264;

}
function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);

    let fare = 0;

    if (distanceTravelled <= 400) {
        return fare;
    }
    if (distanceTravelled > 400 && distanceTravelled <= 2000){
        fare = ((distanceTravelled - 400) * 2)/100;
        return fare;
    }
    if (distanceTravelled > 2001 && distanceTravelled <= 2500){
        fare = 25;
        return fare;
    }
    if (distanceTravelled > 2500){
        return 'cannot travel that far';
    }

}