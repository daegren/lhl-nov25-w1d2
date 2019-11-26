// Get values from command line arguments (as an array)
// Remove the first two elements from that array
const args = process.argv.slice(2);
// sum = 0
let sum = 0;

// for each element in the arguments provided
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  //   convert element to a number
  const number = parseFloat(arg, 10);
  //   if element is a number AND element is a WHOLE number
  if (!Number.isNaN(number) && Number.isInteger(number)) {
    sum = sum + number;
  }
}
// print out the resulting sum
console.log('Sum of all numbers is:', sum);
