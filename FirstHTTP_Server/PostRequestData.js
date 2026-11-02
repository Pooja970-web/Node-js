
const http = require("http");

const myHttp = http.createServer((req, res) => {
    if (req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            console.log("Data received from client:", body);
            res.end("Data received successfully");
        });

    } else {
        res.end("Send a POST request to this server to send data.");
    }
});

myHttp.listen(3000, () => {
    console.log("Server is running on port 3000");
});
