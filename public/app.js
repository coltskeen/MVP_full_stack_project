console.log("Loaded");

const $newQuoteBtn = $(".button");

//BUTTON EVENT LISTENER
$newQuoteBtn.on("click", () => {
    console.log("clicked!");
    $.get(`/quotes`, (data) => {
        console.log(data);
    })
})