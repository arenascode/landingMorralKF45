import PropTypes from "prop-types";
import "./thanksPage.scss";

const ThanksPage = ({ setThanksPage }) => {
  return (
    <div id="modalThanks">
      <div className="thanksContainer">
        <div className="closeBtn">
          <button onClick={() => setThanksPage(false)}>X</button>
        </div>
        <div className="imgContainer">
          <img src="assets/img/KratosLogo.png" alt="" />
        </div>
        <h4>Gracias Por Tu Compra en Kratos Force! 🤜 🤛</h4>
        <div className="textContainer">
          <p>
            En menos de 24 horas, uno de nuestros asesores se comunicará contigo
            para confirmar los detalles de tu pedido.
          </p>
        </div>
        <div className="socialMedia">
          <div className="socialMedia_item wtsp">
            <a href="https://wa.link/at6b7o" target="_blank" className="icon wtsp">
              <img src="assets/img/icons/wtp.png" alt="" />
            </a>
            <span>Whatsapp</span>
          </div>
          <div className="socialMedia_item ig">
            <a
              href="https://www.instagram.com/kratos_force/"
              target="_blank"
              className="icon"
            >
              <img src="assets/img/icons/ig.png" alt="" />
            </a>
            <span>Instagram</span>
          </div>
          <div className="socialMedia_item fb">
            <a
              href="https://www.facebook.com/Somoskratosforce"
              target="_blanl"
              className="icon"
            >
              <img src="assets/img/icons/facebook.png" alt="" />
            </a>
            <span>Facebook</span>
          </div>
          <div className="socialMedia_item ecommerce">
            <a
              href="https://kratosforce.com/"
              className="icon store"
              target="_blank"
            >
              <img src="assets/img/icons/iconStore.png" alt="" />
            </a>
            <span>Tienda</span>
          </div>
        </div>
        <div className="thanksForChoiceUsContainer">
          <p>¡Gracias por elegirnos!</p>
        </div>
      </div>
    </div>
  );
};

ThanksPage.propTypes = {
  setThanksPage: PropTypes.func.isRequired,
};
export default ThanksPage;
