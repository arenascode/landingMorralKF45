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
  const fbq = ReactPixel;

  const handleOpenForm = () => {
    fbq.track("OpenForm");
    console.log("registrando formulario abierto");
    setOpenForm(true);
  };

  //* To know until which section the user browsed the page
  const lastSectionVisitedRef = useRef('')

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
        console.log({currentSectionToSend: currentSection});
        fbq.trackCustom("SectionAchieved", { section: currentSection });
        lastSectionVisitedRef.current = currentSection
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="#app">
      <nav className="nav">
        <p>
          Envío <span>GRATIS</span> + Pago <span>CONTRAENTREGA</span> en todo{" "}
          <span>COLOMBIA</span> 🇨🇴
        </p>
      </nav>
      <main>
        <div id="mainBenefit" className='section'>
          <h1 className="desktopTitle">
            ¿Estás buscando un morral que no solo sea funcional y resistente,
            sino también elegante para llevar en tu día a día y útil para tus
            aventuras de supervivencia?
          </h1>
          <h1 className="mobileTitle">
            ¿Quieres un morral funcional y con estilo para las aventuras de tu
            día a día?
          </h1>
          <div className="imgAndTextContainer">
            <div className="imgContainer">
              <div className="w-full carousel rounded-box h-[100%]">
                <div
                  id="slide1"
                  className="carousel-item relative w-full h-full"
                >
                  <img
                    src="assets/img/verdeOlivo4.webp"
                    className="w-full"
                    alt="Verde Olivo"
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
                      onClick={() => changeSlide("slide2")}
                    >
                      ❯
                    </button>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src="assets/img/MorralCaqui.webp"
                    className="w-full"
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
                    src="assets/img/morralBeePanal.webp"
                    className="w-full"
                    alt="Bee Panel"
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
                      onClick={() => changeSlide("slide1")}
                    >
                      ❯
                    </button>
                  </div>
                </div>
              </div>
              {/* <img src="assets/img/Morrales.png" alt="" /> */}
            </div>
            <div className="textContainer">
              <h2 className="text_title">Morral Tactico KF 45</h2>
              <div className="text_body">
                <p>
                  Descubre una experiencia única con nuestro Morral Táctico
                  <span> KRATOS FORCE </span>, donde el rendimiento se une al
                  diseño innovador para brindarte funcionalidad de primera
                  clase.
                  <p>
                    Sumérgete en la comodidad que ofrece mientras exploras su
                    excelente relación precio-calidad.
                  </p>
                </p>
              </div>
              <div className="ctaContainer">
                <button onClick={handleOpenForm}>
                  ¡QUIERO EL MORRAL!
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
              </div>
            </div>
          </div>
        </div>
        <div id="listOfBenefits" className='section'>
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
        <div id="getPromoBar" className='section'>
          <p>
            ¡Adquiere El Tuyo <span>HOY</span> En <span>DESCUENTO!</span>
          </p>
        </div>
        {/* VIDEO */}
        <Video />
        <div id="priceContainer" className="offer section">
          <div className="prices">
            <div className="price before">Antes: $299.000</div>
            <div className="price after">HOY: $169.900</div>
          </div>
          <div className="ctaContainer">
            <button onClick={handleOpenForm}>
              ¡Llevalo y paga en casa!{" "}
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
          </div>
        </div>
        {/* Client Reviews - Social Testing */}
        <div id="clientReviews" className='section'>
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
        <div id="bonus" className='section'>
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
                <img src="assets/img/manillaSupervivencia.webp" alt="" />
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
        <div id="priceContainer2" className="offer section">
          <div className="prices">
            <div className="price before">Antes: $299.000</div>
            <div className="price after">HOY: $169.900</div>
          </div>
        </div>
        <div id="cta" className="section">
          <div className="offer2 ctaContainer">
            <button onClick={handleOpenForm}>
              ¡Llevalo y paga en casa!{" "}
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
          </div>
        </div>
        <div id="characteristics" className='section'>
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
              ¡Llevalo y paga en casa!{" "}
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
          </div>
        </div>
        <div id="securePurchase" className='section'>
          <div className="securePurchase">
            <div className="securePurchase_title">
              <span>COMPRA ASEGURADA</span>
              <img src="assets/img/icons/verified.png" alt="" />
            </div>
          </div>
          <div className="iconsContainer">
            <div className="icon icon1">
              <div className="imgContainer">
                <svg
                  id="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={"80px"}
                >
                  <title>pay cash</title>
                  <path d="M461.72,53.8H382.66L285.19,22a41.43,41.43,0,0,0-35.31,4.54L191.15,64.27a5.73,5.73,0,0,0,6.19,9.65l58.73-37.68A29.94,29.94,0,0,1,281.63,33L380,65a5.6,5.6,0,0,0,1.77.28H456v96.31H413.35a5.74,5.74,0,0,0-5.09,3.1,57.68,57.68,0,0,1-27.93,24.08V163c9.19-3.92,19-10.74,25.26-22.63A5.73,5.73,0,1,0,395.43,135c-10.9,20.84-38,21.77-38.15,21.77-36.3,0-46.78-25.34-47.2-26.39a5.74,5.74,0,0,0-5.35-3.68H250.86a15.31,15.31,0,1,1,0-30.61h64.3a5.74,5.74,0,1,0,0-11.47h-64.3a26.78,26.78,0,1,0,0,53.55h50.28c4.79,8.79,20.13,30.07,56.26,30.07a61.92,61.92,0,0,0,11.46-1.59v85a8.47,8.47,0,0,1-8.46,8.46H64.47A8.48,8.48,0,0,1,56,251.67V104.55a8.47,8.47,0,0,1,8.46-8.46H210.69a5.74,5.74,0,1,0,0-11.47H64.47a20,20,0,0,0-19.93,19.93V251.67A20,20,0,0,0,64.47,271.6H360.4a20,20,0,0,0,19.93-19.93V200.92c20.56-6.55,32.07-21.38,36.27-27.87h45.12a5.74,5.74,0,0,0,5.74-5.73V59.54A5.74,5.74,0,0,0,461.72,53.8Z" />
                  <path d="M83.43,208.33V147.88a30.72,30.72,0,0,0,24.37-24.37h97.93a5.74,5.74,0,0,0,0-11.47H102.61a5.74,5.74,0,0,0-5.74,5.74A19.19,19.19,0,0,1,77.7,137,5.74,5.74,0,0,0,72,142.69v70.84a5.73,5.73,0,0,0,5.74,5.73,19.2,19.2,0,0,1,19.17,19.18,5.73,5.73,0,0,0,5.74,5.73H322.26a5.73,5.73,0,0,0,5.74-5.73,19.2,19.2,0,0,1,19.17-19.18,5.73,5.73,0,0,0,5.74-5.73V187.61a5.74,5.74,0,1,0-11.47,0v20.72a30.74,30.74,0,0,0-24.37,24.37H107.8A30.74,30.74,0,0,0,83.43,208.33Z" />
                  <path d="M204.9,159.24h13.8a5.74,5.74,0,0,0,0-11.47h-4.51v-3.69a5.74,5.74,0,1,0-11.47,0v3.83a18,18,0,0,0,2.18,35.93H212A6.57,6.57,0,1,1,212,197H198.22a5.74,5.74,0,1,0,0,11.47h4.5v3.69a5.74,5.74,0,0,0,11.47,0V208.3A18,18,0,0,0,212,172.37H204.9a6.57,6.57,0,1,1,0-13.13Z" />
                  <path d="M145.23,174.06a5.76,5.76,0,0,0-1.68,4,5.29,5.29,0,0,0,.12,1.13,5,5,0,0,0,.33,1.06,4.87,4.87,0,0,0,.53,1,5.26,5.26,0,0,0,.7.86,5.94,5.94,0,0,0,.87.72,5.86,5.86,0,0,0,1,.52,6.46,6.46,0,0,0,1.08.34,6,6,0,0,0,1.12.1,5.77,5.77,0,0,0,4.05-1.68,6,6,0,0,0,.72-.86,8,8,0,0,0,.53-1,7.63,7.63,0,0,0,.32-1.06,5.28,5.28,0,0,0,.11-1.13,5.73,5.73,0,0,0-9.79-4Z" />
                  <path d="M270.81,181.3a6.56,6.56,0,0,0,.72.86,5.71,5.71,0,0,0,8.81-.86,4.87,4.87,0,0,0,.53-1,5,5,0,0,0,.33-1.06,5.24,5.24,0,0,0,.12-1.11,5.74,5.74,0,1,0-11.47,0,6,6,0,0,0,.11,1.11,6.51,6.51,0,0,0,.33,1.06A6.87,6.87,0,0,0,270.81,181.3Z" />
                  <path d="M415.51,317.64a27.18,27.18,0,0,0-36.66,2.82l-36.27,39.21a5.74,5.74,0,1,0,8.42,7.79l36.27-39.21a15.64,15.64,0,0,1,21.11-1.62,15.57,15.57,0,0,1,2.37,22.05L347.61,425.9a28.92,28.92,0,0,1-18.3,10.35L207.09,453.94a40.9,40.9,0,0,0-29.77,20.58l-3.34,6H61.55l58.24-86.07a81.93,81.93,0,0,1,76.89-35.77,130.22,130.22,0,0,1,28.93,6.39,59.62,59.62,0,0,0,19.83,3.48h58.45a16.92,16.92,0,0,1,16.9,16.9,18.26,18.26,0,0,1-18.24,18.24H249A37.57,37.57,0,0,0,225,412.35l-12.58,10.44a5.74,5.74,0,0,0,7.33,8.83l12.57-10.44a26.08,26.08,0,0,1,16.62-6h53.59a29.75,29.75,0,0,0,29.71-29.71,28.41,28.41,0,0,0-28.37-28.37H245.44a48.12,48.12,0,0,1-16-2.83,141.49,141.49,0,0,0-31.49-7A93.38,93.38,0,0,0,110.29,388l-64.3,95A5.74,5.74,0,0,0,50.74,492H177.36a5.73,5.73,0,0,0,5-3l5-9a29.4,29.4,0,0,1,21.39-14.78L331,447.6a40.38,40.38,0,0,0,25.54-14.44l63.14-77.22a27,27,0,0,0-4.12-38.3Z" />
                </svg>
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
                <svg
                  viewBox="0 0 30 30"
                  width={"80px"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.48 12c-.13.004-.255.058-.347.152l-2.638 2.63-1.625-1.62c-.455-.474-1.19.258-.715.712l1.983 1.978c.197.197.517.197.715 0l2.995-2.987c.33-.32.087-.865-.367-.865zM.5 16h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-4h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-4h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3C.223 9 0 8.777 0 8.5S.223 8 .5 8zm24 11c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5s-.666 1.5-1.5 1.5-1.5-.666-1.5-1.5.666-1.5 1.5-1.5zm-13-1C10.125 19 9 20.125 9 21.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5s-.666 1.5-1.5 1.5-1.5-.666-1.5-1.5.666-1.5 1.5-1.5zm-5-14C5.678 6 5 6.678 5 7.5v11c0 .822.678 1.5 1.5 1.5h2c.676.01.676-1.01 0-1h-2c-.286 0-.5-.214-.5-.5v-11c0-.286.214-.5.5-.5h13c.286 0 .5.214.5.5V19h-5.5c-.66 0-.648 1.01 0 1h7c.66 0 .654-1 0-1H21v-9h4.227L29 15.896V18.5c0 .286-.214.5-.5.5h-1c-.654 0-.654 1 0 1h1c.822 0 1.5-.678 1.5-1.5v-2.75c0-.095-.027-.19-.078-.27l-4-6.25c-.092-.143-.25-.23-.422-.23H21V7.5c0-.822-.678-1.5-1.5-1.5z" />
                </svg>
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
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  width={"80px"}
                >
                  <g data-name="19 costumer service" id="_19_costumer_service">
                    <path d="M37.71,34.54a13.428,13.428,0,0,0,5.51-4.86H46.7a2.915,2.915,0,0,0,2.74-3.06V19.43a3.124,3.124,0,0,0-.2-1.11V18.3a25.246,25.246,0,0,0-5.2-9.54l-.13-.15a15.275,15.275,0,0,0-5.72-3.97,17.135,17.135,0,0,0-14.11.8,15.539,15.539,0,0,0-3.99,3.17l-.13.15a25.246,25.246,0,0,0-5.2,9.54v.02a3.124,3.124,0,0,0-.2,1.11v7.19a2.915,2.915,0,0,0,2.74,3.06h3.48a13.428,13.428,0,0,0,5.51,4.86,20.226,20.226,0,0,0-15.02,19.5V59.5a1,1,0,0,0,1,1H51.73a1,1,0,0,0,1-1V54.04A20.226,20.226,0,0,0,37.71,34.54Zm9.73-15.11v7.19c0,.56-.35,1.06-.74,1.06H44.29c.17-.42.33-.85.46-1.29,0-.01,0-.01.01-.02a13.235,13.235,0,0,0-.1-8H46.7C47.09,18.37,47.44,18.87,47.44,19.43ZM17.3,27.68c-.39,0-.74-.5-.74-1.06V19.43c0-.56.35-1.06.74-1.06h2.04a13.261,13.261,0,0,0,.37,9.31Zm.26-11.31a22.694,22.694,0,0,1,3.89-6.28l.12-.13A13.124,13.124,0,0,1,25.05,7.2a15.268,15.268,0,0,1,12.41-.7,13.159,13.159,0,0,1,4.97,3.46l.12.13a22.694,22.694,0,0,1,3.89,6.28H43.82a13.311,13.311,0,0,0-23.64,0Zm3.11,6.14A11.33,11.33,0,1,1,43.05,25H39.71a2.991,2.991,0,0,0-2.82-2h-3a3,3,0,0,0,0,6h3a2.991,2.991,0,0,0,2.82-2H42.4a11.329,11.329,0,0,1-21.73-4.49Zm17.22,3.48v.02a.994.994,0,0,1-1,.99h-3a1,1,0,0,1,0-2h3A.994.994,0,0,1,37.89,25.99ZM50.73,58.5H13.27V54.04a18.228,18.228,0,0,1,18.2-18.2h1.06a18.228,18.228,0,0,1,18.2,18.2Z" />
                  </g>
                </svg>
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
        <div id="colorOptions" className='section'>
          <h3>Elige Tu estilo</h3>
          <div className="colorOptionsContainer">
            <div className="colorOption green">
              <div className="imgContainer">
                <img src="assets/img/morralArmyGreen.webp" alt="morralVerde" />
              </div>
              <span> Verde Olivo </span>
            </div>
            <div className="colorOption black">
              <div className="imgContainer">
                <img src="assets/img/morralBlack.webp" alt="MorralNegro" />
              </div>
              <span>Negro Noche</span>
            </div>
            <div className="colorOption desierto">
              <div className="imgContainer">
                <img src="assets/img/MorralCaqui.webp" alt="colorDesierto" />
              </div>
              <span>Color Desierto</span>
            </div>
          </div>
        </div>
        {/* <div id="banner">
          <h2>Explora los diversos usos del Morral Tactico</h2>
          <img src="assets/img/usosMorralv3.png" alt="" />
        </div> */}
        <div id="priceContainer2" className="offer">
          <div className="prices">
            <div className="price before">Antes: $299.000</div>
            <div className="price after">HOY: $169.900</div>
          </div>
        </div>
        <div id="cta3" className="section">
          <div className="ctaContainer">
            <button onClick={handleOpenForm}>
              ¡QUIERO EL MORRAL!{" "}
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
          </div>
        </div>
        <div id="commonQuestions" className='section'>
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
            <div className="price before">Antes: $299.000</div>
            <div className="price after">HOY: $169.000</div>
          </div>
          <div className="contraentrega">
            Envío <span>GRATIS</span> + Pago <span>CONTRAENTREGA</span>
          </div>
          <div className="ctaContainer">
            <button onClick={handleOpenForm}>
              ¡Llevalo y paga en casa!{" "}
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
        <footer className='section'>
          <div className="imgContainer">
            <img src="assets/img/KratosLogo.webp" alt="" />
          </div>
          <span className="sign">Creado Por ArenasCode ©</span>
        </footer>
      </main>
    </div>
  );
};
export default Home;
