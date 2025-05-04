const Footer = () => {
    return (
        <footer className="footer-custom footer bg-dark mt-5 py-3 text-center text-light">
            <div className="container">
                <p className="mb-3">Domande? Contatta il:</p>
                <a href="" className="text-primary text-decoration-none">123-456-789</a>

                <div className="footer-links d-flex justify-content-center flex-wrap pt-3">
                    <a href="" className="text-secondary mx-3">Privacy</a>
                    <a href="" className="text-secondary mx-3">Termini di servizio</a>
                    <a href="" className="text-secondary mx-3">Centro assistenza</a>
                    <a href="" className="text-secondary mx-3">Account</a>
                </div>

                <div className="social-icons mt-3 text-danger">
                    <i className="fab fa-facebook-f mx-2"></i>
                    <i className="fab fa-twitter mx-2"></i>
                    <i className="fab fa-instagram mx-2"></i>
                </div>

                <p className="mt-3 text-secondary"> ® 2024 TasksList</p>
            </div>
        </footer>
    );
};

export default Footer;
