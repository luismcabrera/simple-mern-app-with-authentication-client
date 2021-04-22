import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify'
import useAuth from '../../../auth/useAuth';

export default function ProfilePicModal({ isOpen, close }) {
	const { updateUser } = useAuth();
	const [fileName, setFileName] = useState("Subir una imagen")
	const [selectedFile, setSelectedFile] = useState(null)

	const handleFileChange = (e) => {
		const [file] = e.target.files; 
		const SIZE_50MB = 50 * 1024 * 1024;
		const isValidSize = file.size < SIZE_50MB; 
		// const isValidSize = file.size < 200 * 1024
		const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
		const isValidType = isNameOfOneImageRegEx.test(file.name)
		
		if(!isValidSize) return toast.error("Imagen muy pesada, máximo 50MB")
		if(!isValidType) return toast.error("Sólo puedes subir imágenes")
		
		setFileName(file.name);
		
		const reader = new FileReader();
		reader.onloadend = () => {
			setSelectedFile(reader.result)
		}
		reader.readAsDataURL(file)

	}
	
	const handleUpdateProfilePic = () => {
		if(!selectedFile) return toast.error('Debes seleccionar una nueva imagen');
		updateUser({ profilePic: selectedFile })
		close()
	}

	return (
		<Modal show={isOpen} onHide={close}>
			<Modal.Header closeButton>
				<Modal.Title>Cambiar mi foto de perfil</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.File 
						custom
						label={fileName}
						data-browse="Subir"
						onChange={handleFileChange}
						accept=".jpg, .jpeg, .gif, .png"
					/>
				</Form>

				<img 
					className="img-fluid mt-2"
					src={selectedFile}
					alt="profile-previw"
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={close}>
					Cancelar
				</Button>
				<Button variant="primary" onClick={handleUpdateProfilePic}>
					Actualizar imagen
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
