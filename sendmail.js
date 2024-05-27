const axios = require("axios");

module.exports = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const data = {
    from: "your-email@example.com",
    to: email,
    subject: `${name}: ${subject}`,
    text: message,
  };

  try {
    await axios.post("https://api.resend.io/v1/mail", data, {
      headers: {
        re_6C5tXd9t_KvJ1rP1DzJYFNc46KYAqXaWb: process.env.RESEND_API_KEY,
      },
    });
    res.status(200).send("Wiadomość wysłana pomyślnie");
  } catch (error) {
    console.log("Błąd", error);
    res.status(400).send("Wystąpił problem z wysłaniem wiadomości");
  }
};
