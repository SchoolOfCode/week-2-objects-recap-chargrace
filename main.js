//Task 1

//My house has 2 stories,
// no parking, 
//2 bedrooms, 
//a garden and 
//an energy efficiency rating of D.
const myHouse= {
stories: 2,
parking: false,
bedrooms: 2,
garden: false,
energyRating: "D",
};


//My car is red, 
//has 4 wheels, 
//power steering, and
//2 seats, 
//and does 20 miles per gallon.

const myCar= {
colour: "red",
wheels: 4,
powerSteering: true,
seats: 2,
mPG: 20,
};

//My favourite film's title is The Dark Knight, 
//it was released in 2008, 
//and the lead actor is Christian Bale.

const myFavouriteFilm = {
    title: "The Dark Knight",
    releaseDate: "2008",
    leadActor: "Christian Bale",
};

//Task 2

let person = {
    name: "Franco",
    likesChocolate: false,
  };

// Below that, use dot notation to console.log the value of the likesChocolate property.
  console.log(person.likesChocolate);

//Then write an if statement that will console.log "Ben loves chocolate" if likesChocolate has a value of true
// else console.log "Ben hates chocolate". The condition for the if, and the name Ben should both be read from the object using dot notation.

// Change the object's values and re-run your code.
// The name and the boolean should affect how your program runs.

if (person.likesChocolate == true) {
    alert([person.name] + " "+ "loves chocolate"); 
    } else {
    alert([person.name] + " "+ "hates chocolate"); 
    }                                             
    
//task 3

let desiredPleasantry = "farewell";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

bensPhrases.smallTalk;
console.log(desiredPleasantry);

//task 4

let me = {
    firstName: "Charlotte",
    lastName: "Bell",
    isBootcamper: true,
  };

  //task 5

  let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

  let urgentText = communication.payload.message.text;

  // If the priority is urgent, then console.log the variable, else do nothing.

  if (communication.payload.message.text.priority = "URGENT") {
    console.log(urgentText)
  } else {}
