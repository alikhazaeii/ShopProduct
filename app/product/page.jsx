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
    <div className="container mx-auto p-4">
      <h1>Products</h1>
      <div className="flex flex-wrap w-[250px] h-[250px] m-2 bg-white">
        {product.map((product) => {
          return (
            <div key={product.id} className="border p-4 rounded shadow-sm">
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
