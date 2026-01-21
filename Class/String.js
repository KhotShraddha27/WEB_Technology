let str1= "Hari";
console.log(str1);
console.log(typeof(str1));

//String interpolation
console.log(`My name is :${str1}`);

let fname = "Ram";
console.log(`${fname}`);

const gCount= new String("Hari");//String itself is an object 
console.log(gCount.length);
console.log(gCount.toLowerCase());
console.log(gCount.toUpperCase());
console.log(gCount.charAt(2));
console.log(gCount.indexOf('i'));

//Activity02--all methods --20/01/26
//Character Access Methods
gCount.charAt(0)           // "H"
gCount.charCodeAt(0)       // 72 (ASCII value)
gCount[1]                  // "a"

//Search Methods
gCount.indexOf("i")        // 3
gCount.lastIndexOf("a")    // 1
gCount.includes("ar")     // true
gCount.startsWith("Ha")   // true
gCount.endsWith("ri")     // true

//Extracting parts of string 
gCount.slice(1, 3)         // "ar"
gCount.substring(1, 3)    // "ar"
gCount.substr(1, 2)       // "ar" (deprecated)

//Replace methods
gCount.replace("H", "B")          // "Bari"
gCount.replaceAll("a", "A")       // "HArI"

//Split & Join
gCount.split("")           // ["H", "a", "r", "i"]
gCount.split("a")          // ["H", "ri"]

//Trim methods 
const name = "  Hari  ";
name.trim()                // "Hari"
name.trimStart()           // "Hari  "
name.trimEnd()             // "  Hari"

//Padding methods
gCount.padStart(6, "*")    // "**Hari"
gCount.padEnd(6, "*")      // "Hari**"

//Repeat methods
gCount.repeat(3)           // "HariHariHari"

//Comparison Methods
gCount.localeCompare("Hari")    // 0
gCount.localeCompare("Aari")    // 1
gCount.localeCompare("Zari")    // -1

//Conversion methods
gCount.toString()          // "Hari"
String.fromCharCode(72)    // "H"