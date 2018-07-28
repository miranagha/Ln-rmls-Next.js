const express = require("express");
const path = require("path");
const nodeMailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const next = require("next");
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(cors());

  server.post("/send-email", cors(), function(req, res) {

    let transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: "m.agha46@gmail.com",
        clientId:"952376417458-0ahopn8o57jetpv1ujipt0hajtifecmf.apps.googleusercontent.com",
        clientSecret: "DOpKSe8-hSYyKyY2K5r9Prb7",
        refreshToken: "1/3_bHPFOjh_XKd2QwttOTbpO2HOZtvGAE5O35LaWPM_4",
        accessToken:"ya29.Glu7BUt9tlo4eW_ZNKadzKUma-rxJYi1r7FLD6i376CIpnkfenJwBNyjNEhbOxDqhzgubr8m45kSYcYIUiH1O-RKRASmhro-MiPPiLIgkOPhA1z0pRByGSXvJUGL",
        expires: 3600
      }
    });

    let mailOptions = {
      from: `customer`, // sender address
      to: "m.agha46@gmail.com",
      subject: "Request from " + req.body.name,
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
      console.log("Message sent: ");
      res.json({ msg: "You email has been sent" });
    });
  });
  const options = {
    root: __dirname + '/static/',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    }
  };
  server.get('/robots.txt', (req, res) => (
    res.status(200).sendFile('robots.txt', options)
  ));

  const sitemapOptions = {
    root: __dirname + '/static/',
    headers: {
      'Content-Type': 'text/xml;charset=UTF-8',
    }
  };
server.get('/sitemap.xml', (req, res) => (
  res.status(200).sendFile('sitemap.xml', sitemapOptions)
));

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
