const string = "Привет! Как дела?";

const vowels = ["у", "е", "ы", "а", "о", "и", "я", "ё", "э"];

const getVowels = stringToFilter => {
  let extracterVowels = "";

  for(let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();
    
    if(vowels.includes(currentLetter)) {
      extracterVowels +=currentLetter;
    }
   
  }

  return extracterVowels;
}

console.log(getVowels(string));