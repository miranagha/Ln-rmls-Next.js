var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');
    cors = require('cors')

    var app = express();
    app.use(cors())
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 7000;
    // app.get('/', cors(),function (req, res) {
    //   res.render('App');
    // });
    app.post('/send-email', cors(),function (req, res) {

      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'm.agha46@gmail.com',
              pass: ''
          }
      });
      let mailOptions = {
          from: "New Request" , // sender address
          to: 'm.agha46@gmail.com',
          subject: 'Email from '+req.body.name,
          html: `Name: ${req.body.name} <br /><br />
                 Phone number: <a tel:${req.body.phone}>${req.body.phone}</a> <br /><br />
                 Email: ${req.body.email} <br /><br />
                 Pick up postcode: ${req.body.pickUp} <br /><br />
                 Delivery postcode: ${req.body.delivery} <br /><br />
                 Items: ${req.body.items}`
        };

       transporter.sendMail(mailOptions, (error, info) => {
           if (error) {

            res.status(400);
            res.json({ error });
           }
              console.log('Message %s sent: %s', info.messageId, info.response);
               res.json({ msg: 'You email has been sent' })
            });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });
