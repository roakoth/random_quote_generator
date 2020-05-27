var beg = ['For some people',
'Every success',
'My hope for the future',
'But hope',
'Even in the mud and scum of things'
]

var middle = ['their fear to lose is greater than the desire to succeed',
'whether it is the biggest or the smallest',
'not just in the music industry',
'like heroes',
'something always'
]

var end = ['so they end up doing nothing and their dreams become impossible.',
'inspires the joy and beauty of life.',
'but in every young girl I meet is that they all realize their worth and ask for it.',
'can prove hard to kill',
'always sings.'
]

 var authors = [
     'Jordan Belfort', 'Gary Vaynerchuk', 'Dr Lucas D. Shallua','Jasleen Kour Gumbler', 'Compton Gage']

const quoteButton = document.getElementById('btn-lg');
let quote = '';

function randomNumber(){
    var randomNum = Math.floor(Math.random()*5);
    return randomNum;
}

function randomNewQuote(){
    var begRandom = randomNumber();
    var middleRandom = randomNumber();
    var endRandom = randomNumber();
    var authorsRandom = randomNumber();

   quote = beg[begRandom] + ' ' + middle[middleRandom] + ' ' + end[endRandom]+ ' ' + authors[authorsRandom];
  
    return quote; 

}

quoteButton.addEventListener('click',()=>{
    let CompleteQuote = randomNewQuote();
    document.getElementById('quoteDisplay').innerHTML = CompleteQuote;   
});



    
    
    

    
    

