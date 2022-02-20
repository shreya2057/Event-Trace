import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./screens/home";
import { CreateEvent } from "./screens/event/CreateEvent";
import { EventDescription } from "./screens/event/eventDescription/EventDescription";

function App() {
	return (
		<Router>
			<div className="relative App">
				<NavBar loggedIn={false} />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/events/create" element={<CreateEvent />} />
						<Route path="/events/1" element={<EventDescription />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
