import "./App.css";
import Gameboard from "./components/Gameboard";

function App() {
	return (
		<div className="App">
			<div className="header">
				<div>
					<h1>Legends of Runeterra Memory Card Game</h1>
				</div>
				<div className="rules">Rules</div>
			</div>
			<div className="gameboard-container">
				<Gameboard />
			</div>
		</div>
	);
}

export default App;
