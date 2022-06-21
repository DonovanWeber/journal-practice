export function Entry(title, body){
  this.title = title;
  this.body = body;
}
let newEntry = new Entry("Dear Diary", "I'm an idiot Blah Blah Blah Seven Eight Nine.");

Entry.prototype.countWords = function (){
  let wordArray = this.body.split(" ");
  return wordArray;
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
  return newArrayOfLetters;
};

Entry.prototype.countVowels = function (){
  let array = this.countLetters();
  let newArrayOfVowels = [];
  let newArrayOfConsonants = [];
  array.forEach(function(letter){
    if(/[aeiouAEIOU]/.test(letter)){
      newArrayOfVowels.push(letter);
    }else{
      newArrayOfConsonants.push(letter);
    }
  });
  this.vowels = newArrayOfVowels.length;
  this.consonants = newArrayOfConsonants.length;
};

Entry.prototype.getTeaser = function(){
  let arrayOfSentence = this.countWords();
  let arrayOfTeaser = [];
  console.log(arrayOfSentence);
  for(let i = 0; i < 8; i++) {
    if(arrayOfSentence[i].indexOf(".") > -1) {
      arrayOfTeaser.push(arrayOfSentence[i]);
      return arrayOfTeaser;
    } else {
      arrayOfTeaser.push(arrayOfSentence[i]);
    }
  }
  console.log(arrayOfTeaser);
};

// Entry.prototype.countConsonants = function (){
//   let array = this.countLetters();
//   let newArrayOfConsonants = [];
//   array.forEach(function(letter){
//     if(!/[aeiouAEIOU]/.test(letter)){
//       newArrayOfConsonants.push(letter);
//     }
//   });
//   console.log(newArrayOfConsonants);
// };
// function isLetter(str) {
//   return str.length >= 1 && str.match(/[a-z]/i);
// }
