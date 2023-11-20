import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-zinc-50 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-blueGray-700">Vamos manter contato!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Encontre-nos em qualquer uma dessas plataformas, nós iremos lhe responder em 1-2 dias úteis.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-facebook-square"></i>
                            </button>
                            <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-instagram"></i>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Links Úteis</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href={'/about'} className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Sobre nós</Link>
                                    </li>
                                    <li>
                                        <Link href={'/contact'} className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Contato</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}