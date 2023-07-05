import imgError from '../../../public/images/resource_not_found.png';
import './ErrorComponent.css'

const ErrorComponent = () => {
    return(
        <div className="d-flex flex-column justify-content-center align-items-center mt-5 ">
            <div className="divMobileError">🦷 Error 404 🦷 <p>Página no encontrada </p></div>
            <img src={imgError} alt="Resource not found - 404 error" className="imageError404" />
        </div>
    )
}

export default ErrorComponent;