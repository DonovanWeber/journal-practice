export function Entry(title, body){
  this.title = title;
  this.body = body;
}
let newEntry = new Entry("Dear Diary", "I'm an idiot");

Entry.prototype.countWords = function (){
  let wordArray = this.body.split(" ");
  console.log(wordArray.length);
};

Entry.prototype.countLetters = function (){
  let arrayOfLetters = this.body.split("");
  let newArrayOfLetters = [];
  for(let i = 0; i < arrayOfLetters.length; i++) { 
    let letter =  arrayOfLetters[i];
    if (!/[^a-zA-Z]/.test(letter)){
      newArrayOfLetters.push(letter);
    }
  }
  return newArrayOfLetters.length;
};

// function isLetter(str) {
//   return str.length >= 1 && str.match(/[a-z]/i);
// }
