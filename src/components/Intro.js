import React from "react";
import img from "../images/people.svg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right" src={img} />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl  text-[#777] font-bold">Sobre nós</h3>
            <div>
              <p className="my-3 text-[40px] text-gray-600 font-bold">
                COMO PODEMOS AJUDAR O SEU{" "}
                <b className="text-[#efa63b]">NEGÓCIO</b> A ALCANÇAR SEU
                OBJETIVO
              </p>
            </div>

            <div>
              <p className="my-3 text-xl text-[#5e5e5e]">
                Escolher a estratégia de marketing certa para o seu negócio pode
                ser simples quando você sabe onde focar. Uma análise aprofundada
                do seu público-alvo e das tendências do mercado é fundamental
                para criar campanhas eficazes. Além disso, é essencial ter
                ferramentas de monitoramento e métricas claras para acompanhar
                os resultados e ajustar as ações de forma assertiva.
              </p>
            </div>
            <Link
              to="/contact"
              className="text-white bg-primary hover:bg-text inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Fale conosco
              <svg
                className="w-4 h-4 ml-1 group-hover: translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
