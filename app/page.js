import Stripe from 'stripe'
import ProductCard from './ProductCard'
import Link from 'next/link'

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2020-08-27'
  })
  const res = await stripe.prices.list({
    expand: ['data.product']
  })
  const prices = res.data
  return prices
}

export default async function Home() {
  const products = await getStripeProducts()

  return (
    <main className='flex flex-col'>
      <div className="h-screen bg-black flex items-center">
        <section className="h-full w-full bg-cover bg-center flex items-center justify-center" style={{
          backgroundImage: `url('https://source.unsplash.com/random/?headset,headphone')`,
        }}>
          <div className="align-middle container mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Headphone</h1>
            <p className="text-xl mb-12">Domine o som, conquiste o jogo com os melhores fones do mercado!</p>
            <Link href={"/about"} className='bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600'>Saiba mais</Link>
          </div>
        </section>
      </div>
      <div className='max-w-[1000px] w-full mx-auto grid md:grid-cols-3 gap-4 m-5'>
        {products.map((product, productIndex) => {
          return (
            <ProductCard key={productIndex} product={product} />
          )
        })}
      </div>
    </main>
  )
}
