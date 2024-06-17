const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shadykhalifa.dotnetdev@gmail.com',
    pass: 'shadykh782002'
  }
});

// Handle form submission
app.post('/send-email', (req, res) => {
  const { Name, Email, Subject, Message } = req.body;

  // Define email options
  const mailOptions = {
    from: 'shadykhalifa.dotnetdev@gmail.com',
    to: 'shadykhalifa.dotnetdev@gmail.com',
    subject: Subject,
    text: `
      Name: ${Name}
      Email: ${Email}
      Message: ${Message}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});