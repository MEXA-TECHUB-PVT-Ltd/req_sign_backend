const nodemailer = require("nodemailer");
const imageURL = require("../EmailImage");
const urls = require("../urls");
const email_service_util = require("../utils/email_service");

const WelcomeEmailVerify = (
  email,
  resetLink,
  first_name,
  last_name,
  subject,
  message,
  btnText
) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: email_service_util.email_user_name,
      pass:email_service_util.email_password,
    },
  });

  const mailOptions = {
    from: "rimshanimo22@gmail.com",
    to: email,
    subject: subject,
    html: `
        <!DOCTYPE html>
        <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
          <meta charset="utf-8">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
          <!--[if mso]>
            <xml><o:officedocumentsettings><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml>
          <![endif]-->
            <title>${subject}</title>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700" rel="stylesheet" media="screen">
            <style>
        .hover-underline:hover {
          text-decoration: underline !important;
        }
        @media (max-width: 600px) {
          .sm-w-full {
            width: 100% !important;
          }
          .sm-px-24 {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .sm-py-32 {
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }
          .sm-leading-32 {
            line-height: 32px !important;
          }
        }
        </style>
        </head>
        <body style="margin: 0; width: 100%; padding: 0; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #eceff1;">
            <div style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; display: none;">${first_name} ${last_name} via RequireSign</div>
          <div role="article" aria-roledescription="email" aria-label="Verify Email Address" lang="en" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly;">
            <table style="width: 100%; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td align="center" style="mso-line-height-rule: exactly; background-color: #eceff1; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;">
                  <table class="sm-w-full" style="width: 600px;" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
          <td class="sm-py-32 sm-px-24" style="mso-line-height-rule: exactly; padding: 48px; text-align: center; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;">
           
          </td>
        </tr>
                      <tr>
                        <td align="center" class="sm-px-24" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly;">
                          <table style="width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td class="sm-px-24" style="mso-line-height-rule: exactly; border-radius: 4px; background-color: #ffffff; padding: 48px; text-align: left; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; font-size: 16px; line-height: 24px; color: #626262;">
                              <a href=${urls.login_url} style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly;">
              <img src=${imageURL} width="200" alt="RS User" style="max-width: 100%; vertical-align: middle; line-height: 100%; border: 0;">
            </a>
                              <p style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; margin-top: 1; margin-bottom: 10px;font-size: 16px; ">Hello ${first_name} ${last_name}, a warm welcome to RequireSign!  </p>
                                <p style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; margin: 0; margin-bottom: 24px;">
                                We are the most innovative and affordable e-signature solution. 
                                One quick step to get you going, simply clink the link below. Let’s go!
                                
                                </p>
                               
                                <table cellpadding="0" cellspacing="0" role="presentation">
                                  <tr>
                                    <td style="mso-line-height-rule: exactly; mso-padding-alt: 16px 24px; border-radius: 4px; background-color: #23b3e8; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;">
                                      <a href=${resetLink} style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; display: block; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; font-size: 16px; font-weight: 600; line-height: 100%; color: #ffffff; text-decoration: none;">Verify Email Now &rarr;</a>
                                    </td>
                                  </tr>
                                </table>
                                <p style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; margin: 0; margin-bottom: 18px;margin-top: 10px">
                               NOTE: If you did not sign up please ignore this message or contact us at 
                                <a href="mailto:${urls.support_email}" class="hover-underline" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; color: #2367a6; text-decoration: none;">${urls.support_email}</a>
                              </p>
                                <table style="width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; padding-top: 32px; padding-bottom: 32px;">
              <div style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; height: 1px; background-color: #eceff1; line-height: 1px;">&zwnj;</div>
            </td>
          </tr>
        </table>
       
        <p style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; margin: 0; margin-bottom: 16px;">Thanks, <br>The RequireSign Team</p>
                              </td>
                            </tr>
                            <tr>
          <td style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; height: 20px;"></td>
        </tr>
      
        <tr>
          <td style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; height: 16px;"></td>
        </tr>
                          </table>
                        </td>
                      </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </body>
        </html>`,
  };

  // send email message
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
module.exports = WelcomeEmailVerify;
