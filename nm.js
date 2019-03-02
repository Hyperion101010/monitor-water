var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport('SMTP', {
  service: 'Gmail',
  auth: {
    user: 'devendra.phadke@gmail.com',
    pass: 'C6h12no*'
  }
});

var mailOptions = {
    from: 'devendra.phadke@mail.com',
    to: 'contact@technobuz.in',
    subject: 'Hello world!',
    text: 'Plaintext message example.'
};

smtpTransport.sendMail(mailOptions, function(err) {
  console.log('Message sent!');
});
