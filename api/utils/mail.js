sendMeetingEmail = (company, user, offer) => {
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: "accept your application",
    html: `congratulation your application has been accepted by ${company.companyName} for ${offer.title}`,
  });
};

module.exports = {
  sendMeetingEmail,
};
