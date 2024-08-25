
    <script>
        // Function to generate a random number between 1 and 20
        function rollD20() {
            const min = 1;
            const max = 20;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById('result').textContent = randomNumber;
        }

        // Event listener for the button click
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('d20strength').addEventListener('click', rollD20);
        });
    </script>