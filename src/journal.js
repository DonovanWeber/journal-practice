export function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function (){
  let wordArray = this.body.split(" ");
  console.log(wordArray.length);
};