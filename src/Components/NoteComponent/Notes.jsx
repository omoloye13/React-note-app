import React, { useState, useEffect } from "react";
import "../css/Note.css";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";

const Notes = () => {
	//states
	const [notes, setNotes] = useState([]);
	const [inputText, setInputText] = useState("");

	const noteHandler = (e) => {
		setInputText(e.target.value);
	};
	// add new note to the state array
	const onSaveHandler = () => {
		setNotes((prevState) => [
			...prevState,
			{
				id: uuid(),
				text: inputText,
			},
		]);
		//clear the textarea
		setInputText("");
	};
	//delete note function
	const deleteNote = (id) => {
		const filteredNotes = notes.filter((note) => note.id !== id);
		setNotes(filteredNotes);
	};
	//saving data to local storage
	useEffect(() => {
		localStorage.setItem("Notes", JSON.stringify(notes));
	}, [notes]);
	//get the saved notes and add them to the array
	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem("Notes"));
		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	return (
		<div className="notes">
			{/* <Note /> */}
			{/* <Note /> */}
			{notes.map((note) => (
				<Note
					key={note.id}
					id={note.id}
					text={note.text}
					deleteNote={deleteNote}
				/>
			))}
			<CreateNote
				noteHandler={noteHandler}
				onSaveHandler={onSaveHandler}
				inputText={inputText}
			/>
		</div>
	);
};

export default Notes;
