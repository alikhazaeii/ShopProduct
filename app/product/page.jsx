
import Image from "next/image"
import Link from "next/link"
import { Button, Rating } from "@mui/material"



async function getData() {
  const res = await fetch('https://673fa428a9bc276ec4b93059.mockapi.io/prodoctShop')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}



export default async function ProdoctShop() {
  const data = await getData()
  return (
    <article className="w-full flex flex-wrap justify-center my-16">
      <h1 className="w-full text-center text-2xl md:text-5xl capitalize">products</h1>
      <div className="w-full flex flex-wrap justify-center">
        {data.map((product) => {
          const randomRating = Math.floor(Math.random() * 5) + 1;
          let x = product.id + "-" + product.name;
          console.log(x);
          
          return (
            <div key={product.id} className="text-black border w-full md:w-5/12 lg:w-3/12 flex flex-wrap justify-center items-center m-5 py-2 text-center hover:scale-110 transition-all duration-200 shadow-2xl  *:my-2">
              <p className="w-full text-xl">{product.desc}</p>
              <Image src={product.avatar} width={300} height={300} alt="image" className="m-5" />
              <h2 className="text-xl w-full">price: <span className="text-2xl font-bold">${product.price}</span></h2>
              <Rating name={`rating-${product.id}`} value={randomRating} readOnly className="w-full flex justify-center" />
              <div className="flex justify-evenly w-full p-5">
                <Button variant="contained" color="warning" sx={{ width: '120px', height: '50px', }}>
                  <Link href={x} as={x}>
                    detail
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </article>

  )
}