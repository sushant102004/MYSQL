let mySQL = require('mysql')

const connection = mySQL.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'sushant@Password1234',
    database: 'libraryDB'
})


connection.connect();
console.log('Connected to database.')

const getAllStudents = () => {
    connection.query('SELECT * FROM students', (error, result) => {
        if(error) return console.log(`Error: ${error}`)
        console.log(result)
    })
}

getAllStudents()

const updateRollNo = (oldRollNo, newRollNo) => {
    connection.query(`UPDATE students SET rollNo = ${newRollNo} WHERE rollNo = ${oldRollNo}`,
        (error, result) => {
            if(error) return console.log(`Error: ${error}`)
            console.log('Roll No Updated.')
        })
}

// updateRollNo(11212551, 11212552)