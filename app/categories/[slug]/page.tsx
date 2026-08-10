import Link from "next/link";
import Image from "next/image";

type Category = {
  title: string;
  image: string;
  description: string;
  products: {
    name: string;
    price: string;
  }[];
};

const categories: Record<string, Category> = {
  "hospital-beds": {
    title: "Hospital Beds",
    image: "/images/hospital-bed.webp",
    description:
      "High-quality electric and manual hospital beds designed for patient comfort and hospital efficiency.",
    products: [
      { name: "Electric ICU Bed", price: "$2,450" },
      { name: "Manual Hospital Bed", price: "$980" },
      { name: "Pediatric Hospital Bed", price: "$1,650" },
    ],
  },

  "patient-monitors": {
    title: "Patient Monitors",
    image: "/images/monitor.webp",
    description:
      "Advanced monitoring systems for ICU, emergency rooms, operating rooms and clinics.",
    products: [
      { name: "5-Parameter Monitor", price: "$1,200" },
      { name: "ICU Patient Monitor", price: "$2,950" },
      { name: "Portable Vital Signs Monitor", price: "$860" },
    ],
  },

  wheelchairs: {
    title: "Wheelchairs",
    image: "/images/wheelchair.webp",
    description:
      "Comfortable and durable wheelchairs designed for hospitals, rehabilitation centers and home care.",
    products: [
      { name: "Manual Wheelchair", price: "$340" },
      { name: "Transport Wheelchair", price: "$280" },
      { name: "Electric Wheelchair", price: "$2,700" },
    ],
  },

  "medical-gloves": {
    title: "Medical Gloves",
    image: "/images/gloves.webp",
    description:
      "Disposable nitrile and latex gloves providing maximum safety for healthcare professionals.",
    products: [
      { name: "Nitrile Gloves", price: "$12 / Box" },
      { name: "Latex Gloves", price: "$10 / Box" },
      { name: "Sterile Surgical Gloves", price: "$24 / Box" },
    ],
  },
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = categories[slug];

  if (!category) {
    return (
      <main className="pt-36 text-center">
        <h1 className="text-4xl font-bold">Category Not Found</h1>
        <p className="mt-4 text-gray-600">Slug: {slug}</p>
      </main>
    );
  }

  return (
    <main className="pt-36 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-8">

        <Link
          href="/categories"
          className="text-purple-700 font-semibold"
        >
          ← Back to Categories
        </Link>

        <div className="grid md:grid-cols-2 gap-16 mt-8 items-center">

          <Image
            src={category.image}
            alt={category.title}
            width={700}
            height={500}
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h1 className="text-5xl font-bold text-purple-700">
              {category.title}
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              {category.description}
            </p>
          </div>

        </div>

        <div className="mt-20">

          <h2 className="text-4xl font-bold text-center text-purple-700">
            Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {category.products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold">
                  {product.name}
                </h3>

                <p className="mt-4 text-purple-700 font-bold text-xl">
                  {product.price}
                </p>

                <button className="mt-8 w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl font-semibold">
                  Request Quote
                </button>
              </div>
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}