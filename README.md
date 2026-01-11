SHAPE SYNC
==========
A Real-Time Shape & Color Grid Game

--------------------------------------------------
1. PROJECT OVERVIEW
--------------------------------------------------

Shape Sync is a real-time multiplayer web game where players interact with a shared grid of shapes and colors.

The application is built with a clear client–server separation:
- The server is the single source of truth.
- Clients are responsible only for rendering the UI and sending user interactions.
- All connected clients see the same game state in real time.

--------------------------------------------------
2. GAME DESCRIPTION
--------------------------------------------------

The game is played on a 3x6 grid.  
Each cell contains a shape and a color.

Players interact with the board by clicking cells.  
Each click replaces the shape and color of the selected cell, as long as the move follows the validation rules.

The objective is to continue making valid moves for as long as possible and maximize the score.

--------------------------------------------------
3. GAME RULES
--------------------------------------------------

Board:
- Fixed size: 3 rows x 6 columns
- Each cell contains:
  - shape
  - color
  - cooldown counter

Shapes:
- circle
- square
- triangle
- diamond

Colors:
- red
- green
- blue
- yellow

Adjacency:
- Only direct neighbors are considered:
  - up
  - down
  - left
  - right
- Diagonal cells are NOT considered adjacent.

--------------------------------------------------
4. MOVE VALIDATION
--------------------------------------------------

When a player clicks a cell, the server attempts to replace its shape and color.

A replacement is valid only if:
- The new shape is different from all adjacent shapes.
- The new color is different from all adjacent colors.

Validation is performed exclusively on the server.

--------------------------------------------------
5. COOLDOWN MECHANIC
--------------------------------------------------

- When a cell is clicked successfully, its cooldown is set to 3.
- After every valid move:
  - All cells with cooldown > 0 have their cooldown reduced by 1.
- A cell in cooldown:
  - Cannot be clicked.
  - Still participates in adjacency validation.
  - Does not affect game-over logic.

--------------------------------------------------
6. GAME OVER CONDITION
--------------------------------------------------

The game ends when:
- A player clicks a cell
- AND there is no valid (shape, color) combination available for that specific cell.

There is no global scan of the board for remaining moves.

--------------------------------------------------
7. REAL-TIME ARCHITECTURE
--------------------------------------------------

Server:
- Node.js with Fastify
- Uses @fastify/websocket for real-time communication
- Manages the full game state
- Validates moves
- Applies cooldowns
- Detects game over
- Broadcasts state updates to all clients

Client:
- React with TypeScript
- Connects to the server via WebSocket
- Renders the board, score, and game-over state
- Sends cell-click events to the server
- Contains no game logic

--------------------------------------------------
8. WEBSOCKET MESSAGE FORMAT
--------------------------------------------------

Client → Server:
{
  "type": "cell:click",
  "row": number,
  "col": number
}

Server → Client:
{
  "type": "game:update",
  "data": {
    "board": [...],
    "score": number,
    "gameOver": boolean
  }
}

--------------------------------------------------
9. PROJECT STRUCTURE
--------------------------------------------------

server/
  index.ts
  types.ts
  socket/
    socketConnection.ts
  game/
    state.ts
    generateBoard.ts
    moveLogic.ts
    cooldowns.ts

client/
  src/
    App.tsx
    types.ts
    components/
    styles/

--------------------------------------------------
10. RUNNING THE PROJECT
--------------------------------------------------

Server:
1. Install dependencies
   npm install
2. Start the server
   npm run dev (or npm start)
3. WebSocket endpoint:
   ws://localhost:3000/ws

Client:
1. Install dependencies
   npm install
2. Start the client
   npm start
3. Open the application in your browser

--------------------------------------------------
11. NOTES
--------------------------------------------------

- The server is authoritative and shared by all clients.
- Multiple clients can connect simultaneously.
- All players see the same board state in real time.
- The game logic strictly follows the defined rules.
- The project is designed to be easily extensible.

--------------------------------------------------
END OF DOCUMENT
--------------------------------------------------
