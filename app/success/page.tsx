import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-8">

      <div className="bg-white shadow-xl rounded-3xl p-12 max-w-2xl w-full text-center">

        <div className="text-7xl mb-6">
          ✅
        </div>

        <h1 className="text-5xl font-bold text-purple-700">
          Quote Request Sent!
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Thank you for choosing <strong>Genius Medical</strong>.
          <br /><br />
          We have received your quote request successfully.
          One of our sales specialists will contact you as soon as possible.
        </p>

        <div className="flex justify-center gap-6 mt-12">

          <Link
            href="/"
            className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Back to Home
          </Link>

          <Link
            href="/products"
            className="border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    </main>
  );
}