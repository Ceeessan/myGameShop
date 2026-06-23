import "../css/footer.css";

export default function Footer() {

    return (
        <div className="footer-container">
            <footer >
                <p> Kontakta oss:</p>
                <p className="contact">
                    <i className="fa fa-envelope"></i> gameworld@fake.com
                </p>
                <p className="contact">
                    <i className="fa fa-comment"></i> Chatta med oss
                </p>
                <p className="contact">
                    <i className="fa fa-phone"></i> 076-123 45 67
                </p>
                <p>© updated 2026</p>
            </footer>
        </div>
    )
};