const fs = require('fs');
const initSqlJs = require('../sqljs-wasm/sql-wasm');
const filebuffer = fs.readFileSync('out/fdbj/dictionary.db');
initSqlJs().then(function (SQL) {
    // Load the db
    const db = new SQL.Database(filebuffer);
    const diwr_1 = db.exec("SELECT name FROM sqlite_master WHERE type='table';")
    const diwr_2 = db.exec("SELECT * FROM description")
    console.log(diwr_2.values().next().value.values[0])

    for(yg of diwr_1.values()){
        // console.log(yg)
    }
}).catch(err => console.error(err))
