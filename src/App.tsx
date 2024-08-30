import { useState } from "react";

import "./App.css";
import { BackgroundBeamsDemo } from "./components/background-beams";
import { TracingBeamDemo } from "./components/tracing-beam-demo";

function App() {
	return (
		<div>
			<BackgroundBeamsDemo />
			<TracingBeamDemo />
		</div>
	);
}

export default App;
