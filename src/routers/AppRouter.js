import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountPage from '../pages/AccountPage';
import UsersPage from '../pages/admin/UsersPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectPage from '../pages/ProjectPage';
import ProjectsPage from '../pages/ProjectsPage';
import RegisterPage from '../pages/RegisterPage';
import Layout from '../components/layouts/Layout';

export default function AppRouter() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/register" component={RegisterPage} />
					<Route exact path="/account" component={AccountPage} />
					<Route exact path="/projects" component={ProjectsPage} />
					<Route exact path="/project/:projectId" component={ProjectPage} />
					<Route exact path="/admin/users" component={UsersPage} />

					<Route path="*" component={NotFoundPage} />
				</Switch>
			</Layout>
		</Router>
	);
}
