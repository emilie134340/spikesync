// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import { DynamoDBDocumentClient, BatchWriteCommand } from "@aws-sdk/lib-dynamodb";

// const client = new DynamoDBClient({});
// const dynamo = DynamoDBDocumentClient.from(client);

// const sampleData = {
//   Matches: [
//     {
//       id: "Match#001",
//       pool: "A",
//       date: "2024-11-20",
//       court: "Court 1",
//       teams: ["Team#001", "Team#002"],
//       scores: ["21-18", "25-20"],
//     },
//     {
//       id: "Match#002",
//       pool: "B",
//       date: "2024-11-21",
//       court: "Court 2",
//       teams: ["Team#003", "Team#004"],
//       scores: ["19-21", "22-25"],
//     },
//   ],
//   Brackets: [
//     {
//       id: "Bracket#001",
//       round: 1,
//       teams: ["Team#001", "Team#003"],
//       winners: ["Team#001"],
//     },
//     {
//       id: "Bracket#002",
//       round: 2,
//       teams: ["Team#002", "Team#004"],
//       winners: ["Team#004"],
//     },
//   ],
//   Locations: [
//     {
//       id: "Location#001",
//       name: "Court A",
//       address: "123 Volleyball Lane, Los Angeles, CA",
//       courts: 2,
//     },
//     {
//       id: "Location#002",
//       name: "Court B",
//       address: "456 Volleyball Blvd, Los Angeles, CA",
//       courts: 3,
//     },
//   ],
//   Users: [
//     {
//       id: "User#001",
//       name: "Alice Smith",
//       email: "alice@example.com",
//       role: "player",
//     },
//     {
//       id: "User#002",
//       name: "Bob Johnson",
//       email: "bob@example.com",
//       role: "admin",
//     },
//   ],
// };

// const insertData = async () => {
//   for (const [category, items] of Object.entries(sampleData)) {
//     const params = {
//       RequestItems: {
//         spikesync: items.map(item => ({
//           PutRequest: {
//             Item: item,
//           },
//         })),
//       },
//     };

//     try {
//       const result = await dynamo.send(new BatchWriteCommand(params));
//       console.log(`Inserted ${category}:`, result);
//     } catch (err) {
//       console.error(`Error inserting ${category}:`, err);
//     }
//   }
// };

// insertData();