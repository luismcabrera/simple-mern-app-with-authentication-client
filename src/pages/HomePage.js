import { Container, Row, Col, Button } from 'react-bootstrap';
import routes from '../helpers/routes';
import { Link } from 'react-router-dom'

export default function HomePage() {
	return (
		<Container>
			<Row className="mt-5">
				<Col xs={{ span: 12}} md={{ span: 6 }} className="mb-5">
					<h2>Bienvenid@ a Gestor de tareas</h2>
					<p>¡Aquí podrás gestionar tus proyectos!</p>
					<p>Marca tus tareas como terminadas, Agrega, elimina, o actualiza.</p>
					<div>
						<Link to={routes.login}>Ingresa</Link> o <Button as={Link} to={routes.register}
                        className="ml-1"
                        >Crea una cuenta</Button>
					</div>
				</Col>
                <Col>
                    <img
                        className="img-fluid"
                        src="/img/task-manager.svg"
                        alt="gestor-de-tareas"
                    />
    				<p>¡Gestiona tu tiempo, mejora tu proactividad!</p>
                </Col>
			</Row>
		</Container>
	);
}
