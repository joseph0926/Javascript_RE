const ids = new Set([1, 2, 3]);
if (ids.has(2)) {
  console.log(ids.add(2));
}

ids.delete(3);

// ids.entries();
for (const id of ids.values()) {
  console.log(id);
}

const personData = new Map([["key", { id: "messi" }]]);
console.log(personData.get());
