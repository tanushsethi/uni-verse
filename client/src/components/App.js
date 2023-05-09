import '../styles/App.css';
import Theme from './Theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';

/** react routes */
const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Theme nav={true}>
					<Main />
				</Theme>
			</>
		),
	},
	{
		path: '/quiz',
		element: (
			<CheckUserExist>
				<Theme nav={false}>
					<Quiz />
				</Theme>
			</CheckUserExist>
		),
	},
	{
		path: '/result',
		element: (
			<Theme nav={true}>
				<Result />
			</Theme>
		),
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
