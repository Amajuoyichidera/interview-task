import ProductCard from '../components/ProductCard';
import UserProfile from '../components/UserProfile';
import PaymentForm from '../components/PaymentForm';

const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Product 2', price: 150, image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Product 3', price: 200, image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-8 text-center">Products</h1>
      <div className="flex flex-wrap justify-around">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <h1 className="text-2xl font-bold my-8 text-center">User Profiles</h1>
      <UserProfile />
      <h1 className="text-2xl font-bold my-8 text-center">Payment Form</h1>
      <PaymentForm />
    </div>
  );
};

export default Home;

