const net = require("net")

const client = net.createConnection({ path: "/tmp/node_c_socket"})

client.on("connect", () => {
	console.log("Connected to the C server!")
})


const b = Buffer.alloc(8)

b[0] = 0x41
b[1] = 0x42
b[2] = 0x43

client.write(b)
client.end(b)

client.on("data", (data) => {
	console.log("Received from C server:", data);
})



client.on("end", () => {
	console.log("connection end")
})

