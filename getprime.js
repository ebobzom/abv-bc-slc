function getprime(number){
  /*
  number should be a positive integer
  */
  if(number>0){
    let prime =[];
    //generating factors between 2 and number-1
    for (let i=2;i<=number;i++){
      for (let j=2;j<=i;j++){
        //checking for primes
        if (i%j===0){
          break;
        }

      }
      if (i==j){
        prime.push(i);
      }
    }
    return prime;
}
}else{
  return "positive numbers needed"
}