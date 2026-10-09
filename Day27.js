<!DOCTYPE html>
<html>
<head>
    <title>Theme Toggle</title>

    <style>
        body {
            font-family: Arial;
            background-color: white;
            color: black;
            text-align: center;
            padding: 50px;
        }

        .dark {
            background-color: black;
            color: white;
        }

        button {
            padding: 10px 20px;
            cursor: pointer;
        }
    </style>
</head>

<body>

    <h1>Theme Toggle</h1>

    <button onclick="toggleTheme()">
        Toggle Theme
    </button>

    <script >
        let theme = localStorage.getItem("theme");
        
        if (theme === "dark") 
        {
            document.body.classList.add("dark");
        }

        function toggleTheme() 
        {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) 
            {

                localStorage.setItem("theme", "dark");
            } 
            
            else 
            {
                localStorage.setItem("theme", "light");
            }
        }
        
    </script>

</body>
</html>
