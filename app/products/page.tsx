import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main className="pt-40 pb-20 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          {/* Page Heading */}
          <div className="text-center mb-12 sm:mb-14">

            <p className="text-purple-700 font-semibold uppercase tracking-wider">
              What We Supply
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
              Medical Equipment & Healthcare Supplies
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              Explore a selection of medical equipment and healthcare supplies
              that we can provide for hospitals, clinics, healthcare
              professionals, organizations, schools, sports clubs, home care,
              and rehabilitation.
            </p>

            <p className="mt-5 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
              Product availability and specifications may vary. Contact us for
              product information, availability, and sourcing support.
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