import { Switch, Route } from 'react-router-dom';
import AccountPage from '../pages/AccountPage';
import UsersPage from '../pages/admin/UsersPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectPage from '../pages/ProjectPage';
import ProjectsPage from '../pages/ProjectsPage';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import routes from '../helpers/routes';

export default function AppRouter() {
	return (
		<Switch>
			<PublicRoute exact path={routes.home} component={HomePage} />
			<PublicRoute exact path={routes.login} component={LoginPage} />
			<PublicRoute exact path={routes.register} component={RegisterPage} />
			<PrivateRoute exact path={routes.account} component={AccountPage} />
			<PrivateRoute exact path={routes.projects} component={ProjectsPage} />
			<PrivateRoute exact path={routes.project()} component={ProjectPage} />
			<PrivateRoute hasRole={roles.admin} exact path={routes.admin.users} component={UsersPage} />

			<Route path="*" component={NotFoundPage} />
		</Switch>
	);
}
