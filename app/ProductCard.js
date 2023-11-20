"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import useCart from './(store)/store'
import Image from 'next/image'

export default function ProductCard(props) {
    const { product } = props
    const { id: price_id, unit_amount: cost, product: productInfo } = product
    const { name, description } = productInfo

    const setProduct = useCart(state => state.setProduct)

    const router = useRouter()

    function onProductClick() {
        const newProduct = {
            name,
            description,
            price_id,
            cost,
            productInfo
        }
        setProduct({ newProduct })
        router.push('/product?price_id=' + price_id)
    }
    return (
        <div className='flex flex-col cursor-pointer p-5 border bg-gray-100'>
            <Image src={productInfo.images[0]} alt={name} className="w-full h-full object-cover" width={100} height={100} priority={true}/>
            <div className='flex flex-col gap-2 p-4'>
                <div className='flex items-center justify-between'>
                    <h3>{name}</h3>
                    <p>${cost / 100}</p>
                </div>
                <p className='text-sm'>{description}</p>
                <button onClick={onProductClick} className='bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600'>
                    Comprar
                </button>
            </div>
        </div>
    )
}
