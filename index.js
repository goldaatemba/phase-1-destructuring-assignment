// Strings
const farmAnimals = 'cow horse sheep pig chicken';

// 1. Destructure the animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Destructure with Bolt the horse removed
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Destructure with Little the chicken removed
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Destructure using full color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure using only the first letter (excluding indigo)
const [r, o, y, g, b, , v] = colors;

// 6. Assign only indigo using "indg"
const [, , , , , indg] = colors;

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 7. Destructure all variables from the muppet object
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 8. Destructure song2, song4, nestedJob, and nestedPartner
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

// Console log statements to verify values (optional)
console.log(moo, neigh, baa, oink, cluck);
console.log(bessie, dolly, babe, little);
console.log(blackAndWhite, black, pink);
console.log(red, orange, yellow, green, blue, indigo, violet);
console.log(r, o, y, g, b, v);
console.log(indg);
console.log(muppetName, color, song, job, partner);
console.log(song2, song4, nestedJob, nestedPartner);
