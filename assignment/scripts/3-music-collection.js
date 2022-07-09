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
console.log(addToCollection('Vinyl & Me', '7&Nine', 2021));
console.log(addToCollection('Mahina', 'Natahsa Ghosh', 2021));
console.log(addToCollection('Inca Ore / Grouper', 'Grouper', 2008));
console.log(addToCollection('Dragging a Dead Deer Up a Hill', 'Grouper', 2008));
console.log(addToCollection('Take Me To The Disco', 'Meg Myers', 2018));

console.log(collection);

function showCollection(array) {
    console.log(array.length);
    for(artist of array) {
        console.log(artist.title + ' by ' + artist.artist + ', published ' + artist.yearPublished);
    }
}
showCollection(collection); //--> 7

function findByArtist(searchedArtist) {
    let artistArray = [];
    for(album of collection) {
        if(searchedArtist === album.artist) {
            artistArray.push(album);  
        } 
    }
    return artistArray;
}
console.log(findByArtist('Meg Myers'));
console.log(findByArtist('Grouper'));
console.log(findByArtist('Doja Cat'));