
let quote ="";

const quoteButton = document.getElementById('btn-lg');
const quote_display = document.getElementById('quoteDisplay');
const radioButtons = document.getElementsByName('quote_types');
const quote_num = document.getElementById('number_quotes');
const errors = document.getElementById('error');

const generateQuotes = {
   init:function(fragment1,fragment2,fragment3,fragment4,fragment5){
 this.fragment1 = fragment1;
 this.fragment2 = fragment2;
 this.fragment3 = fragment3;
 this.fragment4 = fragment4;
 this.fragment5 = fragment5;
   },

   print:function(){
const fragment1 = Math.floor(Math.random()*(this.fragment1.length));
const fragment2 = Math.floor(Math.random()*(this.fragment2.length));
const fragment3 = Math.floor(Math.random()*(this.fragment3.length));
const fragment4 = Math.floor(Math.random()*(this.fragment4.length));
const fragment5 = Math.floor(Math.random()*(this.fragment5.length));

quote = (this.fragment1[fragment1] + " " + this.fragment2[fragment2] + " " + this.fragment3[fragment3] + this.fragment4[fragment4] + " " + this.fragment5[fragment5]);

return quote;

   }
}

const success = Object.create(generateQuotes);
success.init(
    [
'For some people',
 'Every success',
 'My hope for the future',
 'But hope',
 'Even in the mud and scum of things'
    ],

    [
        'their fear to lose is greater than the desire to succeed',
        'whether it is the biggest or the smallest',
        'not just in the music industry',
        'like heroes',
        'something always'  
    ],
    [
        'so they end up doing nothing and their dreams become impossible',
    'inspires the joy and beauty of life',
    'but in every young girl I meet is that they all realize their worth and ask for it',
    'can prove hard to kill',
    'always sings'
    ],
    [
        '.',
        '!',
        '.',
        '.',
        '!'
    ],
    [
        'Jordan Belfort', 'Gary Vaynerchuk', 'Dr Lucas D. Shallua','Jasleen Kour Gumbler', 'Compton Gage' 
    ]
);


const life = Object.create(generateQuotes);
life.init([
    'Wisdom is knowing I am nothing',
     'When in a relationship',
     'Too many people spend money they have not earned',
     'Sorrow looks back',
     'Nolstalgia in reverse'
],
[
    'love is knowing am everything',
    'a real man does not make his woman jealous of others',
    'to buy things they do not want',
    'worry looks around',
    'the longing for yet another strange land'
],
[
    'and between the two my lives moves',
 'he makes others jealous of his woman',
 'to impress people they do not like',
 'faith looks up',
 'grew especially strong in spring'
],
[
    '.',
    '!',
    '.',
    '.',
    '!'
],
[
 'Nisargadatta Maharaj',
 'Steve Maraboli',
 'Will Rogers',
 'Ralph Waldo Emerson',
 'Vladimir Nabokov'   
     ]);

     //function to generate quotes depending on the type of quotes
function displayQuotes(){
    
    for(let i=0; i<radioButtons.length; i++){
        if(radioButtons[i].checked && quote_num.value === "1"){
            if(radioButtons[i].value === 'successValue'){
                quote_display.innerHTML = success.print();  
            }else{
                quote_display.innerHTML = life.print();
            }
            
        }
    }
}

//generate more quotes depending on number of quotes selected

//button to generate quotes
 quoteButton.addEventListener('click',()=>{

displayQuotes();

});  
 
 


