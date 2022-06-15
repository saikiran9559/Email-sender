import sendgrid from "@sendgrid/mail";

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

sendgrid.setApiKey('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');
async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "jettisaikiran1430@gmail.com", // Your email where you'll receive emails
      from: "jettisaikiran9559@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>You've got a mail</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;