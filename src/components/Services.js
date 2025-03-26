import React from "react";
import img from "../images/web.png";
import img2 from "../images/app.png";
import img4 from "../images/consultation.png";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-primary uppercase font-bold">
            Serviços
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-primary"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-primary">
            Somos profundamente comprometidos com o crescimento e o sucesso de
            nossos clientes.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Websites próprios
                </h2>
                <p className="text-md font-medium">
                  Somos especializados em criar e otimizar websites
                  personalizados de alta qualidade para empresas e organizações
                  de todos os tamanhos. Desenvolvemos sites responsivos e fáceis
                  de usar, sempre pensando nas necessidades específicas de
                  nossos clientes.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img2}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Presença digital da sua marca
                </h2>
                <p className="text-md font-medium">
                  Fortalecemos a presença digital da sua marca nas redes com
                  estratégias personalizadas, garantindo visibilidade,
                  engajamento e crescimento sustentável, sempre focando em
                  performance e alcance.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img4}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Consultoria Estratégica
                </h2>
                <p className="text-md font-medium">
                  Nossa consultoria estratégica oferece orientação especializada
                  e suporte para marcas e empreendedores que desejam otimizar
                  sua presença digital e expandir seu alcance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left">
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                  <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
                </svg>
              </div>
              <h3 className="text-3xl  text-primary font-bold">
                Nós <span className="font-black">Construímos</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  Oferecemos recomendações e estratégias personalizadas para
                  ajudar a aprimorar suas operações, reduzir custos e aumentar a
                  eficiência.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  width="72"
                  height="72"
                  viewBox="0 -8 72 72"
                >
                  <path
                    fill="#efa63b"
                    d="M64 12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22 27.25 42.93 18 42.93 18a3.54 3.54 0 0 0-4.18-.21c-2.36 1.24-5.87 3.07-7.33 3.78a3.37 3.37 0 0 1-5.06-2.64 3.44 3.44 0 0 1 2.1-3c3.33-2 10.36-6 13.29-7.52 1.78-1 3.06-1 5.51 1C50.27 12 53 14.27 53 14.27a2.75 2.75 0 0 0 2.26.43C58.63 14 64 12.78 64 12.78M27 41.5a3 3 0 0 0-3.55-4.09 3.07 3.07 0 0 0-.64-3 3.13 3.13 0 0 0-3-.75 3.07 3.07 0 0 0-.65-3 3.38 3.38 0 0 0-4.72.13c-1.38 1.32-2.27 3.72-1 5.14s2.64.55 3.72.3c-.3 1.07-1.2 2.07-.09 3.47s2.64.55 3.72.3c-.3 1.07-1.16 2.16-.1 3.46s2.84.61 4 .25c-.45 1.15-1.41 2.39-.18 3.79s4.08.75 5.47-.58a3.32 3.32 0 0 0 .3-4.68A3.18 3.18 0 0 0 27 41.5m25.35-8.82L41.62 22a3.53 3.53 0 0 0-3.77-.68c-1.5.66-3.43 1.56-4.89 2.24a8.15 8.15 0 0 1-3.29 1.1 5.59 5.59 0 0 1-3-10.34C29 12.73 34.09 10 34.09 10a6.46 6.46 0 0 0-5-2c-3.42 0-10.58 4.7-10.58 4.7a5.61 5.61 0 0 1-4.93.13L8 10.89v19.4s1.59.46 3 1a6.3 6.3 0 0 1 1.56-2.47 6.17 6.17 0 0 1 8.48-.06 5.4 5.4 0 0 1 1.34 2.37 5.5 5.5 0 0 1 2.29 1.4A5.4 5.4 0 0 1 26 34.94a5.47 5.47 0 0 1 3.71 4 5.4 5.4 0 0 1 2.39 1.43 5.65 5.65 0 0 1 1.48 4.89s.8.9 1.29 1.39a2.46 2.46 0 0 0 3.48-3.48s2 2.48 4.28 1c2-1.4 1.69-3.06.74-4a3.19 3.19 0 0 0 4.77.13 2.45 2.45 0 0 0 .13-3.3s1.33 1.81 4 .12c1.89-1.6 1-3.43 0-4.39Z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-3xl  text-primary font-bold">
                Nós <span className="font-black">Colaboramos</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  Colaboramos com sua equipe de marketing para otimizar
                  estratégias, criar soluções e impulsionar o crescimento da sua
                  marca e ampliando seu alcance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
