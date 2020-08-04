const catalogBook = {
    language: "Russian",
    publisher: "ACT",
    type: "Book"
};

const bookOne = Object.create(catalogBook);

bookOne.name = 'Brave New World';
bookOne.author = 'Aldous Huxley';

function getShowBook(bookOne) {
    for (let key in bookOne) {
        if (bookOne.hasOwnProperty(key)) {
            console.log(key, bookOne[key]);
        }
    }
};

getShowBook(bookOne)