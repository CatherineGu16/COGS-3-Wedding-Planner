var guests, tables, perTable, leftover, extras;

function run() {
  guests = prompt("How many guests do you have?");
  tables = prompt("How many tables do you want?");

  perTable = Math.floor(guests / tables);
  leftover = guests % tables;
  extras = perTable + 1;

  if (leftover === 0) {
    alert("Your " + guests + " guests will be seated as follows: " + (tables - leftover) +
      " tables of " + perTable + ".");
  } else {
    alert("Your " + guests + " guests will be seated as follows: " + (tables - leftover) +
      " tables of " + perTable + ", and " + leftover + " table of " + extras + ".");
  }
}
