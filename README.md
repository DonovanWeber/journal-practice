# _Journal Practice_

#### By Donovan Weber and Frank Timmons

#### 

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap 

## Description

## Setup/Installation Requirements

* Github
* Go to the first level of the directory
* Open /index.html

## Known Bugs

No known bugs contact me at [donovanweber03@gmail.com](mailto:donovanweber03@gmail.com) if any bugs are found.

## Specs

Describe: Entry(title, body)

Test: "An object will be created using a title and body passed in as an argument."  
Code:  
newEntry = new Entry("Dear Diary","I'm an idiot")
Output: newEntry.title = "Dear Diary" newEntry.body = "I'm an idiot"

Test: "An entry object's body will have it's words counted."
Code:
newEntry = new Entry("Dear Diary","I'm an idiot")
newEntry.countWords();
Output: 3

Describe: countLetters();

Test:"It will count all letters inside of the array"
Code:let arrayOfLetters = this.body.trim().split("");
countLetters("Dear Diary", "I'm an idiot")
Expected Output: 9
## License

[MIT](https://choosealicense.com/licenses/mit/)