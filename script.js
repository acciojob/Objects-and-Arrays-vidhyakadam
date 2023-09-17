const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

const team = players; // Reference to the original array players
const team1 = [...players]; // Copy of the array players
const cap1 = { ...person }; // Copy of the object person

// Testing modifications
players.push("Sarah"); // Modifying the original array
person.name = "Jane"; // Modifying the original object

console.log("Original players array:", players);
console.log("team array (reference to players):", team);
console.log("team1 array (copy of players):", team1);
console.log("Original person object:", person);
console.log("cap1 object (copy of person):", cap1);

