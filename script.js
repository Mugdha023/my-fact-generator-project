document.getElementById('revealFactsBtn').addEventListener('click', function() {
    const facts = [
        "Tech-savvy gamer with a passion for coding and gaming.",
        "Enthusiast of Korean culture, enjoying K-dramas and K-pop.",
        "Nature lover who appreciates both beaches and snowy landscapes."
    ];

    const factsList = document.getElementById('funFactsList');
    factsList.innerHTML = ''; // Clear any existing facts

    facts.forEach(fact => {
        const listItem = document.createElement('li');
        listItem.textContent = fact;
        factsList.appendChild(listItem);
    });

    factsList.style.display = 'block'; // Show the list
});
