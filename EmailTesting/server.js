const http = require("http")
const nodemailer = require("nodemailer")
const PORT = 3000;

const server = http.createServer((req, res) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: process.env.GMAIL_ID,
            pass: process.env.GMAIL_PASSWORD
        }
    })

    const recevier = {
        from: "codngwthubaid@gmail.com",
        to: "codingwithhammad786@gmail.com",
        subject: "Testing",
        text: "Demo email was send by codngwthubaid"
    }

    auth.sendMail(recevier, (error) => {
        if (error) {
          console.log(error);
        }
        console.log('Success ...');
        res.end()

    })

})

server.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    
})