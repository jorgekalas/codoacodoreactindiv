import React from "react";
import FormContact from "../../Components/FormContact/FormContact";

const Contact = () => {
	return (
		<section>
			<div className="d-flex flex-column me-4 ms-4 text-center">
				<h1 className="mt-4">Contacto</h1>
				<h2 className="align-self-center mt-4">¿Quieres saber más?</h2>
				<p className="align-self-center">
					Envíanos todas tus preguntas y te contactaremos a la brevedad
				</p>
				<FormContact />
			</div>
		</section>
	);
};

export default Contact;
