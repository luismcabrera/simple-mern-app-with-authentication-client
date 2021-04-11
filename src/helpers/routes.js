const routes = {
	home: '/',
	login: '/login',
	register: '/register',
	account: '/account',
	projects: '/projects',
	project: (projectId) => (projectId ? `/projects/:${projectId}` : '/projects/:projectId'),
    admin: {
        users: '/admin/users'
    }
};

export default routes;
