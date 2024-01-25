var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mohamed.jeribi.30@gmail.com',
    pass: '&&Hamajribi8&&'
  }
});

var mailOptions = {
  from: 'mohamed.jeribi.30@gmail.com',
  to: 'hamajribi8@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});