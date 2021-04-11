import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layouts/Layout'

function App() {
	return (
		<div>
			<Router>
				<AuthProvider>
					<Layout>
						<AppRouter />
					</Layout>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
