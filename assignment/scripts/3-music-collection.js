console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, name, duration) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: [name, duration]
    };
    collection.push(album);
    return album;
}
console.log(addToCollection('Love Scene', 'Kiabits', 2022, 'Love Scene', '2:42'));
console.log(addToCollection(`Sor's Tiles`, 'Rien', 2022, `Sor's Tiles`, '2:15'));
console.log(addToCollection('Vinyl And Me', '7&Nine', 2021, 'Nature & Me', '2:05'));
console.log(addToCollection('Mahina', 'Natahsa Ghosh', 2021, 'Mahina', '2:07'));
console.log(addToCollection('Inca Ore / Grouper', 'Grouper', 2008, 'Poison Tree', '3:16'));
console.log(addToCollection('Dragging a Dead Deer Up a Hill', 'Grouper', 2008, `Heavy Water/I'd Rather Be Sleeping`, '2:53'));
console.log(addToCollection('Take Me To The Disco', 'Meg Myers', 2018, 'Numb', '4:22'));
console.log(addToCollection('Take Me To The Disco', 'Meg Myers', 2018, 'Tourniquet', '4:23'));
console.log(collection);



console.log('-------showCollection below--------');
function showCollection(array) {
    console.log(array.length);
    for(album of array) {
        console.log(album.title + ' by ' + album.artist + ', published in ' + album.yearPublished + ': ' + album.tracks[0] + ' ' + album.tracks[1]);
        // I had trouble listing the tracks, they would show up on two seperate lines.
        // I would appreciate notes if you have any :)
    }
}
showCollection(collection); //--> 7



console.log('-------findByArtist below--------');
function findByArtist(searchedArtist) {
    let artistArray = [];
    for(album of collection) {
        if(searchedArtist === album.artist) {
            artistArray.push(album);  
        } 
    }
    return artistArray;
};
console.log(findByArtist('Meg Myers'));
console.log(findByArtist('Grouper'));
console.log(findByArtist('Doja Cat')); //--> []



console.log('--------Search function below--------')
function search(artist, year, trackName) {
    let searchComplete = [];
    for(album of collection) {
        if(artist === album.artist && year === album.yearPublished && trackName ===album.tracks[0]) { 
            //--> album is the object, tracks is a prop, [0] is the index we want to access which is name
            searchComplete.push(album);  
        } else if(artist === undefined || year === undefined || trackName === undefined) {
            return collection;
        }
    }
    return searchComplete;
};
console.log(search('Grouper', 2008, 'Poison Tree'));
console.log(search('Meg Myers', 2018, 'Numb'));
console.log(search('Rien', 2022, `Sor's Tiles`));
console.log(search('Trippie Redd', 2022, 'Super Cell')); //--> []
console.log(search()); //--> Returns entire collection
console.log(search(2022)); //--> Also returns entire collection
console.log(search('7&Nine')); //--> Also returns entire collection
