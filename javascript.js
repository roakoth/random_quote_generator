var quotes = [
    'When you live your life by poor standards, you inflict damage on everyone who crosses your path, especially those you love. <br> -Jordan Belfort',
    'You may not have connections, or an education, or wealth, but with enough passion and sweat, you can make anything happen. <br> -Gary Vaynerchuk',
    'The right reason and motive for success, while pursued in the right way, will trigger divine support, human celebration and personal fulfilment, because the endeavor becomes bigger than oneself. <br> -Dr Lucas D. Shallua',
    'She is that maze, the one you would love to chase. She is the faith, quite missing nowadays. And her heart is a rave, with hopeless barricades. She is the one, whose tears flow, just as lavishly, as her laughter roars! <br> -Jasleen Kour Gumbler',
    'Truly the light is sweet, and a pleasant thing it is for the eyes to behold the sun: But if a man live many years and rejoice in them all; yet let him remember the days of darkness; for they shall be many. And all that cometh is vanity. <br> -Compton Gage'
]


function randomNewQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

    }

    
    

