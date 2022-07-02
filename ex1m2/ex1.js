let guanciale = 250;
let eggyolks = 6;
let blackpepper = 4;
let cheese = 50;
let spaghetti = 400;
let water = 4000;
let salt = 15;

console.log("INGREDIENTS");
console.log("\nSPAGHETTI: ", spaghetti); 
console.log("\nGUANCIALE: ", guanciale);
console.log("\nPECORINO ROMANO: ", pecorinoRomano);
console.log("\nRAW BLACK PEPPER: ", blackPepper);
console.log("\nWATER: ", water);
console.log("\nSALT: ", salt);

let pinchOfBlackPepper = blackPepper - 1;
blackPepper -= 1;
let eggsAndCheese = eggYolks + pecorinoRomano;
console.log("\nINCORPORATED EGG YOLKS AND PECORINO: ", eggsAndCheese);
let rawEggSauce = eggsAndCheese + pinchOfBlackPepper;
console.log("\nADDED A PINCH OF PEPPER: ", rawEggSauce);

let pot = water + salt;
console.log("\nBOILING THE WATER WITH A LITTLE SALT: ", pot);
pot += spaghetti;
console.log("\nDROPPING SPAGHETTI IN THE WATER: ", pot);
let pastaWater = 350 + 2; 
console.log("\nSETTING ASIDE A LITTLE BIT OF STARCHY, SALTY, PASTA WATER: ", pastaWater);
pot -= pastaWater; 
salt -= 2; 

let absorbingRate = 1.8; 

let absorbedWater = spaghetti * absorbingRate; 

let drainedWater = water - pastaWater - absorbedWater;

let cookedSpaghetti = pot - drainedWater - salt; 

console.log("\nSPAGHETTI ARE READY: ", cookedSpaghetti);

let fryPan = guanciale + pastaWater;
console.log("\nCREATING THE SAUCE WITH GUANCIALE AND PASTA WATER: ", fryPan);
console.log(blackPepper);
let carbonara = cookedSpaghetti + fryPan + rawEggSauce + blackPepper; 
console.log("\nSERVING CARBONARA: ", carbonara);

