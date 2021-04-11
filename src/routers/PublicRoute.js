import { Redirect, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function PublicRoute(props) {
	const { isLogged } = useAuth();

	if (isLogged()) return <Redirect to={routes.projects} />;

	return <Route {...props} />;
}
