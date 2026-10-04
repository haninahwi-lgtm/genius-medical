import Link from "next/link";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Header />

      <main className="pt-28">

        {/* =========================
            HERO SECTION
        ========================== */}
        <section
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.avif')" }}
        >
          <div className="absolute inset-0 bg-black/45"></div>

          <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 sm:px-8">
            <div className="max-w-2xl">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-up">
                Medical & Equipment
                <br />
                Supplies You Can Trust
              </h1>

              <p className="mt-6 sm:mt-8 text-base sm:text-xl text-gray-200">
                Premium medical equipment and healthcare supplies for
                hospitals, clinics, schools, sports clubs, home healthcare,
                rehabilitation centers, and other organizations.
              </p>

              <div className="mt-10 flex gap-5">

                <Link
                  href="/products"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Explore Products
                </Link>

                <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-700 transition"
                >
                  Contact Us
                </Link>

              </div>
            </div>
          </div>
        </section>


        {/* =========================
            WHO WE SERVE
        ========================== */}
        <section className="py-20 sm:py-24 bg-gray-100">

          <div className="max-w-7xl mx-auto px-6 sm:px-8">

            <div className="text-center mb-12">

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Who We Serve
              </h2>

              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
                We provide medical equipment and healthcare supplies for
                healthcare facilities, professionals, organizations, and
                individuals across Saudi Arabia.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-white rounded-2xl shadow-lg p-7">
                <h3 className="text-xl font-bold text-purple-700">
                  Hospitals & Clinics
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Medical equipment and supplies to support patient care and
                  healthcare facilities.
                </p>
              </div>


              <div className="bg-white rounded-2xl shadow-lg p-7">
                <h3 className="text-xl font-bold text-purple-700">
                  Healthcare Professionals
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Practical equipment and supplies for doctors, nurses, and
                  other healthcare professionals.
                </p>
              </div>


              <div className="bg-white rounded-2xl shadow-lg p-7">
                <h3 className="text-xl font-bold text-purple-700">
                  Schools & Sports Clubs
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Healthcare and first-aid supplies for schools, sports clubs,
                  and active organizations.
                </p>
              </div>


              <div className="bg-white rounded-2xl shadow-lg p-7">
                <h3 className="text-xl font-bold text-purple-700">
                  Home Healthcare
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Equipment and supplies that support healthcare needs at
                  home.
                </p>
              </div>


              <div className="bg-white rounded-2xl shadow-lg p-7">
                <h3 className="text-xl font-bold text-purple-700">
                  Rehabilitation Centers
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Medical and rehabilitation equipment for care and recovery
                  environments.
                </p>
              </div>


              <div className="bg-white rounded-2xl shadow-lg p-7">
                <h3 className="text-xl font-bold text-purple-700">
                  Organizations
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Healthcare supplies and equipment for organizations with
                  medical and workplace needs.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            OUR PRODUCTS
        ========================== */}
        <section className="py-20 sm:py-24 bg-white">

          <div className="max-w-7xl mx-auto px-6 sm:px-8">

            {/* Section Heading */}
            <div className="text-center mb-12">

              <p className="text-purple-700 font-semibold uppercase tracking-wider">
                Our Products
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
                Medical Equipment & Healthcare Supplies
              </h2>

              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
                Explore a selection of medical equipment and healthcare
                supplies that we can provide for different healthcare and
                organizational needs.
              </p>

            </div>


            {/* Featured Products */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  name={product.name}
                  image={product.image}
                  description={product.shortDescription}
                  link={`/products/${product.slug}`}
                />
              ))}

            </div>


            {/* View All Products */}
            <div className="mt-12 text-center">

              <Link
                href="/products"
                className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                View All Products
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}