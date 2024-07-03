// @ts-check

const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];
const breakLine = () => console.log("\n**************************\n");

/*---------- Question 1 ----------*/
names.forEach((name) => console.log(name));
breakLine();

/*---------- Question 2 ----------*/
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));
breakLine();

/*---------- Question 3 ----------*/
const provincesAsUpperCase = provinces.map((province) =>
  province.toUpperCase()
);
console.log(provincesAsUpperCase);
breakLine();

/*---------- Question 4 ----------*/
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);
breakLine();

/*---------- Question 5 ----------*/
const sortedProvinces = provinces.toSorted();
console.log(sortedProvinces);
breakLine();

/*---------- Question 6 ----------*/
const filteredProvincesLength = provinces.filter(
  (province) => !province.includes("Cape")
).length;
console.log(filteredProvincesLength);
breakLine();

/*---------- Question 7 ----------*/
const nameHasSArray = names.map((name) => {
  const nameAsArray = name.split("");
  return nameAsArray.some((char) => char.toLowerCase() === "s");
});
console.log(nameHasSArray);
breakLine();

/*---------- Question 8 ----------*/
const handler = (acc, current, index) => {
  acc[current] = provinces[index];
  return acc;
};
const personsProvinces = names.reduce(handler, {});
console.log(personsProvinces);
