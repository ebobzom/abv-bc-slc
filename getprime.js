function getprime(number){
    /*
     This function accept a positive interger
     parameter and returns an array of prime
     numbers between 0 and that number.
    */
      if (number>0){
      let primeNumbers=[];
      //generating numbers inbetween 2 and number
        for (let i=2; i<=number;i++){
          //testing for primes
          for (let j=2; j<=i;j++){

            if (i%j===0){
              break;
            }
          }
          if (i==j){
            primeNumbers.push(i);
          }

        }
        return primeNumbers;
      }else{
        return 'positive numbers needed'
      }
    }