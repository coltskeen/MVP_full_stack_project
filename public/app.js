console.log("Loaded");

const $newQuoteBtn = $(".button");

//LOADS RANDOM DAILY QUOTE TO THE PAGE ON PAGE LOAD
$.get('/quotes', (data) => {
    console.log(data);
    let randomIndex = Math.floor(Math.random() * 11);
    
    let $quoteDiv = $(".quote");
    let $citation  = $(".citation");

    $quoteDiv.text(data[randomIndex].quote);
    $citation.text(` ~ ${data[randomIndex].author} in ${data[randomIndex].source}`);
})


//BUTTON EVENT LISTENER IF THE USER WANTS A NEW QUOTE
$newQuoteBtn.on("click", () => {
    console.log("clicked!");
    $.get('/quotes', (data) => {
        console.log(data);
        let randomIndex = Math.floor(Math.random() * 11);
        
        let $quoteDiv = $(".quote");
        let $citation  = $(".citation");

        $quoteDiv.text(data[randomIndex].quote);
        $citation.text(` ~ ${data[randomIndex].author} in ${data[randomIndex].source}`);
    })
})