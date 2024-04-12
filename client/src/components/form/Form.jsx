import { useState } from "react";
import "./form.scss";
import PropTypes from "prop-types";
import { makeRequest } from "../../axios.js";
// import { makeRequest } from "../../axios.js";

const Form = ({ setOpenForm, setThanksPage }) => {
  const [colorSelected, setColorSelected] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [notColorSelected, setNotColorSelected] = useState(false);
  const [errMail, setErrMail] = useState(false)
  

  const handleSelection = (e) => {
    const colorSelected = e.target.parentNode.dataset.color
      ? e.target.parentNode.dataset.color
      : e.target.dataset.color;
    setColorSelected(colorSelected);
    const container = document.getElementById("form_containerColors");
    const colorOptions = container.querySelectorAll('.form_colorOption')
    
    colorOptions.forEach(item => item.classList.remove('highlight'))

    colorOptions.forEach((item) => (item.style.background = "#fff"));
    colorOptions.forEach((item) => (item.style.color = "#000"));

    const target = e.target.parentNode.dataset.color
      ? e.target.parentNode
      : e.target;
    
    target.classList.add('highlight')
    target.style.background = "#3cb51393"
    target.style.color = "#fff"

    const price = 169900;
    const numberFormatted = new Intl.NumberFormat("en-US").format(price);
    setSubtotal(numberFormatted);
    setNotColorSelected(false)
  };
  
  
  const handleChange = (e) => {
    e.preventDefault();
    e.target.style.borderBottom = "solid gray"
    e.target.style.borderColor = "gray"
    const errorMsg = e.target.parentNode.querySelector('span')
    if (errorMsg) {
      errorMsg.innerText = ""
    }
    setErrMail(false)
  }
  // console.log(formData);
  
  const handleForm = async (e) => {
    e.preventDefault()
    const form = document.querySelector('.formToSend')
    const inputs = form.querySelectorAll('input')
    console.log({inputs});
    const inputsRequired = Array.from(inputs).filter(input => input.id !== 'datosAdicionales')
    console.log({inputsRequired});
    const formToSend = new FormData(form)
    formToSend.append("Color", colorSelected)
    inputs.forEach((input) => {
      const errorChild = input.parentNode.querySelector("span")
      if (errorChild) {
        input.parentNode.removeChild(errorChild)
        console.log(`removing span`);
      }
    })

    inputsRequired.forEach((input) => {
      
      if (input.value == "") {
        console.log('some input is empty');
        input.style.border = "1px solid #ff5252";

        const errorMessage = document.createElement('span');
        errorMessage.textContent = "llena este campo"
        errorMessage.style.color = "#ff5252"; 
        errorMessage.style.fontSize = "12px";
        errorMessage.style.display = "block"; 
        errorMessage.style.marginTop = "2px";
        input.parentNode.appendChild(errorMessage)
        return 
      }

    })
    try {
      if (colorSelected == '') {
        setNotColorSelected(true)
      }
      //* Validate eMail

      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      console.log(inputs[1].value);
      if (inputs[1].value != '' && !pattern.test(inputs[1].value)) {
        console.log(`invalid email format`);
        setErrMail(true);
        console.log(errMail);
        return;
      }

      const purchaseData = {}
      purchaseData.valorCompra = subtotal
      for (const [key, value] of formToSend.entries()) {
        console.log(`${key}: ${value}`)
        purchaseData[key] = value
        if (value == '' && key !== 'datosAdicionales') {
          console.log(`submit canceled`);
          return 
        }
      }
      console.log(`todos los campos fueron validados`);
      console.log({purchaseData});
      const result = await makeRequest.post('/purchase/newPurchase', purchaseData)
      console.log(result.data);
      //UNCOMENT AFFTER ALL INPUTS ARE ALREADY VALIDATED
      setOpenForm(false)
      // setThanksPage(true)
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div id="modalForm">
      <div className="purchaseForm">
        <div className="closeBtn">
          <button onClick={() => setOpenForm(false)}>X</button>
        </div>
        <div className="purchaseForm_title">
          <h4>¡Pide Tu Morral en OFERTA!</h4>
          <p>
            ¡Obtén envío GRATIS y paga al recibir! Completa el formulario a
            continuación para que te llevemos tu pedido directamente a tu
            puerta.
          </p>
        </div>
        <div className="formContainer">
          <div className="form_colorOptions">
            <h4>Selecciona el color</h4>
            <div className="form_colorsContainer" id="form_containerColors">
              <div
                className="form_colorOption colorDesierto"
                data-color="Color Desierto"
                onClick={handleSelection}
              >
                Color Desierto
                <img src="assets/img/beigeArena.png" alt="" />
              </div>
              <div
                className="form_colorOption blackColor"
                data-color="Negro Noche"
                onClick={handleSelection}
              >
                Negro Noche
                <img src="assets/img/negroNoche.png" alt="" />
              </div>
              <div
                className="form_colorOption greenColor"
                data-color="Verde Olivo"
                onClick={handleSelection}
              >
                Verde Olivo
                <img src="assets/img/verdeMilitar.png" alt="" />
              </div>
            </div>
          </div>
          <div className="purchaseDetail">
            <div className="purchaseItem colorSelected">
              Color: <span>{colorSelected}</span>
            </div>
            <div className="purchaseItem purchaseDetail_subtotal">
              <span>Subtotal</span> <span>$ {subtotal}</span>
            </div>
            <div className="purchaseItem purchaseDetail_envio">
              <span>Envío</span>
              <span>GRATIS</span>
            </div>
            <hr />
            <div className="purchaseItem purchaseDetail_total">
              <span>Total</span>
              <span>$ {subtotal}</span>
            </div>
          </div>
          <div className="alertAdvice">
            <span>🚨 Atención 🚨</span>
            <p>
              Asegúrate de proporcionar la información correcta para el envío de
              tu pedido. Es crucial incluir un número de teléfono con WhatsApp.
            </p>
          </div>

          <form action="" className="formToSend" onSubmit={handleForm}>
            <label htmlFor="name">
              Nombre
              <input
                type="text"
                id="name"
                placeholder="Tu Nombre Completo"
                name="Nombre"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              E-mail
              <input
                type="text"
                id="email"
                placeholder="ejemplo@gmail.com"
                name="Email"
                onChange={handleChange}
              />
              {errMail ? <div className="invalidEmail">Email Invalido</div> : ''}
            </label>
            <label htmlFor="telefono">
              Telefono - Whatsapp
              <input
                type="tel"
                id="telefono"
                placeholder="+ 57 320 123 4567"
                name="Telefono"
                onChange={handleChange}
              />
            </label>
            <div className="ciudadDepartamento">
              <label htmlFor="ciudad">
                Ciudad
                <input
                  type="text"
                  id="ciudad"
                  placeholder="Ciudad"
                  name="Ciudad"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="departamento">
                Departamento
                <input
                  type="text"
                  id="departamento"
                  placeholder="Departamento"
                  name="Departamento"
                  onChange={handleChange}
                />
              </label>
            </div>
            <label htmlFor="direccion">
              Dirección
              <input
                type="text"
                id="direccion"
                placeholder="calle xxx, barrio xxx, cerca a ..."
                name="Direccion"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="datosAdicionales">
              Datos Adicionales
              <input
                type="text"
                id="datosAdicionales"
                placeholder="Cualquier aclaración que consideres importante"
                name="datosAdicionales"
                onChange={handleChange}
              />
            </label>
            {notColorSelected && <span className="notColorSelected">Olvidaste Seleccionar el Color!</span>}
            <button className="btn text-white">
              ¡Pedir y Pagar En Casa!{" "}
              <svg
                fill="none"
                stroke="#ffffff"
                height="27"
                viewBox="0 0 30 27"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fontWeight: 600 }}
                strokeWidth={2}
              >
                <path d="M1.39999 1.70001H6.60001" stroke="#ffffff" />
                <path d="M6.60001 1.70001L11 18.9" />
                <path d="M11.8 18.9H28.3" stroke="##ffffff" />
                <path
                  d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z"
                  stroke="#ffffff"
                />
                <path
                  d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z"
                  stroke="#ffffff"
                />
                <path
                  d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z"
                  stroke="#ffffff"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  setOpenForm: PropTypes.func.isRequired,
  setThanksPage: PropTypes.func.isRequired
};
export default Form;
