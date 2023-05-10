import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserId } from '../redux/result_reducer';
import '../styles/Main.css';

export default function Main() {
	const inputRef = useRef(null);
	const dispatch = useDispatch();

	function isValidEmail(email) {
		const regex = /^[\w-]+(\.[\w-]+)*@chitkara\.edu\.in$/;
		return regex.test(email);
	}

	function startQuiz() {
		if (inputRef.current?.value && isValidEmail(inputRef.current?.value)) {
			dispatch(setUserId(inputRef.current?.value));
		} 
	}

	return (
		<div className="container">
			<h1 className="title text-light">Uni-verse</h1>

			<form id="form">
				<span>Enter email provided by chitkara university*</span>
				<input
					ref={inputRef}
					className="userid"
					type="text"
					placeholder="example@chitara.edu.in"
				/>
				<p id="error.text" className="error-message">
					Please use a valid chitkara mail.
				</p>
			</form>

			<div className="start">
				<Link className="btn" to={'quiz'} onClick={startQuiz}>
					Start Quiz
				</Link>
			</div>
		</div>
	);
}
