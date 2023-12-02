///////////Part1
const string = 
`ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;
let rows = string.split("\n");
for (let i = 0; i < rows.length; i++) {
  // Split  into individual elements (id, name, occupation, age)
  // Assign them to respective variables.
let [cell1, cell2, cell3, cell4] = rows[i].split(",");
console.log(cell1, cell2, cell3, cell4);
}
//////////Part2
let lines = string.split("\n");
let colNum = lines[0].split(",").length;
let twodArray = [];
for (let line of lines) {
let row = line.split(",");
if (row.length === colNum) twodArray.push(row);
}
console.log(twodArray);
/////////Part 3
let header = lines[0].split(",");
let result = [];
for (let i = 1; i < lines.length; i++) {
let values = lines[i].split(",");
let dataObj = {};
for (let j = 0; j < header.length; j++) {
    dataObj[header[j]] = values[j];
}
result.push(dataObj);
}
console.log(result);
/////////Part 4
// let lines = csvString.split(‘\n’);
// using const map1 = array1.map((x) => x * 2);
let header1 = lines[0].split(",").map((header1) => header1.toLowerCase());
console.log("header|lower-case method:", header1)
result = [];
for (let i = 1; i < lines.length; i++) {
let values = lines[i].split(",");
let dataObj = {};
for (let j = 0; j < header1.length; j++) {
    dataObj[header1[j]] = values[j];
}
result.push(dataObj);

}
console.log("Organized Array with variables: ",result)

console.log(result.pop());
console.log("After pop:", result);
console.log(
    result.splice(1, 0, {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25",
    })
);
console.log("After splice:", result);
console.log(
    result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
);
console.log("After push:", result);
let totalAge = 0;
for (let i = 0; i < result.length; i++) {
    totalAge += parseInt(result[i].age);
    console.log("total ages:", totalAge, result[i].age);
}
let avgAge = totalAge / result.length;
console.log("avgAge:", Math.round(avgAge));
