import fs from 'fs';
import xlsx from 'xlsx';
import path from 'path';
import cron from 'node-cron';
import userSchema from './model/user.js';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}, (err) => {
    console.log(err ? err : 'Connect to the Database Successfully');
})

const file = xlsx.readFile('upload/Task.xlsx')
let excelData = [];
const sheets = file.SheetNames;
for (let i = 0; i < sheets.length; i++) {
    const temp = xlsx.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
    temp.forEach((res) => {
        excelData.push(res)
    })
}

console.log(excelData);

for (let i = 0; i < excelData.length; i++) {
    const data = new userSchema({
        userID: excelData[i].UserID,
        UserName: excelData[i].UserName,
        UserAge: excelData[i].UserAge,
        Gender: excelData[i].Gender
    })

    data.save().then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

const current = path.join(__dirname, "upload");
const destination = path.join(__dirname, "process");
console.log("current", current);
console.log(destination);

cron.schedule('*/2 * * * * *', () => {
    fs.readdir(current, function (err, files) {
        if (err) {
            return console.log("Unable to scan Directory: " + err);
        }

        files.forEach(function (file) {
            console.log(file);
            fs.rename(`${current}/${file}`, `${destination}/${file}`, (err) => {
                if (!err) {
                    console.log("The data has been moved!");
                } else {
                    throw err;
                }
            })
        })
    })
    console.log('The task has running every minute!');
});

