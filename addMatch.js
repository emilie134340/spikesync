const apiGatewayUrl = process.env.API_URL;

// Example request to add a match
async function addMatch(matchData) {
    try {
        const response = await fetch(`${apiGatewayUrl}/matches`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(matchData),
        });
        const data = await response.json();
        console.log("Match added successfully:", data);
    } catch (error) {
        console.error("Error adding match:", error);
    }
}