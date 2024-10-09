Connect Four - React

Overview
This is a web-based implementation of the classic Connect Four game built using React, TypeScript, and Vite. The game allows two players to alternate turns and try to connect four of their discs vertically, horizontally, or diagonally before the opponent.


Features
Player Turns: Alternate turns between two players.
Winning Logic: Detects win conditions for vertical, horizontal, and diagonal connections.
Responsive Design: Works across devices and screen sizes.
Reset Functionality: Easily reset the game after completion.
Styled Components: Consistent and professional UI/UX.
Technologies Used
React: Frontend UI library.
TypeScript: Strongly-typed JavaScript for scalability.
Vite: Fast and efficient build tool for development and production.
CSS: Custom styling for the game interface.
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js
npm
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/md-Gafrujama/connect-four-react-mdgafru.git
cd connect-four-react-mdgafru
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser at http://localhost:3000.

Build for Production
To create a production build:

bash
Copy code
npm run build
The final build will be generated in the dist folder, ready to be deployed.

How to Play
The game board consists of 7 columns and 6 rows.
Players take turns dropping their discs by clicking on one of the columns.
The first player to connect four discs either vertically, horizontally, or diagonally wins.
The game can be reset at any time using the reset button.
Demo
Check out the live version of the game here.

Future Enhancements
AI Player: Implement a computer opponent for single-player mode.
Animation: Add smooth animations when discs are dropped.
Difficulty Levels: Allow players to adjust difficulty for AI-based opponents.
License
This project is licensed under the MIT License. See the LICENSE file for details.
