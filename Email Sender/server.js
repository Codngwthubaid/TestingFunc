// // const express = require("express")
// // const dotenv = require("dotenv");
// // const PORT = 3000
// // const nodemailer = require("nodemailer");

// // const app = express()
// // dotenv.config()

// // app.use(express.static("public"))
// // app.use(express.json())

// // app.get("/",(req,res)=>{
// //     res.sendFile(__dirname + "public/index.html")
// // })

// // app.post("/",(req,res)=>{
// //     console.log(req.body);

// //     const transport = nodemailer.createTransport({
// //         host: "smtp.gmail.com",
// //         port: 587,
// //         service: "gmail",
// //         secure: true,
// //         auth: {
// //             user: process.env.MY_EMAIL,
// //             pass: process.env.MY_PASSWORD
// //         }
// //     })

// //     const optionMails = {
// //         from: req.body.email,
// //         to: process.env.MY_EMAIL,
// //         subject:`Message from ${req.env.email}: ${req.body.subject}`,
// //         text: req.body.message
// //     }


// //     transport.sendMail(optionMails,(error,info)=>{
// //         if(error){
// //             console.log(error);
// //             res.send("error");
// //         }
// //         else{
// //             console.log("Message Send" + info.response);
// //             res.send("success");
// //         }
// //     })
// // })


// // app.listen(PORT,()=>{
// //     console.log(`Server is live on http://localhost:${PORT}`);
// // })

// const express = require("express")
// const dotenv = require("dotenv");
// const PORT = 3000

// const app = express()
// dotenv.config()

// app.use(express.static("public"))
// app.use(express.json())

// const http = require("http")
// const nodemailer = require("nodemailer")

// const server = http.createServer((req, res) => {
//     const auth = nodemailer.createTransport({
//         service: "gmail",
//         secure: true,
//         port: 465,
//         auth: {
//             user: process.env.MY_EMAIL,
//             pass: process.env.MY_PASSWORD
//         }
//     })


//     const recevier = {
//         from: req.body.email,
//         to: process.env.MY_EMAIL,
//         subject: `Message from ${req.body.email}: ${req.body.subject}`,
//         text: req.body.message
//     }

//     auth.sendMail(recevier, (error, emaiResponse) => {
//         if (error) {
//           throw new error
//         }
//         else {
//             console.log("Message Send" + emaiResponse);
//         }
//     })
// }) 


// app.listen(PORT,()=>{
//     console.log(`Server is live on http://localhost:${PORT}`);
// })


// const express = require("express");
// const app = express();
// const nodemailer = require("nodemailer");
// require('dotenv').config();

// app.use(express.static('public'));
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

// app.post("/", (req, res) => {
//     console.log(req.body);

//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         port: 465,
//         secure: true, 
//         auth: {
//             user: process.env.MY_EMAIL,
//             pass: process.env.MY_PASSWORD,
//         },
//     });

//     const mailOptions = {
//         from: req.body.email,
//         to: process.env.MY_EMAIL,
//         subject: `Message from ${req.body.email}: ${req.body.subject}`,
//         text: req.body.message
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.send("error");
//         } else {
//             console.log("Email sent: " + info.response);
//             res.send("success");
//         }
//     });
// });

// app.listen(3000, () => {
//     console.log("Server is active on http://localhost:3000");
// });


const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.post("/", (req, res) => {
    const { Name, email, message } = req.body;
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.MY_EMAIL,
        subject: `Message from ${Name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("error");
        } else {
            console.log("Email sent: " + info.response);
            res.status(200).send("success");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is active on http://localhost:${PORT}`);
});
