import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import useAuth from '../../auth/useAuth';
import useModal from '../../hooks/useModal';
import ChangePasswordModal from './components/ChangePasswordModal';
import DeleteModal from './components/DeleteModal';

export default function AccountPage() {
    const { user } = useAuth();
    const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
    const [isOpenChangePasswordModal, openChangePasswordModal, closeChangePasswordModal] = useModal();

	return (
        <>
		<Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <img 
                        src="/img/male_avatar.svg"
                        alt="profile"
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                    />
                </Col>
                <Col className="mt-4">
                    <Card style={{ maxWidth: '360px' }} className="mx-auto p-4">
                        <p className="text-center"><b>Nombre: </b>{user.name}</p>
                        <p className="text-center"><b>Correo: </b>{user.email}</p>
                        <p className="text-center"><b>Rol: </b>{user.role}</p>

                        <Button variant="warning">
                            Editar cuenta
                        </Button>
                        <Button variant="link" className="mt-1" 
                        onClick={openChangePasswordModal}
                        >
                            Cambiar contraseña
                        </Button>
                        <Button variant="link" className="mt-3 text-danger"
                            onClick={openDeleteModal}
                        >
                            Eliminar cuenta
                        </Button>
                    </Card>
                </Col>
            </Row>
		</Container>

        <DeleteModal 
            isOpen={isOpenDeleteModal}
            close={closeDeleteModal}
        />
        <ChangePasswordModal 
            isOpen={isOpenChangePasswordModal}
            close={closeChangePasswordModal}
        />
        </>
    );
}
