import { useState } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard";

function App() {
	const [score, setScore] = useState(0);

	return (
		<div className="App">
			<div className="header">
				<div>
					<h1>Legends of Runeterra Memory Card Game</h1>
				</div>
				<div className="rules">
					<div>
						Score points by clicking the images without clicking each more
						than once
					</div>
					<div>Score: {score}/15</div>
				</div>
			</div>
			<div className="gameboard-container">
				<Gameboard score={score} setScore={setScore} />
			</div>
		</div>
	);
}

export default App;
