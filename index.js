const headquarters = 42
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - headquarters);

}

function distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks(blocks) * 264);

}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(start - destination);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }