//Array -> can store multiple data of different types

let x=[21,"Samridhi"]
console.log(x);
console.log("-------------------------------");

let movies=["Avengers","PK","Harry Potter","GOT"]
let hit=[1,2,3,4]
console.log(movies);
console.log("-------------------------------");
console.log(typeof(movies));
console.log("-------------------------------");
//indexing -> asking for a specific location value

console.log(movies[0]);
console.log("-------------------------------");
console.log(movies[5]); //undefined-> because index loc 5 is not present 
console.log("-------------------------------");
console.log(movies[movies.length-1])
console.log("-------------------------------");
console.log(movies.length);
console.log("-------------------------------");

//slicing -> slicing the array as asking for a specific range 

console.log(movies.slice(1,4));// takes from 1-3 4th is not included
console.log("-------------------------------");
console.log(movies.slice(-1)); // starts from last 
console.log("-------------------------------");
console.log(movies.slice(-2));
console.log("-------------------------------");
console.log(movies.slice(1)); // starting till end
console.log("-------------------------------");
console.log(movies.indexOf("PK")); // find the index of a particular location
console.log("-------------------------------");
console.log(movies.concat(movies,hit)); // concatinating two arrays
console.log("-------------------------------");
let newarr=movies.concat(hit)
console.log(newarr);

// adding and removing elements in an array
//push    => add element at the end
//pop     => delete element from the end
//shift   => delete elements from the start
//unshift => insert new elements at the start
//splice  => 
    console.log("-------------------------------");
movies.push("dark")
console.log(movies);
console.log("-------------------------------");
movies.pop()
console.log(movies);
console.log("-------------------------------");
movies.shift()
console.log(movies);
console.log("-------------------------------");
movies.unshift("dark")
movies.splice(2,0,"train to busan") // from where we have to add or delete , how many we have to delete ,"what we have to add"
console.log(movies);
console.log("-------------------------------");
movies.splice(2,1)  // from where we have to delete and till where we have to delete
console.log(movies); 
console.log("-------------------------------");





