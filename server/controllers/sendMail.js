const handlebars = require('handlebars');
const fs = require('fs');

const transporter=require("../config/nodemailer").transporter;

module.exports=function mailConfig(name,to,subject,body,callback){
    let source = fs.readFileSync('Templates\\HelloEmailTemplate.html', 'utf8');
    let template = handlebars.compile(source);
    let replacements = {
      name: name,
      body: body
  };
  
  // replace the variables in the template with the actual values
  let htmlToSend = template(replacements);
    let mailOptions={
        from: "pavansaipadavala@gmail.com",
        to: to,
        subject:name + '@'+subject,
        html: htmlToSend
    }


    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
        callback({ error: true, message: 'Error sending email' });
      } else if (data.accepted.length === 0) {
        console.log("Email not sent");
        callback({ error: true, message: 'Email not sent' });
      } else {
        console.log("Email sent successfully");
        callback(null);
      } 
  })
}