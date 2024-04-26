console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

//Create an empty array named myCollection.
let myCollection=[]

//Create a function named addToCollection. It should have this basic structure:
  // your code here...

  //addToCollection` pushes record object into the array & returns the object

 function addToCollection(collection, artist, title, yearPublished) {
collection.push({ artist, title, yearPublished})

  return collection[5]

 
 }

 



//Use and Test the addToCollection function:

//Add 6 albums to the myCollection array. 
//console.log each album as added using the function's returned value.
//After all are added, console.log the myCollection array.

addToCollection(myCollection,'Kelly','Love1','1997')
addToCollection(myCollection,'Kane','Love2','1999')
addToCollection(myCollection,'Jim','Love3','2000')
addToCollection(myCollection,'Victor','Love4','2001')
addToCollection(myCollection,'Ben','Love5','2002')
addToCollection(myCollection,'Tim','Love6','2003')

console.log(myCollection)



//Create a function named showCollection. This function should:

//Take in a collection parameter. (This allows it to be reused to show any array of album objects.)
 
//Loop through the collection 

//and console.log each album's information formatted within a single string,
//like: TITLE by ARTIST, published in YEARPUBLISHED.


//`showCollection` takes in an array, loops over it, correctly logs each item

function showCollection(collection){
  for (i=0; i < collection.length; i++){
   console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
  }
} 

showCollection(myCollection)




//Add a function named findByArtist. This function should:

//Take in a collection parameter. Remember, we want to be able to search any collection!
//Take in an artist (string) parameter.
//Create an empty array to hold any matching results, if any.
//Loop through the collection and add any album objects with a matching artist to the array.

//Return the array with the matching results. (If no results are found, an empty array should be returned.)
//Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.

 //takes in a collection and artist, then returns an array of matching albums

function findByArtist(collection,artist){
  let match = [];
  for (let i = 0; i < collection.length; i++){

    if (collection[i].artist === artist){
      match.push(collection[i]);
      }
  

    }

    return match;
     

    }


findByArtist(myCollection,'Kelly')





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = { 
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
