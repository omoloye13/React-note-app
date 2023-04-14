import React from "react";

const CreateNote = ({ noteHandler, onSaveHandler, inputText }) => {
	//character limit
	const charLimit = 100;
	const charLeft = charLimit - inputText.length;
	return (
		<div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
			<textarea
				cols="10"
				rows="5"
				placeholder="Type Here...."
				maxLength="100"
				value={inputText}
				onChange={noteHandler}
			></textarea>
			<div className="note__footer">
				<span className="label">{charLeft} left</span>
				<button className="note__save" onClick={onSaveHandler}>
					Save
				</button>
			</div>
		</div>
	);
};

export default CreateNote;
