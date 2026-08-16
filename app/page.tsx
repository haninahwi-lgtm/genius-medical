import Link from "next/link";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-28">
        {/* Hero Section */}
        <section
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.avif')" }}
        >
          <div className="absolute inset-0 bg-black/45"></div>

          <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">
            <div className="max-w-xl">
              <h1 className="text-6xl font-bold text-white leading-tight">
                Medical Equipment
                <br />
                You Can Trust
              </h1>

              <p className="mt-8 text-xl text-gray-200">
                Premium medical equipment for hospitals, clinics, home
                healthcare and rehabilitation.
              </p>

              <div className="mt-10 flex gap-5">
                {/* Shop Now */}
                <Link
                  href="/products"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Shop Now
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

        {/* Featured Categories */}
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
              <ProductCard
                name="Hospital Beds"
                image="/images/hospital-bed.webp"
                description="Electric and manual beds designed for hospitals and clinics."
                link="/categories/hospital-beds"
              />

              <ProductCard
                name="Patient Monitors"
                image="/images/monitor.webp"
                description="High-precision monitoring systems for patient care."
                link="/categories/patient-monitors"
              />

              <ProductCard
                name="Wheelchairs"
                image="/images/wheelchair.webp"
                description="Comfortable mobility solutions for healthcare facilities."
                link="/categories/wheelchairs"
              />

              <ProductCard
                name="Medical Gloves"
                image="/images/gloves.webp"
                description="Premium disposable gloves for medical professionals."
                link="/categories/medical-gloves"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-purple-700">
                About Genius Medical
              </h2>

              <p className="mt-4 text-xl font-semibold text-gray-700">
                Reliable Medical Equipment. Professional Service.
              </p>
            </div>

            <div className="text-lg text-gray-600 leading-8 space-y-6">
              <p>
                Genius Medical is a Saudi-based medical equipment provider
                dedicated to supporting hospitals, clinics, healthcare
                professionals, and home-care needs with reliable medical
                equipment and healthcare solutions.
              </p>

              <p>
                We make sourcing medical equipment simple and dependable by
                offering a carefully selected range of products across
                essential healthcare categories, with a focus on quality,
                practicality, and customer service.
              </p>

              <p>
                Whether you are equipping a healthcare facility, replacing
                existing equipment, or looking for solutions for home
                healthcare and rehabilitation, our team is committed to
                helping you find the right products for your needs.
              </p>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl font-semibold text-purple-700">
                Genius Medical
              </p>

              <p className="mt-2 text-gray-600">
                Supporting better healthcare through dependable equipment
                and service.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}