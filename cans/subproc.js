const { spawn, exec } = require("node:child_process")
const { stdin, stdout, stderr, argv } = require("node:process")
// const fs = require('fs')

const subprocess = spawn("echo", ["something", "|", 'tr', 'so', 'fuck'] )
// const subprocess = spawn("ls", ["-l"])


subprocess.stdout.on("data", (data) => {
	console.log(data.toString());
})

// console.log(process.env.PATH)

// console.log(import.meta)
exec("echo something | tr 'so' 'fuck'", (error, stdout, stderr) => {
	console.log(stdout)
})


console.log(__dirname)

exec("open .", (error, stdout, stderr) => {
	console.log(stdout)
})

stdin.on('data', (data) => {
	console.log(data)
})
