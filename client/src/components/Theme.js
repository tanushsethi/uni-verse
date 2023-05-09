import React from 'react';
import blue from '../assets/blue.png';
import yellow from '../assets/yellow.png';
import { Link } from 'react-router-dom';

import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { useDispatch} from 'react-redux';

const Theme = (props) => {

    const dispatch = useDispatch();

    function onRestart() {
		dispatch(resetAllAction());
		dispatch(resetResultAction());
	}

	return (
		<div className="theme">
			{props.nav && (
				<div className="navbar">
					<Link className="btn" to={'/'} onClick={onRestart}>
						Home
					</Link>
					<Link className="btn" to={'/result'} onClick={onRestart}>
						Leaderboard
					</Link>
				</div>
			)}
			<div className="blob-left">
				<img src={blue} alt="blue" />
			</div>
			<div className="blob-right">
				<img src={yellow} alt="blue" />
			</div>
			{props.children}
		</div>
	);
};

export default Theme;
