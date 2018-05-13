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

    console.error('im 1');

    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "./pages/index.js"), function(err) {
        if (err) {
          res.status(500).send(err);
        }
      });
    });
    app.post('/send-email', cors(),function (req, res) {
      console.error('im 3');

      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'meerhama66@gmail.com',
              pass: '00pokpok'
          }
      });
    console.error('im 4');

      let mailOptions = {
          from: "New Request" , // sender address
          to: 'm.agha46@gmail.com',
          subject: 'Email from '+req.body.name,
          html: `Name: ${req.body.name} <br /><br />
                 Phone number: <a tel:${req.body.phone}>${req.body.phone}</a> <br /><br />
                 Email: ${req.body.email} <br /><br />
                 Pick up postcode: ${req.body.pickUp} <br /><br />
                 Delivery postcode: ${req.body.delivery} <br /><br />
                 Items: ${req.body.items}
                 ${console.log('im here')}`
        };
        console.error('im 5');

       transporter.sendMail(mailOptions, (error, info) => {
           if (error) {
            console.error('im 6');

            res.status(400);
            res.json({ error });
           }
              console.log('Message sent: ');
               res.json({ msg: 'You email has been sent' })
            });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });
