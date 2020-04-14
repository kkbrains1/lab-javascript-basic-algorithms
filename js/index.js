
//Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = "Ying Cracker"

//1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`)

//1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = "Raven Adler"

console.log(`The driver's name is ${hacker2}`)

/*
Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. 
*/

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

/*
Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
*/

let upperXspaceName = ""
for (i=0; i < hacker1.length ; i++) {
 upperXspaceName +=  (hacker1[i].toUpperCase() + " ");
} 
console.log(upperXspaceName)


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = ""
for (i = hacker2.length -1 ; i >= 0 ; i--) {
  reverseName += hacker2[i];
} 
console.log(reverseName)

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}

//*Bonus 1:

//Generate 3 paragraphs. Store the text in a variable type of string.

let loremString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt non metus eu interdum. Fusce ac pretium purus, sed mollis ipsum. Nulla volutpat fermentum tristique. Duis molestie at massa et viverra. Curabitur id nisl faucibus, aliquet est quis, finibus neque. Nullam justo elit, pharetra a mauris et, cursus scelerisque ante. Nunc in nibh ac eros suscipit ornare sit amet eu leo. Quisque massa ligula, commodo sed porta eget, fermentum et nisi. Donec ac massa vel neque vestibulum lacinia.

Suspendisse a mollis odio, at molestie nisl. Quisque pretium ut justo quis vulputate. Proin laoreet semper sapien laoreet laoreet. Etiam commodo eget felis at maximus. Aenean dapibus nisi justo, non mollis tortor porta eget. Integer quis neque egestas nulla tincidunt sagittis. Praesent iaculis ullamcorper libero. Phasellus erat arcu, venenatis maximus tincidunt vitae, fringilla quis felis. Integer quis nibh eu magna congue interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc blandit facilisis orci, pulvinar sodales ante venenatis eget. Donec non ultricies massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce quis sem et libero placerat venenatis finibus vitae velit. Morbi nec hendrerit augue.

Morbi pharetra egestas bibendum. Nullam porttitor, tortor non ullamcorper tincidunt, velit felis fringilla arcu, nec bibendum nisi turpis a elit. In imperdiet, tellus ut suscipit lacinia, nulla purus volutpat enim, a mattis dolor felis nec lorem. Duis tellus odio, sollicitudin sit amet arcu at, lacinia semper ipsum. Quisque laoreet dui a tempus ornare. Morbi placerat cursus nulla. Morbi viverra turpis ac metus feugiat, vitae fringilla magna molestie. Duis in massa dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc commodo pharetra mollis. Suspendisse lobortis eros velit, non gravida leo tempus ullamcorper.`

console.log(typeof loremString);

//Make your program count the number of words in the string.

let loremArray = loremString.replace(/[\n]/g, " ").split(" ")
//console.log(loremArray)
console.log(loremArray.length)
//console.log(loremString.split(" ").length);

// aaargh these line breaks! :/

//Make your program count the number of times the Latin word et appears.

//let loremArray = loremString.split(" ")
let count = 0

for (word of loremArray) {
  if (word.replace('et,', 'et') === 'et') {
  count++;
  }
} console.log(count);

/*Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:*/

phraseToCheck = "race car"


console.log(phraseToCheck.replace(' ', ''))

let reversePhrase = ""
for (i = phraseToCheck.length -1 ; i >= 0 ; i--) {
  reversePhrase += phraseToCheck[i];
} 
console.log(reversePhrase.replace(' ', ''))

if (phraseToCheck.replace(' ', '') === reversePhrase.replace(' ', '') ) {
  console.log(`Yeaaaah! You found a palindrome`)
} else {
  console.log(`No palindrome here`)
}

// end of iteration 1 :)