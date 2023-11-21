"use client"
import Image from "next/image"
import useCart from "../(store)/store"

export default function ProductPage(props) {
    const { searchParams } = props
    const { price_id } = searchParams
    const product = useCart(state => state.product)
    const addItemToCart = useCart(state => state.addItemToCart)
    const { price, productInfo, name, description } = product

    function handleAddToCart() {
        const newItem = {
            quantity: 1,
            price_id,
            name,
            price
        }
        addItemToCart({ newItem })
    }

    return (
        <>
            <div className="bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <Image src={productInfo?.images[0]} alt={name} className="w-full h-full object-cover" width={100} height={100} />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button onClick={handleAddToCart} className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Adicionar a sacola</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-white ">Preço:</span>
                                    <span className="text-white ">${price / 100}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-white">Disponibilidade:</span>
                                    <span className="text-white ">Em estoque</span>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-white ">Descrição do produto:</span>
                                <p className="text-white text-sm mt-2">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}