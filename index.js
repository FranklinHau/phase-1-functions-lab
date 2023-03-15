const dist42St = 42;
const ft264 = 264;

function distanceFromHqInBlocks(customerDist){
    return Math.abs(customerDist - dist42St);
}
distanceFromHqInBlocks();
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    return  distanceFromHqInBlocks(someValue) * ft264;
 }    
 distanceFromHqInFeet();

function distanceTravelledInFeet(customerDist1, customerDist2){
    return Math.abs((customerDist1 - customerDist2)) * ft264;
   }

function calculatesFarePrice(customerDist1, customerDist2){
    distanceTravelledInFeet(customerDist1, customerDist2);
    
      if (distanceTravelledInFeet(customerDist1, customerDist2) <= 400
     ){
        return distanceTravelledInFeet(customerDist1, customerDist2) * 0
     }
  }
  function calculatesFarePrice(customerDist1, customerDist2){
    distanceTravelledInFeet(customerDist1, customerDist2);
    const flatFare = 25
      if (distanceTravelledInFeet(customerDist1, customerDist2) <= 400
     ){
        return distanceTravelledInFeet(customerDist1, customerDist2) * 0;
     }
    else if(distanceTravelledInFeet(customerDist1, customerDist2) <= 2000 ){
        return (distanceTravelledInFeet(customerDist1, customerDist2) - 400) *     0.02
    }
    else if(distanceTravelledInFeet(customerDist1, customerDist2) <= 2500){
       return distanceTravelledInFeet(customerDist1, customerDist2) * 0 + 25
  }
    else{
      return 'cannot travel that far'
    }
  }