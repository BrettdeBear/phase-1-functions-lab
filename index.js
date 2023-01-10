// Code your solution in this file!
const blocks = 42

function distanceFromHqInBlocks(x) {
    if (x>=blocks) {
        return x-blocks;
    } else {
        return blocks-x;
    }
}

function distanceFromHqInFeet(x) {
   return distanceFromHqInBlocks(x) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264;
    }
    else {
        return (destination - start) * 264;
}
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400) {
        return 0;
    }
    else if (feet <= 2000) {
        return (feet - 400) *.02;
    }
    else if (feet <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}