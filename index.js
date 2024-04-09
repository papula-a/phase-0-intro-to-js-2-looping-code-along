function writeCards(namesArray, eventName) {
    let thankYouCards = [];
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouCards;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

const names = ["Charlie", "Samip", "Ali"];
const eventName = "birthday";
const thankYouCards = writeCards(names, eventName);
console.log(thankYouCards);
countDown(10);
