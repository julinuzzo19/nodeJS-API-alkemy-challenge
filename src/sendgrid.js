const sgMail = require('@sendgrid/mail');

const sendMail = (data) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const email = data.to;
  const password = data.password;
  const msg = {
    to: email,
    from: process.env.EMAIL_SENDER,
    subject: 'NodeJS Challenge!',
    html: `  
    <h1>Thank you for signing up!</h1>
    <h3>Your credentials:</h3>
    <h5>Email: ${email}</h5>
    <h5>Password: ${password}</h5> 
    `
  };
  sgMail
    .send(msg)
    .catch((error) => {
      console.error(error);
    });
};

module.exports = sendMail;
