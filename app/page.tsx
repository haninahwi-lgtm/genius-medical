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


        {/* =========================
            ABOUT GENIUS MEDICAL
        ========================== */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">


            {/* Section Heading */}
            <div className="text-center mb-16">

              <p className="text-purple-700 font-semibold uppercase tracking-wider">
                About Us
              </p>

              <h2 className="mt-2 text-5xl font-bold text-gray-900">
                About Genius Medical
              </h2>

              <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto">
                Reliable medical equipment and practical healthcare solutions
                for professionals, facilities, and home care.
              </p>

            </div>


            {/* Main About Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">


              {/* LEFT SIDE */}
              <div>

                <h3 className="text-3xl font-bold text-purple-700 mb-6">
                  Supporting Better Healthcare
                </h3>


                <div className="space-y-5 text-lg text-gray-600 leading-8">

                  <p>
                    Genius Medical is a Saudi-based medical equipment provider
                    dedicated to supporting hospitals, clinics, healthcare
                    professionals, and home-care needs with dependable medical
                    equipment and healthcare solutions.
                  </p>

                  <p>
                    We make sourcing medical equipment simple and dependable
                    by offering a carefully selected range of products across
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


                {/* Products Button */}
                <div className="mt-8">

                  <Link
                    href="/products"
                    className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
                  >
                    Explore Our Products
                  </Link>

                </div>

              </div>


              {/* RIGHT SIDE */}
              <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100">

                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Why Genius Medical?
                </h3>


                <div className="space-y-7">


                  {/* Quality */}
                  <div className="flex gap-5">

                    <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-xl font-bold">
                      ✓
                    </div>

                    <div>

                      <h4 className="text-xl font-bold text-gray-900">
                        Quality & Practicality
                      </h4>

                      <p className="mt-2 text-gray-600 leading-7">
                        Carefully selected equipment for a range of healthcare
                        environments and everyday medical needs.
                      </p>

                    </div>

                  </div>


                  {/* Healthcare Solutions */}
                  <div className="flex gap-5">

                    <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-xl font-bold">
                      +
                    </div>

                    <div>

                      <h4 className="text-xl font-bold text-gray-900">
                        Healthcare Solutions
                      </h4>

                      <p className="mt-2 text-gray-600 leading-7">
                        Solutions for hospitals, clinics, healthcare
                        professionals, rehabilitation, and home care.
                      </p>

                    </div>

                  </div>


                  {/* Professional Support */}
                  <div className="flex gap-5">

                    <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-xl font-bold">
                      ★
                    </div>

                    <div>

                      <h4 className="text-xl font-bold text-gray-900">
                        Professional Support
                      </h4>

                      <p className="mt-2 text-gray-600 leading-7">
                        Our goal is to make finding and sourcing medical
                        equipment straightforward and dependable.
                      </p>

                    </div>

                  </div>


                  {/* Saudi Arabia */}
                  <div className="flex gap-5">

                    <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-xl font-bold">
                      SA
                    </div>

                    <div>

                      <h4 className="text-xl font-bold text-gray-900">
                        Proudly Serving Saudi Arabia
                      </h4>

                      <p className="mt-2 text-gray-600 leading-7">
                        Based in Dammam, Saudi Arabia, serving healthcare and
                        home-care needs with accessible local support.
                      </p>

                    </div>

                  </div>


                </div>
              </div>

            </div>


            {/* =========================
                CONTACT CTA
            ========================== */}
            <div className="mt-16 bg-purple-50 rounded-3xl px-8 py-10 text-center">

              <h3 className="text-2xl font-bold text-gray-900">
                Need help finding the right equipment?
              </h3>

              <p className="mt-3 text-gray-600 text-lg">
                Our team is ready to help you find the right solution for your
                healthcare needs.
              </p>

              <div className="mt-6">

                <Link
                  href="/contact"
                  className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Contact Our Team
                </Link>

              </div>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}