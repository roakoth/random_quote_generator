//Function to generate quotes
let quote ="";
const generateQuotes = {
   init:function(fragment1,fragment2,fragment3,fragment4){
 this.fragment1 = fragment1;
 this.fragment2 = fragment2;
 this.fragment3 = fragment3;
 this.fragment4 = fragment4;
   },

   print:function(){
const fragment1 = Math.floor(Math.random()*(this.fragment1.length));
const fragment2 = Math.floor(Math.random()*(this.fragment2.length));
const fragment3 = Math.floor(Math.random()*(this.fragment3.length));
const fragment4 = Math.floor(Math.random()*(this.fragment4.length));

quote = (this.fragment1[fragment1] + " " + this.fragment2[fragment2] + " " + this.fragment3[fragment3] + " " + this.fragment4[fragment4]);

return quote;

   }
}

//Success quotes
let success = new Map();
success.set(
 "begSuccess", ['For some people',
 'Every success',
 'My hope for the future',
 'But hope',
 'Even in the mud and scum of things']);

 success.set("middleSuccess",[
    'their fear to lose is greater than the desire to succeed',
    'whether it is the biggest or the smallest',
    'not just in the music industry',
    'like heroes',
    'something always'    
 ]);
 success.set("endSuccess",[
    'so they end up doing nothing and their dreams become impossible',
    'inspires the joy and beauty of life',
    'but in every young girl I meet is that they all realize their worth and ask for it',
    'can prove hard to kill',
    'always sings'    
 ]);
 success.set("authorsSuccess",[
    'Jordan Belfort', 'Gary Vaynerchuk', 'Dr Lucas D. Shallua','Jasleen Kour Gumbler', 'Compton Gage' 
 ]);

 //Life quotes 
 let life = new Map();
 life.set(
     "begLife", [
     'Wisdom is knowing I am nothing',
     'When in a relationship',
     'Too many people spend money they have not earned',
     'Sorrow looks back',
     'Nolstalgia in reverse' 
 ]);
 life.set("middleLife",[
    'love is knowing am everything',
    'a real man does not make his woman jealous of others',
    'to buy things they do not want',
    'worry looks around',
    'the longing for yet another strange land'
 ]);
 life.set("endLife",
 ['and between the two my lives moves',
 'he makes others jealous of his woman',
 'to impress people they do not like',
 'faith looks up',
 'grew especially strong in spring']);
 life.set("authorLife",
 [
    'Nisargadatta Maharaj',
    'Steve Maraboli',
    'Will Rogers',
    'Ralph Waldo Emerson',
    'Vladimir Nabokov'   
 ]);

 //converting map success values into an array
const successQuotes = [...success.values()]

//converting map life values into an array
const lifeQuotes = [...life.values()]
console.log(lifeQuotes);

// const quoteButton = document.getElementById('btn-lg');
// const quote_display = document.getElementById('quoteDisplay');
// const quote_dropdown = document.getElementById('quote-type');
// let quote = '';
// let quote_type = 1;
// let quote_num = 1;

//function to generate random number
// function randomNumber(){
//     var randomNum = Math.floor(Math.random()*5);
//     return randomNum;
// }

//function to generate quotes
// function randomNewQuote(){
//     var begRandom = randomNumber();
//     var middleRandom = randomNumber();
//     var endRandom = randomNumber();
//     var authorsRandom = randomNumber();

// quote = begSuccess[begRandom] + ' ' + middleSuccess[middleRandom] + ' ' + endSuccess[endRandom]+ ' ' + authorsSuccess[authorsRandom];
   
    //quote = begLife[begRandom] + ' ' + middleLife[middleRandom] + ' ' + endLife[endRandom]+ ' ' + authorsLife[authorsRandom]; 
    
 
//     return quote; 

// }

// quoteButton.addEventListener('click',()=>{
   
//     let CompleteQuote = randomNewQuote(quote_type);
//     quote_display.innerHTML = CompleteQuote;   
// });



    
    
    

    
    

