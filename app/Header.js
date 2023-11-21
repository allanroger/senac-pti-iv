"use client"
import Link from 'next/link'
import React from 'react'
import useCart from './(store)/store'
import Modal from './Modal'

export default function Header() {
    const cartItems = useCart(state => state.cart)
    const openModal = useCart(state => state.openModal)
    const setOpenModal = useCart(state => state.setOpenModal)
    return (
        <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
            {openModal && (
                <Modal />
            )}
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">

                <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
                    <Link href={'/'} className='mr-5 font-medium hover:text-gray-900'>Home</Link>
                    <Link href={'/about'} className='mr-5 font-medium hover:text-gray-900'>Sobre nós</Link>
                    <Link href={'/contact'} className='mr-5 font-medium hover:text-gray-900'>Contato</Link>
                </nav>
                <Link href={'/'} className='flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0'>
                    <h1 className='w-auto h-5 text-gray-900 fill-current'>Headphone</h1>
                </Link>
                <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
                    <div onClick={setOpenModal} className='relative cursor-pointer group place-items-center'>
                        {cartItems.length > 0 && (
                            <span
                            className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 inline-block whitespace-nowrap rounded-full bg-neutral-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-neutral-50 dark:bg-neutral-900">
                                {cartItems.length}
                            </span>
                        )}
                        <i className="fa-solid cursor-pointer fa-cart-shopping px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-indigo-500 rounded shadow outline-none group-hover:bg-indigo-600 group-hover:shadow-md focus:outline-none ease"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}
