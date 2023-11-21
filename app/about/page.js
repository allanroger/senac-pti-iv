import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="relative z-10 overflow-hidden py-20 bg-gray-800 lg:py-[120px] text-gray-400">
            <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                <div className="flex flex-wrap ">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="relative">
                            <Image alt="" src={'https://source.unsplash.com/random/?headset,headphone'} width={100} height={100} className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
                            <div
                                className="absolute z-10 hidden w-full h-full bg-indigo-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                        <div className="relative">
                            <h2
                                className="absolute -top-20   left-0 text-[20px] lg:text-[100px] font-bold  text-white opacity-5 md:block hidden">
                                Sobre nós
                            </h2>
                            <h3 className="pl-2 text-3xl font-bold border-l-8 border-indigo-400 md:text-5xl text-white">
                                A Revolução no Som: A Qualidade e Tecnologia dos Fones de Ouvido na Vida Cotidiana
                            </h3>
                        </div>
                        <p className="mt-6 mb-10 text-base leading-7 text-white">
                            A qualidade de som excepcional dos fones de ouvido modernos é um testemunho do avanço contínuo na engenharia acústica. Os drivers de alta fidelidade e as tecnologias de cancelamento de ruído transportam os usuários para um mundo de nuances musicais e detalhes sonoros que antes eram imperceptíveis. Seja para apreciar a música durante uma corrida matinal, imergir-se em um podcast inspirador durante o trajeto para o trabalho ou desfrutar de um momento de tranquilidade em um café lotado, a qualidade sonora cristalina dos fones de ouvido cria uma experiência auditiva verdadeiramente envolvente. A conectividade avançada dos fones de ouvido permite uma integração perfeita com uma variedade de dispositivos, desde smartphones e tablets até laptops e smart TVs. A capacidade de alternar facilmente entre chamadas telefônicas e reprodução de música, sem comprometer a qualidade do som, torna esses dispositivos versáteis e essenciais em nosso cotidiano agitado.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}