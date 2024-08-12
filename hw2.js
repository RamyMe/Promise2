const breweryListContainer = document.getElementById('brewery-list');

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        breweryListContainer.innerHTML = `<p class="alert alert-danger">Error fetching breweries!</p>`;
    }
};

const displayBreweries = (breweries) => {
    breweries.forEach(brewery => {
        const breweryItem = document.createElement('li');
        breweryItem.textContent = `${brewery.name} - ${brewery.city}, ${brewery.state}`;
        breweryListContainer.appendChild(breweryItem);
    });
};

const fetchAndDisplayBreweries = async () => {
    const url = 'https://api.openbrewerydb.org/breweries';
    const breweries = await fetchData(url);
    displayBreweries(breweries);
};

fetchAndDisplayBreweries();
