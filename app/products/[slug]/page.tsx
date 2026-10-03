import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import { products } from "../../data/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <Header />

        <main className="pt-36 text-center min-h-screen bg-gray-100">
          <h1 className="text-5xl font-bold">
            Product Not Found
          </h1>

          <Link
            href="/products"
            className="mt-8 inline-block text-purple-700 font-semibold"
          >
            ← Back to Products
          </Link>
        </main>
      </>
    );
  }

  const isCPAP = product.slug === "soundsleep-cpap";
  const isBPAP = product.slug === "soundsleep-bpap";

  return (
    <>
      <Header />

      <main className="pt-36 pb-20 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-8">

          {/* Back to Products */}
          <Link
            href="/products"
            className="text-purple-700 font-semibold hover:underline"
          >
            ← Back to Products
          </Link>

          {/* Product Overview */}
          <div className="grid lg:grid-cols-2 gap-16 mt-8">

            {/* Product Image */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative w-full h-[500px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Information */}
            <div>
              <h1 className="text-5xl font-bold text-purple-700">
                {product.name}
              </h1>

              <p className="mt-8 text-lg text-gray-600 leading-8">
                {product.description}
              </p>

              <div className="flex gap-5 mt-12 flex-wrap">

                {/* Request a Quote */}
                <Link
                  href="/contact"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Request a Quote
                </Link>

                {/* Contact Us */}
                <Link
                  href="/contact"
                  className="border border-purple-700 text-purple-700 px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 hover:text-white transition"
                >
                  Contact Us
                </Link>

              </div>
            </div>
          </div>

          {/* Specifications & Features */}
          {(isCPAP || isBPAP) && (
            <div className="mt-20">

              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-purple-700">
                  Specifications & Features
                </h2>

                <p className="mt-4 text-lg text-gray-600">
                  SoundSleep series CPAP and BPAP system
                  specifications.
                </p>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">

                <h3 className="text-3xl font-bold mb-8">
                  Key Features
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                  <div className="border rounded-xl p-6">
                    <h4 className="font-bold text-purple-700 text-lg">
                      User-Machine Synchronization
                    </h4>

                    <p className="mt-2 text-gray-600">
                      Advanced flow sensing and flow acquisition
                      help provide accurate synchronization.
                    </p>
                  </div>

                  <div className="border rounded-xl p-6">
                    <h4 className="font-bold text-purple-700 text-lg">
                      Respiratory Event Detection
                    </h4>

                    <p className="mt-2 text-gray-600">
                      The system can detect flow limitation,
                      snoring, hypopnea and apnea events.
                    </p>
                  </div>

                  <div className="border rounded-xl p-6">
                    <h4 className="font-bold text-purple-700 text-lg">
                      Auto Altitude Compensation
                    </h4>

                    <p className="mt-2 text-gray-600">
                      Automatic altitude compensation is
                      supported across the SoundSleep series.
                    </p>
                  </div>

                  <div className="border rounded-xl p-6">
                    <h4 className="font-bold text-purple-700 text-lg">
                      Auto Leak Compensation
                    </h4>

                    <p className="mt-2 text-gray-600">
                      Automatic leak compensation helps maintain
                      appropriate therapy delivery.
                    </p>
                  </div>

                  <div className="border rounded-xl p-6">
                    <h4 className="font-bold text-purple-700 text-lg">
                      Auto On & Auto Off
                    </h4>

                    <p className="mt-2 text-gray-600">
                      Automatic start and stop functionality is
                      included in the SoundSleep feature set.
                    </p>
                  </div>

                  <div className="border rounded-xl p-6">
                    <h4 className="font-bold text-purple-700 text-lg">
                      High-Performance Motor
                    </h4>

                    <p className="mt-2 text-gray-600">
                      Designed with a high-performance motor for
                      respiratory therapy.
                    </p>
                  </div>

                  <div className="border rounded-xl p-6">
                    <h4 className="font-bold text-purple-700 text-lg">
                      Humidification
                    </h4>

                    <p className="mt-2 text-gray-600">
                      User-friendly humidifier with easy-to-fill
                      water chamber and easy cleaning.
                    </p>
                  </div>

                  <div className="border rounded-xl p-6">
                    <h4 className="font-bold text-purple-700 text-lg">
                      Fast Heating
                    </h4>

                    <p className="mt-2 text-gray-600">
                      The humidifier system includes fast heating
                      and temperature-related functionality.
                    </p>
                  </div>

                  <div className="border rounded-xl p-6">
                    <h4 className="font-bold text-purple-700 text-lg">
                      Long-Term Data
                    </h4>

                    <p className="mt-2 text-gray-600">
                      Topscan software can retrieve more than
                      365 days of machine data for review and
                      compliance reporting.
                    </p>
                  </div>

                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-white rounded-2xl shadow-lg p-8">

                <h3 className="text-3xl font-bold mb-8">
                  Technical Specifications
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">

                    <thead>
                      <tr className="bg-purple-700 text-white">
                        <th className="text-left p-4 rounded-tl-xl">
                          Specification
                        </th>

                        <th className="text-left p-4 rounded-tr-xl">
                          Details
                        </th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr className="border-b">
                        <td className="p-4 font-semibold">
                          Product Type
                        </td>

                        <td className="p-4">
                          {isCPAP
                            ? "CPAP"
                            : "BPAP S-20/25, BPAP Auto S-20/25 and BPAP S/T-20/25 series"}
                        </td>
                      </tr>

                      <tr className="border-b bg-gray-50">
                        <td className="p-4 font-semibold">
                          Pressure Range
                        </td>

                        <td className="p-4">
                          {isCPAP
                            ? "4–20 hPa"
                            : "4–20/25 hPa"}
                        </td>
                      </tr>

                      <tr className="border-b">
                        <td className="p-4 font-semibold">
                          Humidification
                        </td>

                        <td className="p-4">
                          0–5
                        </td>
                      </tr>

                      <tr className="border-b bg-gray-50">
                        <td className="p-4 font-semibold">
                          Noise
                        </td>

                        <td className="p-4">
                          &lt;30 dB
                        </td>
                      </tr>

                      <tr className="border-b">
                        <td className="p-4 font-semibold">
                          Weight
                        </td>

                        <td className="p-4">
                          0.8 kg without humidifier
                        </td>
                      </tr>

                      <tr className="border-b bg-gray-50">
                        <td className="p-4 font-semibold">
                          Dimensions
                        </td>

                        <td className="p-4">
                          140 × 156 × 94 mm without humidifier
                        </td>
                      </tr>

                      <tr className="border-b">
                        <td className="p-4 font-semibold">
                          Auto Altitude Compensation
                        </td>

                        <td className="p-4">
                          Yes
                        </td>
                      </tr>

                      <tr className="border-b bg-gray-50">
                        <td className="p-4 font-semibold">
                          Auto Leak Compensation
                        </td>

                        <td className="p-4">
                          Yes
                        </td>
                      </tr>

                      <tr className="border-b">
                        <td className="p-4 font-semibold">
                          Languages
                        </td>

                        <td className="p-4">
                          Multiple
                        </td>
                      </tr>

                      {isCPAP && (
                        <tr className="bg-gray-50">
                          <td className="p-4 font-semibold">
                            EPFlex
                          </td>

                          <td className="p-4">
                            Yes
                          </td>
                        </tr>
                      )}

                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Specifications shown are based on the
                SoundSleep CPAP and BPAP product brochure.
                Specifications may vary by model.
              </p>

            </div>
          )}

        </div>
      </main>
    </>
  );
}