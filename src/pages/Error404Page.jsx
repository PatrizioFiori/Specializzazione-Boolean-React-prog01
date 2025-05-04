const Error404Page = () => {
    return (
        <div className="error-404-container text-center mt-5">
            <h1 className="error-title">404</h1>
            <p className="error-message">Oops! La pagina che stai cercando non esiste.</p>
            <a href="/" className="btn btn-primary error-button">Torna alla Home</a>
        </div>
    );
};

export default Error404Page;
