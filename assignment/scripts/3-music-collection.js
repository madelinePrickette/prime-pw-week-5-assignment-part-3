console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let record = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    collection.push(record);
    return record;
}

console.log(addToCollection('Love Scene', 'Kiabits', 2022));
console.log(addToCollection(`Sor's Tiles`, 'Rien', 2022));
console.log(addToCollection('Nature & Me', '7&Nine', 2021));
console.log(addToCollection('Mahina', 'Natahsa Ghosh', 2021));
console.log(addToCollection('Poison Tree', 'Grouper', 2008));
console.log(addToCollection('Alien Observer', 'Grouper', 2011));

console.log(collection);