const hqStreetNumber = 42;
const blocksInFeet = 264;

function distanceFromHqInBlocks(streetNumber) {
    const blocks = Math.abs(streetNumber - hqStreetNumber);
    return blocks;
  }

  function distanceFromHqInFeet(streetNumber) {
    const distanceInBlocks = distanceFromHqInBlocks(streetNumber);
    const distanceInFeet = distanceInBlocks * blocksInFeet;
    return distanceInFeet;
  }

  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    const distanceInFeet = blocks * blocksInFeet;
    return distanceInFeet;
  }

  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    let farePrice;
  
    if (distanceInFeet <= 400) {
      farePrice = 0;
    } else if (distanceInFeet <= 2000) {
      farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      farePrice = 25;
    } else {
      farePrice = 'cannot travel that far';
    }
  
    return farePrice;
  }