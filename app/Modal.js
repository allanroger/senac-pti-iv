"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import ReactDom from 'react-dom'
import useCart from './(store)/store'
export default function Modal() {
    const closeModal = useCart(state => state.setOpenModal)
    const cartItems = useCart(state => state.cart)
    const router = useRouter()

    async function checkout() {
        const lineItems = cartItems.map(cartItem => {
            return {
                price: cartItem.price_id,
                quantity: 1
            }
        })
        const res = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ lineItems })
        })
        const data = await res.json()
        router.push(data.session.url)
    }

    return ReactDom.createPortal(
        <div className='fixed top-0 left-0 w-screen h-screen z-50'>
            <div onClick={closeModal} className='bg-transparent absolute  inset-0'> </div>
            <div className='flex flex-col bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4'>
                <div className='flex items-center p-6 justify-between text-xl relative'>
                    <h1>Sacola</h1>
                    <i onClick={closeModal} className="fa-solid cursor-pointer hover:opacity-60 fa-xmark"></i>
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3'></div>
                </div>
                <div className='p-4 overflow-scroll flex-1 flex flex-col gap-4'>
                    {cartItems.length === 0 ? (
                        <p>Não tem produtos na sacola</p>
                    ) : (
                        <>
                            {cartItems.map((cartItem, itemIndex) => {
                                return (
                                    <div key={itemIndex} className="flex border-l border-solid border-slate-700 px-2 flex-col gap-2">
                                        <div className='flex items-center justify-between'>
                                            <h2>
                                                {cartItem.name}
                                            </h2>
                                            <p>${cartItem.price / 100}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    )}
                </div>
                <div className='mx-auto mb-5 content-center'>
                    <button onClick={checkout} className='bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600'>Comprar</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}
