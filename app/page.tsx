import Link from "next/link";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

export default function Home() {
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

                {/* Explore Products */}
                <Link
                  href="/products"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Explore Products
                </Link>

                {/* Contact Us */}
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
            FEATURED CATEGORIES
        ========================== */}
        <section className="py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-8">

            <div className="text-center mb-14">

              <h2 className="text-5xl font-bold text-purple-700">
                Featured Categories
              </h2>

              <p className="mt-4 text-gray-600 text-lg">
                Explore our most popular medical equipment.
              </p>

            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Hospital Beds */}
              <ProductCard
                name="Hospital Beds"
                image="/images/hospital-bed.webp"
                description="Electric and manual beds designed for hospitals and clinics."
                link="/categories/hospital-beds"
              />

              {/* Patient Monitors */}
              <ProductCard
                name="Patient Monitors"
                image="/images/monitor.webp"
                description="High-precision monitoring systems for patient care."
                link="/categories/patient-monitors"
              />

              {/* Wheelchairs */}
              <ProductCard
                name="Wheelchairs"
                image="/images/wheelchair.webp"
                description="Comfortable mobility solutions for healthcare facilities."
                link="/categories/wheelchairs"
              />

              {/* Medical Gloves */}
              <ProductCard
                name="Medical Gloves"
                image="/images/gloves.webp"
                description="Premium disposable gloves for medical professionals."
                link="/categories/medical-gloves"
              />

            </div>

          </div>
        </section>

      </main>
    </>
  );
}