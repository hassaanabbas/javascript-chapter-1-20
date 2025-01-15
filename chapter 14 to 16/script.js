// let Literal = [];

// let studentNames = {};

// let string = ["Hassaan Ahmed", "Aliyan", "Ali"];

// let numbers = [1, 2, 3];

// let boolean = [true , false];

// let mixedArray = ["Hassaan", 21 , true]

// let qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h2>Qualification<h2>");
// document.write("<br> 1) " + qualification[0] + "</br>");
// document.write("<br> 2) " + qualification[1] + "</br>");
// document.write("<br> 3) " + qualification[2] + "</br>");
// document.write("<br> 4) " + qualification[3] + "</br>");
// document.write("<br> 5) " + qualification[4] + "</br>");
// document.write("<br> 6) " + qualification[5] + "</br>");
// document.write("<br> 7) " + qualification[6] + "</br>");
// document.write("<br> 8) " + qualification[7] + "</br>");

// let students = ["aliyan" , "Uzair" , "Hassan"]
// let scores = [300 , 390 , 415];

// document.write("Score of aliyan is : "  + scores[0] + " &nbsp Percentage : " + scores[0]/500*100 + "%");
// document.write("<br> Score of Uzair is : "  + scores[1] + " &nbsp Percentage : " + scores[1]/500*100 + "%");
// document.write("<br> Score of Hassan is : "  + scores[2] + " &nbsp Percentage : " + scores[2]/500*100 + "%");



// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// console.log("Initial colors array:", colors);


// let addStarting = prompt("What color would you want to add to the starting of the array?");
// colors.unshift(addStarting);  
// console.log("Updated array after adding color to the starting:", colors);


// let Addend = prompt("What color would you like to add to the end of the array?");
// colors.push(Addend); 
// console.log("Updated array after adding color to the end:", colors);


// colors.unshift("Brown", "Margenta"); 
// console.log("Updated array after adding two colors to the beginning:", colors);


// colors.shift();  
// console.log("Updated array after deleting the first color:", colors);


// colors.pop(); 
// console.log("Updated array after deleting the last color:", colors);


// let Addindex = Number(prompt("At which index do you want to add a color?"));
// let coloradd_index = prompt("What color would you like to add?");
// colors.splice(Addindex, 0, coloradd_index); 
// console.log("Updated array after adding color at specified index:", colors);


// let index_Delete = Number(prompt("At which index do you want to delete colors?"));
// let delete_count = Number(prompt("How many colors do you want to delete?"));
// colors.splice(index_Delete, delete_count);  
// console.log("Updated array after deleting colors:", colors);


// let scores = [85, 92, 78, 90, 88, 76, 95, 80];
// console.log("Scores of Students : " + scores);

// scores.sort((a, b) => a - b)
// console.log("Order of Score of Students " + scores);

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Sukkur", "Nawabshah"];

// let selected = cities.slice(0, 3);

// console.log("Cities Array:", cities);
// console.log("Selected Cities Array:", selected);

// let string = ["This", "is", "my", "cat"]; 
// console.log(string)
// let combine = string.join(" ");
// console.log(combine)


// let value = [];

// value.push("a");
// value.push("b");
// value.push("c");
// value.push("d");


// console.log("Queue after adding values:", value);

// let Out = value.shift(); 
// console.log("Removed value (First Out):", Out);

// console.log("Queue after removal:", value);


// let companies = ["Nokia", "Samsung", "Sony", "TCL"];
// document.write('<select>')

// for (let i = 0; i < companies.length; i++) {
//     document.write('<option>' + companies[i] + '</option>');
// }

// document.write('</select>');

// let value = [];

// value.push("a");
// value.push("b");
// value.push("c");
// value.push("d");

// console.log("Queue after adding values:", value);

// let Out = value.pop(); 
// console.log("Removed value (Last In First Out):", Out);


// console.log("Queue after removal:", value);
