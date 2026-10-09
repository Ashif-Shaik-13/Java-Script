<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="text">CHENNAI</p>
    <p id="style">HELOO</p>
    <p id="para">HIPHOP TAMIZHA.</p>

    <script>
        document.getElementById("text").innerText = "HELLO";

        let element = document.getElementById("style");
        element.style.color = "red";
        element.style.fontSize = "32px";

        document.getElementById("para").innerHTML = "HIPHOP TAMIZHA is back.";
    </script>
</body>
</html>
