 const sgMail = require("@sendgrid/mail")


sgMail.setApiKey(process.env.SENDGRID_API_KEY)
sgMail.send({
    to:'1234vishaltrivedi1234@gmail.com',
    from:'1234vishaltrivedi1234@gmail.com',
    subject:'This is my First Course',
    text:'I hope this one actually get to you'
})