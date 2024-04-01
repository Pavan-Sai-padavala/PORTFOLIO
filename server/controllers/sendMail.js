const handlebars = require('handlebars');
const fs = require('fs');

const transporter=require("../config/nodemailer").transporter;

module.exports=function mailConfig(body,callback){
    if(body.profession==="Recruiter"){
        var source = fs.readFileSync('Templates/RecruiterEmailTemplate.html', 'utf8');
        var replacements={
          Name:body.Name,
          Role:body.role,
          Organization:body.organization,
          Social:body.social,
          Contact:body.mobile
        };
        var subject="Thankyou for reaching out for the "+body.role +" At "+body.organization
      }
    else{
        var source=fs.readFileSync('Templates/DeveloperEmailTemplate.html','utf8');
        var replacements={
          Name:body.Name,
          Message:body.message,
          Social:body.social,
          Contact:body.mobile
        };
        var subject="Let's Explore Opportunities in Tech"
      }
    let template = handlebars.compile(source);
  
    let htmlToSend = template(replacements);
    let mailOptions={
      from: "pavansaipadavala@gmail.com",
      to: body.Email,
      subject:subject,
      html: htmlToSend,
      attachments:[{
        filename:'PAVAN SAI PADAVALA.pdf',
        path:'Attachments/PAVAN SAI PADAVALA.pdf'
      
      }]
  }


  transporter.sendMail(mailOptions, function(err, data) {
    console.log(data);
    if (err) {
      console.log("Error " + err);
      callback({ error: true, message: 'Error sending email' });
    } else if (!data.response) {
      console.log("No response from mail server");
      callback({ error: true, message: 'Email delivery status unknown' }); // More informative message
    } else if (data.response.indexOf('250') === -1) { // Check for success code (250)
      console.log("Email delivery failed: " + data.response);
      callback({ error: true, message: 'Email delivery failed' });
    } else {
      console.log("Email sent successfully");
      callback(null);
    }
  });
}