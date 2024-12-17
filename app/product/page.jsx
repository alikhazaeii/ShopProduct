import Link from 'next/link';

async function dataProduct() {
  const res = await fetch('https://673fa428a9bc276ec4b93059.mockapi.io/prodoctShop/');
  if (!res.ok) {
    throw new Error('Error index');
  }
  return res.json();
}

export default async function ProductPage() {
  const product = await dataProduct();

  return (
    <div className="w-full">
      <h1>Products</h1>
      <div className="flex flex-wrap justify-between w-full m-2">
        {product.map((product) => {
          return (
            <div key={product.id} className="border w-full md:w-6/12 lg:w-3/12 text-center p-4 rounded shadow-sm ">
              <h1>{product.name}</h1>
              <img src={product.avatar} alt={product.name} />
              <h2>${product.price}</h2>
              <p>{product.desc}</p>

              <Link href={`${product.id}`} className="text-slate-600">
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
