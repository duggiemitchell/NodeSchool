var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filtered = numbers.filter(function(numbers) {
  return numbers % 2 ===0; // filtering even numbers
})
console.log(filtered); // [2, 4, 6, 8, 10]
