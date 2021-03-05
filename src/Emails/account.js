const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'
sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'vikramjit.dutta3@gmail.com',
        subject: 'Thanks for joining in!',
        text: `welcome to the app, ${name}. Let me knwo how you get along with the app.`
    })
}

const sendCancelationEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'vikramjit.dutta3@gmail.com',
        subject: 'Fuck off',
        text: `Goodbye, ${name}. Never come back.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}