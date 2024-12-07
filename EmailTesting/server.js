const nodemailer = require("nodemailer")
const http = require("http")

const server = http.createServer((req, res) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "",
            pass: ""
        }
    })

    const recevier = {
        from: "",
        to: "",
        subject: "",
        text: ""
    }

    auth.sendMail(recevier, (error) => {
        if (error) {
            throw error
        }
        console.log('Success ...');
        res.end()

    })

})

server.listen(3000)