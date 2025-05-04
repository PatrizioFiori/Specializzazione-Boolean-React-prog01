const Footer = () => {
    return (
        <footer className="footer-custom footer bg-dark mt-5 py-3 text-center text-light">
            <div className="container">
                <p className="mb-3">Domande? Contatta il:</p>
                <a href="/" className="text-primary text-decoration-none">123-456-789</a>

                <div className="footer-links d-flex justify-content-center flex-wrap pt-3">
                    <a href="/privacy" className="text-secondary mx-3">Privacy</a>
                    <a href="/terms" className="text-secondary mx-3">Termini di servizio</a>
                    <a href="/support" className="text-secondary mx-3">Centro assistenza</a>
                    <a href="/account" className="text-secondary mx-3">Account</a>
                </div>

                <div className="social-icons mt-3 text-primary">
                    <i className="fab fa-facebook-f mx-3"></i>
                    <i className="fab fa-twitter mx-3"></i>
                    <i className="fab fa-instagram mx-3"></i>
                </div>

                <p className="mt-3 text-secondary">© 2025 TasksList</p>
            </div>
        </footer>
    );
};

export default Footer;
