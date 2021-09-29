import branchesFinder from "./features/branchesFinder";

const ans = branchesFinder(
  [
    { name: "Ladprao", location: [2, 3], currentStock: 7 },
    { name: "Ekkamai", location: [7, 6], currentStock: 3 },
    { name: "Bangmod", location: [6, 4], currentStock: 2 },
  ],
  { location: [8, 9], amount: 20 }
);

console.log(ans);
