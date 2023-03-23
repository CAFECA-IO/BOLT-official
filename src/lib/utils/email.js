const nodemailer = require("nodemailer");

class SendMail {
  //the class constructor
  /**
   * set the default constructor without param
   */
  constructor() {
    //nothing to do
  }

  /**
   * send email with config
   * @param config options to start the function with
   * @returns a promise resolved result when the function is ready to be called
   */

  static async sendMail(config, comment) {
    // create gmail service
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        // 要用來發信的帳號及密碼，後面可以改用 dotenv 來傳入，進而保護自己的帳密
        user: config.googleClientID,
        pass: config.googleClientPassword,
      },
    });

    // create email template
    const mailOptions = {
      from: config.googleClientID, // sender address
      to: config.googleClientID, // list of receivers
      subject: "Bolt 表單回覆", // Subject line
      text: comment, // plaintext body
      html: "<p>" + comment + "</p>", // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        throw error;
      } else {
        return info.response;
      }
    });

    return { success: true };
  }
}

(module.exports = SendMail),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    },
  };
