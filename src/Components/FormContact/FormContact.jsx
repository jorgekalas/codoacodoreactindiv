import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormContact = () => {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [validationError, setValidationError] = useState("");
	const navigate = useNavigate();

	const onChangeUserName = (event) => {
		setUserName(event.target.value);
	};
	const onChangeUserEmail = (event) => {
		setUserEmail(event.target.value.trim());
	};

	const validateUserName = (userName) => {
		return userName.length > 5;
	};

	const validateUserEmail = (userEmail) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(userEmail);
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		const isValidUserName = validateUserName(userName);
		const isValidEmail = validateUserEmail(userEmail);

		if (isValidUserName && isValidEmail) {
			setValidationError(false);
		} else {
			setValidationError(
				"Por favor, verifica que la información ingresada sea correcta"
			);
		}
	};

	return (
		<div>
			<Form onSubmit={onSubmitForm} className="d-flex flex-column mt-3 ">
				<Form.Group
					className="d-flex flex-column align-items-center"
					controlId="formBasicName"
				>
					<Form.Label className="col-3">Nombre</Form.Label>
					<Form.Control
						type="text"
						value={userName}
						onChange={onChangeUserName}
						placeholder="Por lo menos 6 caracteres"
						className="mb-3 text-center w-75"
						disabled={validationError === false}
					/>
				</Form.Group>

				<Form.Group
					className="mb-3 d-flex flex-column align-items-center"
					controlId="formBasicEmail"
				>
					<Form.Label className="col-3">Email</Form.Label>
					<Form.Control
						type="email"
						value={userEmail}
						onChange={onChangeUserEmail}
						placeholder="miemail@ejemplo.com"
						className=" mb-2 text-center w-75"
						disabled={validationError === false}
					/>
				</Form.Group>

				<Button
					type="submit"
					disabled={validationError === false}
					className="w-50 mt-2 align-self-center"
				>
					Enviar
				</Button>

				<Form.Text className="h1 text-center mt-3" style={{ color: "#D50000" }}>
					{validationError}
				</Form.Text>

				{validationError === false && (
					<Form.Text
						className="h1 d-flex flex-column text-center"
						style={{ color: "#2ECC71" }}
					>
						¡Gracias {userName}, te estaremos contactando pronto!
						<Button onClick={() => navigate("/home")} className="w-50 mt-4">
							Volver al home
						</Button>
					</Form.Text>
				)}
			</Form>
		</div>
	);
};

export default FormContact;
