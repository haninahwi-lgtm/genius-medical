import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main className="pt-36 pb-20 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-8">

          {/* Page Heading */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-purple-700">
              Medical Equipment & Supplies
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our product range and contact us for pricing,
              availability, and quotations.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                name={product.name}
                image={product.image}
                description={product.shortDescription}
                link={`/products/${product.slug}`}
              />
            ))}
          </div>

        </div>
      </main>
    </>
  );
}