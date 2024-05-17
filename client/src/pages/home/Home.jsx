import "./home.scss";
import "../../app.scss";
import Video from "../../components/video/Video.jsx";
import Form from "../../components/form/Form.jsx";
import { useEffect, useRef, useState } from "react";
import ThanksPage from "../thanksPage/ThanksPage.jsx";
import ReactPixel from "react-facebook-pixel";

const Home = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openThanksPage, setThanksPage] = useState(false);

  const changeSlide = (slideId) => {
    const targetSlide = document.getElementById(slideId);
    if (targetSlide) {
      targetSlide.scrollIntoView({ block: "nearest", inline: "center" });
    }
  };

  const handleMiniImgs = (e) => {
    const slideNumber = e.target.parentNode.dataset.img;
    changeSlide(slideNumber);
  };

  const fbq = ReactPixel;

  const handleOpenForm = () => {
    fbq.track("OpenForm");
    console.log("registrando formulario abierto");
    setOpenForm(true);
  };

  //* To know until which section the user browsed the page
  const lastSectionVisitedRef = useRef("");

    console.log(window.scrollY);


  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const sectionOffsets = {};
    // Calcular la posición de inicio y fin de cada sección
    sections.forEach((section) => {
      const { top, height } = section.getBoundingClientRect();
      const sectionId = section.getAttribute("id");
      sectionOffsets[sectionId] = {
        start: top + window.scrollY,
        end: top + window.scrollY + height,
      };
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Determinar la sección actual
      let currentSection = "";
      for (const sectionId in sectionOffsets) {
        const { start, end } = sectionOffsets[sectionId];
        if (scrollPosition >= start && scrollPosition < end) {
          currentSection = sectionId;
          break;
        }
      }

      // Enviar evento de seguimiento personalizado para la sección actual
      if (currentSection && currentSection !== lastSectionVisitedRef.current) {
        console.log({ currentSectionToSend: currentSection });
        fbq.trackCustom("SectionAchieved", { section: currentSection });
        lastSectionVisitedRef.current = currentSection;
      }
    };
    const handleScrollWtsp = () => {
      const scrollPosition = window.scrollY
      console.log({ scrollPosition });
      const wtspBtnContainer = document.querySelector('.wtspIconContainer')

      if (scrollPosition >= 1000) {
        console.log('its after client reviews');

        console.log({wtspBtnContainer});
        wtspBtnContainer.classList.add('show')
      } else {
        wtspBtnContainer.classList.remove('show');
      }
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollWtsp)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <nav className="nav">
        <p>
          Envío <span>GRATIS</span> + Pago <span>CONTRAENTREGA</span> en todo{" "}
          <span>COLOMBIA</span> 🇨🇴
        </p>
      </nav>
      <main>
        <div id="mainBenefit" className="section">
          <h1 className="desktopTitle">
            ¿Estás buscando un morral que no solo sea funcional y resistente,
            sino también elegante para llevar en tu día a día y útil para tus
            aventuras de supervivencia?
          </h1>
          <h1 className="mobileTitle gradient-text">
            Morral Táctico Confort 45 Litros
          </h1>
          <div className="imgAndTextContainer">
            <div className="imgContainer">
              <div
                id="carouselImgs"
                className="w-full carousel rounded-box h-[inherit]"
              >
                <div
                  id="slide1"
                  className="carousel-item relative w-full h-full"
                >
                  <img
                    src="assets/img/Morrales.webp"
                    className="w-full"
                    alt="Morrales"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                    <button
                      className="btn btn-circle btn-md text-lg btn-success text-white"
                      onClick={() => changeSlide("slide5")}
                    >
                      ❮
                    </button>
                    <button
                      className="btn btn-circle btn-md text-lg btn-success text-white"
                      onClick={() => changeSlide("slide2")}
                    >
                      ❯
                    </button>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src="assets/img/MorralCaqui.webp"
                    className="w-full slide2"
                    alt="Color Desierto"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                    <button
                      className="btn btn-circle btn-md text-lg btn-success text-white"
                      onClick={() => changeSlide("slide1")}
                    >
                      ❮
                    </button>
                    <button
                      className="btn btn-circle btn-md text-lg btn-success text-white"
                      onClick={() => changeSlide("slide3")}
                    >
                      ❯
                    </button>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                  <img
                    src="assets/img/morralBlack.webp"
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                    <button
                      className="btn btn-circle btn-md text-lg btn-success text-white"
                      onClick={() => changeSlide("slide2")}
                    >
                      ❮
                    </button>
                    <button
                      className="btn btn-circle btn-md text-lg btn-success text-white"
                      onClick={() => changeSlide("slide4")}
                    >
                      ❯
                    </button>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <img
                    src="assets/img/morralArmyGreen.webp"
                    className="w-full"
                    alt="Morral Verde Olivo"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                    <button
                      className="btn btn-circle btn-md text-lg btn-success text-white"
                      onClick={() => changeSlide("slide3")}
                    >
                      ❮
                    </button>
                    <button
                      className="btn btn-circle btn-md text-lg btn-success text-white"
                      onClick={() => changeSlide("slide5")}
                    >
                      ❯
                    </button>
                  </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                  <img
                    src="assets/img/beePanel.webp"
                    className="w-full"
                    alt="Bee Panel"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                    <button
                      className="btn btn-circle btn-md text-lg btn-success text-white"
                      onClick={() => changeSlide("slide4")}
                    >
                      ❮
                    </button>
                    <button
                      className="btn btn-circle btn-md text-lg btn-success text-white"
                      onClick={() => changeSlide("slide1")}
                    >
                      ❯
                    </button>
                  </div>
                </div>
              </div>
              <div className="miniImgsContainer">
                <div
                  className="miniImg slide1"
                  data-img="slide1"
                  onClick={handleMiniImgs}
                >
                  <img src="assets/img/Morrales.webp" alt="" />
                </div>
                <div
                  className="miniImg slide2"
                  data-img="slide2"
                  onClick={handleMiniImgs}
                >
                  <img src="assets/img/MorralCaqui.webp" alt="" />
                </div>
                <div
                  className="miniImg slide3"
                  data-img="slide3"
                  onClick={handleMiniImgs}
                >
                  <img src="assets/img/morralBlack.webp" alt="" />
                </div>
                <div
                  className="miniImg slide4"
                  data-img="slide4"
                  onClick={handleMiniImgs}
                >
                  <img src="assets/img/morralArmyGreen.webp" alt="" />
                </div>
                <div
                  className="miniImg slide5"
                  data-img="slide5"
                  onClick={handleMiniImgs}
                >
                  <img src="assets/img/beePanel.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="textContainer">
              <div className="reviewsContainer">
                <div className="starItem">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                    width={"20px"}
                  >
                    <polygon
                      style={{ fill: "#FAC917" }}
                      points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
                    />
                  </svg>
                </div>
                <div className="starItem">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                    width={"20px"}
                  >
                    <polygon
                      style={{ fill: "#FAC917" }}
                      points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
                    />
                  </svg>
                </div>
                <div className="starItem">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                    width={"20px"}
                  >
                    <polygon
                      style={{ fill: "#FAC917" }}
                      points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
                    />
                  </svg>
                </div>
                <div className="starItem">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                    width={"20px"}
                  >
                    <polygon
                      style={{ fill: "#FAC917" }}
                      points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
                    />
                  </svg>
                </div>
                <div className="starItem">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                    width={"20px"}
                  >
                    <polygon
                      style={{ fill: "#FAC917" }}
                      points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
                    />
                  </svg>
                </div>
                <a href="#clientReviews" className="rating">
                  5/5 • 3 Reviews
                </a>
              </div>
              <div className="priceContainer">
                <div className="before">$229.000 COP</div>
                <div className="after">$169.900 COP</div>
              </div>
              <div className="text_body">
                <p>
                  Descubre una experiencia única con nuestro Morral Táctico
                  <span> KRATOS FORCE </span>, donde el rendimiento se une al
                  diseño innovador para brindarte funcionalidad de primera
                  clase.
                </p>
              </div>
              <div className="ctaContainer">
                <button onClick={handleOpenForm}>
                  <span>
                    ¡Oferta Limitada!{" "}
                    <svg
                      fill="none"
                      stroke="#ffffff"
                      height="27"
                      viewBox="0 0 30 27"
                      width="25"
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
                  </span>
                  <span>(Recibe Regalos con tu compra)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Client Reviews - Social Testing */}
        <div id="clientReviews" className="section">
          <h4>Experiencias De Nuestros Clientes</h4>
          <div className="reviewsContainer">
            <div className="review">
              <div className="containerIphone">
                <div id="project1" className="iphone-border">
                  <div className="screen">
                    <img src="assets/img/reviews/review1.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="containerIphone">
                <div id="project1" className="iphone-border">
                  <div className="screen">
                    <img src="assets/img/reviews/review2.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="containerIphone">
                <div id="project1" className="iphone-border">
                  <div className="screen">
                    <img src="assets/img/reviews/review3.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="getPromoBar2">
          <p>
            🎁 ¡Obtén regalos <span>GRATIS</span> con tu compra hoy mismo! 🎁
          </p>
        </div>
        <div id="bonus" className="section">
          <div className="gift regalo">
            <h3 className="regalo_title">Regalo # 1</h3>
            <div className="bonus bonus1">
              <div className="imgContainer">
                <img src="assets/img/manualCuidadoMorralImg.webp" alt="" />
              </div>
              <div className="textContainer">
                <h4>🎁 Manual De Uso Y Cuidado</h4>
                <p>
                  ¡Queremos que disfrutes al máximo tu morral! Por eso, con tu
                  compra te obsequiamos un manual en PDF con recomendaciones de
                  uso y cuidado.
                </p>
              </div>
            </div>
          </div>
          <div className="gift regalo2">
            <h3 className="regalo_title">Regalo # 2</h3>
            <div className="bonus bonus2">
              <div className="imgContainer">
                <img src="assets/img/paracordSurvival.webp" alt="" />
              </div>
              <div className="textContainer">
                <h4>🎁 Manilla de Supervivencia</h4>
                <p>
                  Perfecta para actividades al aire libre como pesca, camping y
                  situaciones de supervivencia, un complemento ideal para tu
                  morral. ¡Llévala <span>Gratis</span> con tu compra!
                </p>
              </div>
            </div>
          </div>
          <div className="gift regalo3">
            <h3 className="regalo_title">Regalo # 3</h3>
            <div className="bonus bonus3">
              <div className="imgContainer">
                <img src="assets/img/parcheKratos.webp" alt="" />
              </div>
              <div className="textContainer">
                <h4>🎁 Parche Kratos Force</h4>
                <p>
                  ¡Haz que tu morral sea aún más especial con nuestro parche
                  exclusivo Kratos Force! Obtén el tuyo GRATIS al realizar tu
                  compra y dale un toque único a tu estilo.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
        <div id="priceContainer" className="offer section">
          <div className="prices">
            <div className="price before">Antes: $229.000</div>
            <div className="price after">HOY: $169.900</div>
          </div>
          <div className="ctaContainer">
            <button onClick={handleOpenForm}>
              ¡Oferta Por Tiempo Limitado!{" "}
              <svg
                fill="none"
                stroke="#ffffff"
                height="27"
                viewBox="0 0 30 27"
                width="22"
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
          </div>
        </div>
        {/* VIDEO */}
        <Video />
        <div id="listOfBenefits" className="section">
          <div className="benefitItem benefitOne">
            <div className="benefit_body">
              <h4>✅ EL ESPACIO QUE NECESITAS</h4>
              <p>
                Con una capacidad de 45 litros, esta mochila tiene espacio para
                todo tu equipo esencial.
              </p>
              <p>50cm(Alto) x30cm(Ancho) x30cm(Largo)</p>
            </div>
            <div className="benefit_img">
              <img src="assets/img/morralCapacity.webp" alt="" />
            </div>
          </div>
          <div className="benefitItem benefitTwo">
            <div className="benefit_body">
              <h4>✅ DURADERO E IMPERMEABLE</h4>
              <p>
                Reforzado con doble costura en todos los puntos de tensión.
                Nuestro revestimiento especial hace que nuestro morral sea
                resistente al agua y a los arañazos.
              </p>
            </div>
            <div className="benefit_img">
              <img src="assets/img/morralAgua.webp" alt="" />
            </div>
          </div>
          <div className="benefitItem benefitThree">
            <div className="benefit_body">
              <h4>✅ SISTEMA MOLLE Y CORREAS INFERIORES</h4>
              <p>
                Sistema Molle en la parte delantera y lateral para complementar
                con otros equipos. La cinta inferior permite sujetar
                herramientas al aire libre, como sacos de dormir y soportes para
                fotografía.
              </p>
            </div>
            <div className="benefit_img">
              <img src="assets/img/MorralMole.webp" alt="" />
            </div>
          </div>
        </div>
        <div id="getPromoBar" className="section">
          <p>
            ¡Adquiere El Tuyo <span>HOY</span> En <span>DESCUENTO!</span>
          </p>
        </div>
        <div id="priceContainer2" className="offer section">
          <div className="prices">
            <div className="price before">Antes: $229.000</div>
            <div className="price after">HOY: $169.900</div>
          </div>
        </div>
        <div id="cta" className="section">
          <div className="offer2 ctaContainer">
            <button onClick={handleOpenForm}>
              ¡Llevalo y Paga en Casa!{" "}
              <svg
                fill="none"
                stroke="#ffffff"
                height="27"
                viewBox="0 0 30 27"
                width="25"
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
          </div>
        </div>
        <div id="characteristics" className="section">
          <h3>Caracteristicas De Tu Morral</h3>
          <div className="textAndImgContainer">
            <div className="imgContainer">
              <img src="assets/img/verdeOlivo1.webp" alt="" />
            </div>
            <div className="textContainer">
              <div className="left">
                <ul>
                  <li>
                    <div className="titleContainer">
                      ✅ <span> Cremallera de Alta Calidad</span>{" "}
                    </div>
                    <p>
                      Cremallera bidireccional de alta calidad, todos los
                      compartimentos tienen aberturas bidireccionales para un
                      fácil acceso.
                    </p>
                  </li>
                  <li>
                    <div className="titleContainer">
                      ✅ <span> Parche Decorativo</span>{" "}
                    </div>
                    <p>
                      Agrega parches personalizados para darle un toque único y
                      personal a tu morral.
                    </p>
                  </li>
                  <li>
                    <div className="titleContainer">
                      ✅ <span> Hidratación en Movimiento</span>{" "}
                    </div>
                    <p>
                      En la parte superior del morral, encontrarás una salida de
                      agua discreta, perfecta para reabastecerte mientras
                      caminas.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <div className="titleContainer">
                      ✅ <span>45 Litros de Gran Capacidad</span>{" "}
                    </div>
                    <p>
                      Con dimensiones de 50x30x30cm, este morral acomoda
                      diversos equipos para tus necesidades de viaje diarias.
                    </p>
                  </li>
                  <li>
                    <div className="titleContainer">
                      ✅ <span> Accesibilidad Total</span>{" "}
                    </div>
                    <p>
                      Todos los compartimentos tienen aberturas de dos vías, se
                      abren hasta 180 grados para facilitar el embalaje y
                      desembalaje.
                    </p>
                  </li>
                  <li>
                    <div className="titleContainer">
                      ✅ <span> Comodidad Transpirable</span>{" "}
                    </div>
                    <p>
                      Correas acolchadas para los hombros y zona de la espalda
                      con respaldo de malla para mayor comodidad, ventilación y
                      resistencia.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="cta2" className="section">
          <div className="offer2 ctaContainer3">
            <button onClick={handleOpenForm}>
              ¡Pocas Unidades!{" "}
              <svg
                fill="none"
                stroke="#ffffff"
                height="27"
                viewBox="0 0 30 27"
                width="25"
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
          </div>
        </div>
        <div id="banner">
          <h2>Explora los diversos usos del Morral Tactico</h2>
          <img src="assets/img/usosMorralv3.png" alt="" />
        </div>
        <div id="securePurchase" className="section">
          <div className="securePurchase">
            <div className="securePurchase_title">
              <span>COMPRA ASEGURADA</span>
              <img src="assets/img/icons/verified.png" alt="" />
            </div>
          </div>
          <div className="iconsContainer">
            <div className="icon icon1">
              <div className="imgContainer">
                <img src="/assets/img/icons/guarante.webp" alt="" />
              </div>
              <div className="textContainer">
                <span>Garantía de devolución</span>
                <p>
                  ¡Tu satisfacción es nuestra prioridad! Si por alguna razón no
                  quedas completamente satisfecho con nuestro morral, ¡te
                  reembolsamos tu dinero sin objeciones!
                </p>
              </div>
            </div>
            <div className="icon icon2">
              <div className="imgContainer">
                <img src="/assets/img/icons/safeDelivery.webp" alt="" />
              </div>
              <div className="textContainer">
                <span>Entrega Segura</span>
                <p>
                  Nuestra promesa es asegurar una entrega segura y puntual. Te
                  contactaremos antes de enviar tu morral para confirmar que
                  todo esté en orden y recibas tu pedido a tiempo.
                </p>
              </div>
            </div>
            <div className="icon icon3">
              <div className="imgContainer">
                <img src="/assets/img/icons/freeDelivery.webp" alt="" />
              </div>
              <div className="textContainer">
                <span>Atención al Cliente</span>
                <p>
                  Estamos comprometidos en brindarte una atención excepcional en
                  cada etapa de tu experiencia de compra. Nos aseguraremos de
                  estar disponibles para cualquier consulta o necesidad que
                  puedas tener.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="priceContainer2" className="offer">
          <div className="prices">
            <div className="price before">Antes: $229.000</div>
            <div className="price after">HOY: $169.900</div>
          </div>
        </div>
        <div id="cta3" className="section">
          <div className="ctaContainer">
            <button onClick={handleOpenForm}>
              ¡Quiero El Morral!{" "}
              <svg
                fill="none"
                stroke="#ffffff"
                height="27"
                viewBox="0 0 30 27"
                width="25"
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
          </div>
        </div>
        <div id="commonQuestions" className="section">
          <div className="left">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                ¿Cuál es el tiempo estimado de entrega?
              </div>
              <div className="collapse-content">
                <p>
                  Recíbelo en tu domicilio o sucursal de InterRapidisimo en un
                  plazo de 3 a 5 días hábiles.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                ¿Cuáles son las opciones de pago disponibles?
              </div>
              <div className="collapse-content">
                <p>
                  Puedes pagar a través de transferencia bancaria, Nequi o
                  contraentrega al recibir tu morral en la puerta de tu casa.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                ¿El producto viene con garantía?
              </div>
              <div className="collapse-content">
                <p>
                  Te garantizamos el cambio en caso de cualquier defecto de
                  fabricación.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                ¿Cómo puedo rastrear mi pedido una vez que ha sido enviado?
              </div>
              <div className="collapse-content">
                <p>
                  Una vez que realices tu compra, nos encargaremos de ponernos
                  en contacto contigo para proporcionarte el número de
                  seguimiento de tu pedido.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                ¿Qué política de devoluciones tienen?
              </div>
              <div className="collapse-content">
                <p>
                  Si no estás satisfecho con tu producto te devolvemos el
                  dinero.
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="firstImg">
              <img src="assets/img/backMorral.webp" alt="" />
            </div>
            <div className="secondImg">
              <img src="assets/img/sideMorral.webp" alt="" />
            </div>
            <div className="thirdImg">
              <img src="assets/img/morralAbiertoCaqui.webp" alt="" />
            </div>
          </div>
        </div>
        <div id="priceContainer3" className="offer section">
          <div className="prices">
            <div className="price before">Antes: $229.000</div>
            <div className="price after">HOY: $169.000</div>
          </div>
          {/* <div className="contraentrega">
            Envío <span>GRATIS</span> + Pago <span>CONTRAENTREGA</span>
          </div> */}
          <div className="ctaContainer">
            <button onClick={handleOpenForm}>
              ¡Llevalo y Paga en Casa!{" "}
              <svg
                fill="none"
                stroke="#ffffff"
                height="27"
                viewBox="0 0 30 27"
                width="25"
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
          </div>
        </div>
        {openForm && (
          <Form setOpenForm={setOpenForm} setThanksPage={setThanksPage} />
        )}
        {openThanksPage && <ThanksPage setThanksPage={setThanksPage} />}
        <div className="whatsapp">
          <h3>Aun Tienes Preguntas?</h3>
          <span>¡CHATEA CON NOSOTROS!</span>
          <button>
            <a href="http://wa.link/ia2d69" target="blank">
              <img src="assets/img/icons/wtspbton.png" alt="" />
            </a>
          </button>
        </div>
        <footer className="section">
          <div className="imgContainer">
            <img src="assets/img/KratosLogo.webp" alt="" />
          </div>
          <span className="sign">Creado Por ArenasCode ©</span>
        </footer>
      </main>
      <div className="wtspIconContainer animated-icon">
        <a
          href="http://wa.link/ia2d69"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/img/icons/showWtsp.webp"
            alt="wtspIcon"
            width={50}
          />
        </a>
      </div>
    </div>
  );
};
export default Home;
