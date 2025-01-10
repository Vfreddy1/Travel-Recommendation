fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log to check the data
        // Display the recommendations on the page here
    })
    .catch(error => console.log('Error fetching data:', error));
    document.getElementById('searchButton').addEventListener('click', function (event) {
        event.preventDefault();
        let searchTerm = document.getElementById('searchBar').value.toLowerCase();
        console.log('Searching for:', searchTerm);
    
        // Logic to fetch and display recommendations based on the searchTerm
    });
    const recommendations = {
        beach: [
            { name: "Bali", image: "bali.jpg", description: "A tropical paradise." },
            { name: "Hawaii", image: "hawaii.jpg", description: "Beautiful beaches and surfing." },
        ],
        temple: [
            { name: "Angkor Wat", image: "angkor_wat.jpg", description: "Ancient temples in Cambodia." },
            { name: "Kashi Vishwanath", image: "kashi_vishwanath.jpg", description: "Famous temple in India." },
        ],
        country: [
            { name: "Japan", image: "japan.jpg", description: "A country with rich culture." },
            { name: "Italy", image: "italy.jpg", description: "Historical sites and amazing cuisine." },
        ]
    };
    
    function displayRecommendations(keyword) {
        let resultContainer = document.getElementById('results');
        resultContainer.innerHTML = ''; // Clear previous results
    
        const results = recommendations[keyword] || [];
        results.forEach(place => {
            let resultItem = document.createElement('div');
            resultItem.innerHTML = `
                <h3>${place.name}</h3>
                <img src="${place.image}" alt="${place.name}">
                <p>${place.description}</p>
            `;
            resultContainer.appendChild(resultItem);
        });
    }
    document.getElementById('resetButton').addEventListener('click', function () {
        document.getElementById('results').innerHTML = ''; // Clear results
        document.getElementById('searchBar').value = '';  // Clear search bar
    });
    function displayCountryTime(country) {
        const timeZones = {
            "New York": "America/New_York",
            "Tokyo": "Asia/Tokyo",
            "Paris": "Europe/Paris"
        };
    
        const options = {
            timeZone: timeZones[country],
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
    
        const countryTime = new Date().toLocaleTimeString('en-US', options);
        console.log(`Current time in ${country}:`, countryTime);
    }
