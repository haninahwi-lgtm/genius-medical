export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700">
            Contact Genius Medical
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            We are here to help with your medical equipment needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-purple-700">Phone</h3>
                <a
                  href="tel:+966138423946"
                  className="text-gray-700 hover:text-purple-700"
                >
                  +966 13 842 3946
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-purple-700">Email</h3>
                <a
                  href="mailto:info@genius.com.sa"
                  className="text-gray-700 hover:text-purple-700"
                >
                  info@genius.com.sa
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-purple-700">WhatsApp</h3>
                <a
                  href="https://wa.me/966544592923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-700"
                >
                  +966 54 459 2923
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-purple-700">Address</h3>
                <p className="text-gray-700">
                  Al Badiyah, 28th Street
                  <br />
                  Dammam 32243
                  <br />
                  Saudi Arabia
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-700">
                  Business Hours
                </h3>

                <p className="text-gray-700">
                  Saturday – Thursday: 9:00 AM – 10:30 PM
                  <br />
                  Friday: 4:00 PM – 10:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Medical Equipment?
            </h2>

            <p className="text-gray-600 mb-8">
              Contact our team for product information, pricing,
              availability, and quote requests.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/966544592923"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-purple-700 hover:bg-purple-800 text-white font-semibold py-4 px-6 rounded-xl transition"
              >
                Contact Us on WhatsApp
              </a>

              <a
                href="mailto:info@genius.com.sa"
                className="text-center border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white font-semibold py-4 px-6 rounded-xl transition"
              >
                Email Us
              </a>

              <a
                href="tel:+966138423946"
                className="text-center border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white font-semibold py-4 px-6 rounded-xl transition"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}