function maxOfTwo(n1,n2) {
  if (n1 >= n2) {
    return n1;
  }
  else {
    return n2;
  }
}

function maxOfThree(n1,n2,n3) {
  if (n1 >= maxOfTwo(n2,n3)) {
    return n1;
  }
  else {
    return maxOfTwo(n2,n3);
  }
}

function charIsVowel(c) {
  c = c.toLowerCase();
  if ( c==='a' || c==='e' || c==='i' || c==='o' || c === 'u') {
    return true;
  }
  else
    return false;
}

function charIsVowelTwo(c) {
  if ( 'aeiouAEIOU'.indexOf(c) !== -1) {
    return true;
  }
  else if ( 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.indexOf(c) !== -1)
    return false;
  else
    return 'INVALID CHARACTER';
}

function palindrome(s){
  var reversedString = s.split('').reverse().join('')
  if (reversedString === s) {
    return true;
  }
  else {
    return false;
  }
}

function fizzBuzz(n){
  function fizzBuzzTest(x){
    if ( (x%3!==0) && (x%5!==0) )  return x;
    result = '';
    if (x%3===0) result += 'Fizz'
    if (x%5===0) result += 'Buzz'
    return result;
  }
  for (i=1; i<=n; i++){
    console.log(fizzBuzzTest(i));
  }
}

function functionRunner(someNum, someFunc){
  if (someNum > 50) {
    someFunc();
  }
  if (someNum <= 50) {
    console.log("number less than 50")
  }
}