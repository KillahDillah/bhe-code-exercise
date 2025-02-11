class Sieve {
  NthPrime(n) {
    const min = 2;
    let primes = [];

    let isPrime = true;
    let end = n * 15;

    for (let i = min; i < end; i++) {
      for (let j = min; j < Math.sqrt(end); j++) {
        if (i !== j && i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
      isPrime = true;
    }
    if (n <= min) {
      primes.push(2);
    }
    return primes[n];
  }
}

module.exports = Sieve;
