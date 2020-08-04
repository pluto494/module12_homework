const catalogBook = {
    language: "Russian",
    publisher: "ACT",
    type: "Book"
};

const string = 'language';

function getStringValidation (string, catalogBook){
    console.log(string in catalogBook);
};

getStringValidation(string, catalogBook);