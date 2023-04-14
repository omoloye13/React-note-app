// import { Notes } from "@mui/icons-material";
import "./Components/css/App.css";
import Header from "./Components/NoteComponent/Header";
import Notes from "./Components/NoteComponent/Notes";
function App() {
	return (
		<div className="main">
			{/* <h1>Hello world</h1> */}
			<Header />
			<Notes />
		</div>
	);
}

export default App;
