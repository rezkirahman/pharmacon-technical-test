
function countNumbers(input) {
    const inputString = input.toString()
    const counts = {};
    for (const char of inputString) {
      if (!counts[char]) {
        counts[char] = 1;
      } else {
        counts[char]++;
      }
    }
    for (let i = 0; i <= 9; i++) {
      if (!counts[i]) {
        counts[i] = 0;
        console.log(`The number ${i} appears ${counts[i]} times`);
      }
      else {
        console.log(`The number ${i} appears ${counts[i]} times`);
      }
    }
    return counts;
  }

countNumbers(349139856815555);