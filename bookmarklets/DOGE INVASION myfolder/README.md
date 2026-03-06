<!DOCTYPE html>
<html>
<head>
    <title>DOGE INVASION</title>
    <style>
        body { background-color: black; overflow: hidden; margin: 0; }
        .doge {
            position: absolute;
            width: 150px;
            animation: spin 3s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <script>
        function spawnDoge() {
            const img = document.createElement('img');
            // Using a standard Doge meme image URL
            img.src = "https://upload.wikimedia.org/wikipedia/en/d/d2/Doge_meme_dog.jpg";
            img.className = 'doge';
            
            // Randomly place Doge on the screen
            img.style.left = Math.random() * (window.innerWidth - 150) + 'px';
            img.style.top = Math.random() * (window.innerHeight - 150) + 'px';
            
            document.body.appendChild(img);
        }

        // Spawns a new Doge every 300 milliseconds
        setInterval(spawnDoge, 300);
    </script>
</body>
</html>


