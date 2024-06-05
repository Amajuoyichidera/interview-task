import Link from 'next/link';

const Product = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{product.name}</div>
        <p className="text-gray-600 text-base">${product.price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href={`/products/${product.id}`}>
          <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-center">
            View
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Product;

