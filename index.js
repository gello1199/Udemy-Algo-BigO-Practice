// write a function that calculates the sum of all numbers from 1 up to (and including) some number n

// example 1
// function addUpTo(n) {
//     let total = 0
//     for(let i = 1; i <= n; i++) {
//         total += i
//     }
//     return total
// }

// console.log(addUpTo(6))

// let t1 = performance.now()
// addUpTo(1000000000)
// let t2 = performance.now()
// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`)

// Example 2
// function addUpTo(n) {
//     return n * (n + 1) / 2
// }

// console.log(addUpTo(6))

// let t1 = performance.now()
// addUpTo(1000000000)
// let t2 = performance.now()
// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`)

// Visualizing Time Complexities

function addUpToFirst(n) {
    var total = 0;
    for (var i = 0; i <= n; i++) {
      total += i;
    }
    return total;
  }

//   console.log(addUpToFirst(10))

  function addUpToSecond(n) {
    return n * (n + 1) / 2;
  }

  function countUpAndDown(n) {
    console.log("Going up!");
    for (var i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (var j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
  }

//   console.log(countUpAndDown(10))

  function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
  }

//   console.log(printAllPairs(5))

  function numberOfHalves(n) {
    var count = 0;
    while (n > 1) {
      n /= 2;
      count++;
    }
    return count;
  }

  function totalNumberOfHalves(n) {
    var total = 0;
    for (var i = 0; i < n; i++) {
      total += numberOfHalves(n);
    }
    return total;
  }

  function logAllBinaries(n) {
    var count = 0;
    var lastNum = "1".repeat(n);
    while (count.toString(2) !== lastNum) {
      console.log(count.toString(2).padStart(n, "0"));
      count++;
    }
    console.log(lastNum);
  }

