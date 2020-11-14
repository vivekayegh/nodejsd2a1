var fs = require("fs");
var filearray = require("./file_name_array.txt");

if ( process.argv.length != 3 ) {
    console.log("Incorrect number of arguments");
    console.log("Correct usage is - node nodejs_day2_assignment1.js <filename>");
    return;  // exit the program
}

var fname = process.argv[2];

for ( i = 0; i < filearray.length; i++) {
    if ( filearray[i] == fname ) {
        console.log("File exists. Enter a new file name");
        return;
    }
}

filearray.push(fname);

var writedata = "var filelist = [";
for ( i = 0; i < filearray.length; i++) {
  writedata = writedata + "\"" + filearray[i] + "\"";
  if ( i != filearray.length - 1 ) {
      writedata = writedata + ",";
     }
  } ;
writedata = writedata + "]" + "\n" + "module.exports = filelist";
console.log(writedata);

fs.writeFile('file_name_array.txt', writedata, function(err) {
    if (err) {
        throw err;
    } else
    {
        console.log ("File name added to array in file_name_array.txt!");
    }       
});

fs.writeFile(fname,'You are awesome.', function(err) {
    if (err) {
        throw err;
    } else
    {
        console.log ("File %s created successfully!",fname);
    }        
});
