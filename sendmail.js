document
  .getElementById("discordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Zatrzymanie domyślnego działania formularza

    const tel = document.getElementById("tel").value;
    const name = document.getElementById("imie").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("temat").value;
    const message = document.getElementById("message").value;
    const errorMessages = document.getElementById("errorMessages");

    // Czyszczenie poprzednich błędów
    errorMessages.innerHTML = "";

    // Walidacja danych
    const telPattern = /^[0-9]{9}$/; // Prosty wzór dla polskiego numeru telefonu (9 cyfr)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Podstawowy wzór dla adresu email

    if (!name) {
      errorMessages.innerHTML = "<p>Proszę wpisać imię.</p>";
      return;
    }
    if (!emailPattern.test(email)) {
      errorMessages.innerHTML = "<p>Proszę wpisać poprawny adres email.</p>";
      return;
    }
    if (!telPattern.test(tel)) {
      errorMessages.innerHTML =
        "<p>Proszę wpisać poprawny numer telefonu (9 cyfr).</p>";
      return;
    }
    if (!subject) {
      errorMessages.innerHTML = "<p>Proszę wpisać temat.</p>";
      return;
    }
    if (!message) {
      errorMessages.innerHTML = "<p>Proszę wpisać wiadomość.</p>";
      return;
    }

    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://discord.com/api/webhooks/1244811364699209808/2bTKekdmCTsHfqdc3qkrdmr-zzA4wBvcSW6DLFZBmCa9ImNsQx6T-FKH5VIU2LnXIXVm"
    );

    request.setRequestHeader("Content-type", "application/json");

    const now = new Date();
    const date = now.toLocaleDateString("pl-PL");
    const time = now.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const params = {
      username: "Captain Hook",
      avatar_url: "",
      content: `<@545287551804506113> Ping!`,
      embeds: [
        {
          author: {
            name: name,
          },
          title: subject,
          description: `**Wiadomość:**\n${message}\n\n**Email:**\n${email}\n\n**Telefon:**\n${tel}`,
          footer: {
            text: `Wysłano • ${date} ${time}`,
          },
          color: 3447003, // Hex color code for embed's left border (e.g., blue)
        },
      ],
    };

    request.send(JSON.stringify(params));

    // Czyszczenie formularza
    document.getElementById("discordForm").reset();
  });
