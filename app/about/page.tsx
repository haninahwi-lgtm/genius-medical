import Link from "next/link";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-40 sm:pt-32 pb-20 bg-gray-100 min-h-screen">

        {/* =========================
            ABOUT HERO
        ========================== */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">

            <p className="text-purple-700 font-semibold uppercase tracking-wider">
              About Us
            </p>

            <h1 className="mt-3 text-5xl md:text-6xl font-bold text-gray-900">
              About Genius Medical
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-8">
              Reliable medical equipment, healthcare supplies, and practical
              healthcare solutions for professionals, healthcare facilities,
              organizations, and home care.
            </p>

          </div>


          {/* =========================
              MAIN ABOUT
          ========================== */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">

            <h2 className="text-3xl font-bold text-purple-700 mb-6">
              Supporting Better Healthcare
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-8">

              <p>
                Genius Medical is a Saudi-based provider of medical equipment
                and healthcare supplies, dedicated to supporting hospitals,
                clinics, healthcare professionals, organizations, and home-care
                needs with dependable products and practical healthcare
                solutions.
              </p>

              <p>
                We make sourcing medical equipment and healthcare supplies
                simple and dependable by offering a carefully selected range
                of products across essential healthcare categories, with a
                focus on quality, practicality, and customer service.
              </p>

              <p>
                Whether you are equipping a healthcare facility, replacing
                existing equipment, stocking essential medical supplies, or
                looking for solutions for home healthcare and rehabilitation,
                our team is committed to helping you find the right products
                for your needs.
              </p>

            </div>

          </div>


          {/* =========================
              WHY GENIUS MEDICAL
          ========================== */}
          <div className="mt-12">

            <div className="text-center mb-10">

              <h2 className="text-4xl font-bold text-gray-900">
                Why Genius Medical?
              </h2>

              <p className="mt-4 text-lg text-gray-600">
                Our approach is built around quality, practicality, and
                dependable support.
              </p>

            </div>


            <div className="grid md:grid-cols-2 gap-8">

              {/* Quality */}
              <div className="bg-white rounded-2xl shadow-lg p-8">

                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-2xl font-bold">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Quality & Practicality
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Carefully selected medical equipment and healthcare
                  supplies for a range of healthcare environments and
                  everyday medical needs.
                </p>

              </div>


              {/* Healthcare Solutions */}
              <div className="bg-white rounded-2xl shadow-lg p-8">

                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-2xl font-bold">
                  +
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Healthcare Solutions
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Solutions for hospitals, clinics, healthcare professionals,
                  rehabilitation, home care, schools, sports clubs, and other
                  organizations.
                </p>

              </div>


              {/* Professional Support */}
              <div className="bg-white rounded-2xl shadow-lg p-8">

                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-2xl font-bold">
                  ★
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Professional Support
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Our goal is to make finding and sourcing medical equipment
                  and healthcare supplies straightforward and dependable.
                </p>

              </div>


              {/* Saudi Arabia */}
              <div className="bg-white rounded-2xl shadow-lg p-8">

                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-xl font-bold">
                  SA
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Proudly Serving Saudi Arabia
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Based in Dammam, Saudi Arabia, serving healthcare,
                  organizational, and home-care needs with accessible local
                  support.
                </p>

              </div>

            </div>

          </div>


          {/* =========================
              WHAT WE SUPPLY
          ========================== */}
          <div className="mt-16 text-center">

            <p className="text-purple-700 font-semibold uppercase tracking-wider">
              What We Supply
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              Medical Equipment & Healthcare Supplies
            </h2>

            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              We support a variety of healthcare and organizational needs with
              equipment, supplies, and practical healthcare products.
            </p>

          </div>


          {/* =========================
              CTA
          ========================== */}
          <div className="mt-12 bg-purple-50 rounded-3xl px-8 py-12 text-center">

            <h2 className="text-3xl font-bold text-gray-900">
              Need help finding the right equipment or supplies?
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Our team is ready to help you find the right solution for your
              needs.
            </p>

            <div className="mt-8 flex justify-center gap-5 flex-wrap">

              <Link
                href="/products"
                className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Explore Our Products
              </Link>

              <Link
                href="/contact"
                className="border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}