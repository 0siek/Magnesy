document
  .getElementById("discordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Zatrzymanie domyślnego działania formularza

    const name = document.getElementById("imie").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("temat").value;
    const message = document.getElementById("message").value;

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
          description: `**Wiadomość:**\n${message}\n\n**Email:**\n${email}`,
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
