// Exercise 2: Directory Files Only
// Goal: list only the files (not the folders) in the folder my-folder.
// Required: fs.readdir(directoryPath, callback), fs.lstat(filePath, callback), path.join(dir, item).
// Check every entry with fs.lstat and print only those where stats.isFile() is true.
//
// Expected output (the order may change):
//   File: index.js
//   File: notes.txt
//   File: app.js
//
// Run: node ex02.js

const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "my-folder");

// תרגיל 2: רק הקבצים בתיקייה - ex02.js
// המטרה: להדפיס רק את הקבצים (בלי תיקיות) שבתוך התיקייה my-folder.

// פונקציות חובה: fs.readdir(directoryPath, callback), fs.lstat(filePath, callback), path.join(dir, item) (לבניית הנתיב המלא)

// צריך לבדוק כל פריט עם fs.lstat ולהדפיס רק את אלה ש-stats.isFile() שלהם הוא true.

// פלט לדוגמה (הסדר יכול להשתנות):

// File: index.js
// File: notes.txt
// File: app.js

// write your code here

fs.readdir(directoryPath, (err, items) => {
    if (err) {
        console.error(err);
        return;
    }
    items.forEach(item => {
        const itemPath = path.join(directoryPath, item);
        fs.lstat(itemPath, (err, stats) => {
            if (err) {
                console.error(err);
                return;
            }

            if (stats.isFile()) {
                console.log(`File: ${item}`);
            }
        });

    });
});