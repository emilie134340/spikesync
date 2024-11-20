const apiGatewayUrl = process.env.API_URL;
const dotenv = require('dotenv');
dotenv.config();

const sampleData = {
  Matches: [
    {
      id: "12",
      pool: "A",
      date: "2024-11-20",
      court: "Court 1",
      teams: ["Team#001", "Team#002"],
      scores: ["21-18", "25-20"],
    },
    {
      id: "13",
      pool: "B",
      date: "2024-11-21",
      court: "Court 2",
      teams: ["Team#003", "Team#004"],
      scores: ["19-21", "22-25"],
    },
  ],
  Brackets: [
    {
      id: "11",
      round: 1,
      teams: ["Team#001", "Team#003"],
      winners: ["Team#001"],
    },
    {
      id: "21",
      round: 2,
      teams: ["Team#002", "Team#004"],
      winners: ["Team#004"],
    },
  ],
  Locations: [
    {
      id: "11",
      name: "Court A",
      address: "123 Volleyball Lane, Los Angeles, CA",
      courts: 2,
    },
    {
      id: "21",
      name: "Court B",
      address: "456 Volleyball Blvd, Los Angeles, CA",
      courts: 3,
    },
  ],
  Users: [
    {
      id: "31",
      name: "Alice Smith",
      email: "alice@example.com",
      role: "player",
    },
    {
      id: "32",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "admin",
    },
  ],
};

const insertData = async () => {
  for (const match of sampleData.Matches) {
    try {
      const response = await fetch(`${apiGatewayUrl}/matches`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(match),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Failed to add match: ${errorData}`);
      }

      const data = await response.json();
      console.log("Match added successfully:", data);
    } catch (error) {
      console.error("Error adding match:", error.message);
    }
  }
};

insertData();
