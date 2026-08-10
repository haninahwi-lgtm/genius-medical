import Header from "../components/Header";

const categories = [
  {
    name: "Hospital Beds",
    image: "/images/hospital-bed.webp",
    description: "Electric and manual hospital beds for patient care.",
  },
  {
    name: "Patient Monitors",
    image: "/images/monitor.webp",
    description: "Advanced monitoring systems for ICU and clinics.",
  },
  {
    name: "Wheelchairs",
    image: "/images/wheelchair.webp",
    description: "Manual and transport wheelchairs for mobility.",
  },
  {
    name: "Medical Gloves",
    image: "/images/gloves.webp",
    description: "Disposable gloves for medical professionals.",
  },
  {
    name: "ICU Equipment",
    image: "/images/hero.avif",
    description: "Critical care equipment for intensive care units.",
  },
  {
    name: "Diagnostic Devices",
    image: "/images/monitor.webp",
    description: "Reliable diagnostic tools for healthcare facilities.",
  },
];

export default function CategoriesPage() {
  return (
    <>
      <Header />

      <main className="bg-gray-100 min-h-screen pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-purple-700">
              Product Categories
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              Browse our complete range of medical equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >

                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6 flex flex-col flex-1">

                  <h2 className="text-2xl font-bold text-purple-700">
                    {category.name}
                  </h2>

                  <p className="mt-4 text-gray-600 flex-1">
                    {category.description}
                  </p>

                  <button className="mt-6 w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl font-semibold transition">
                    Explore Category
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </main>
    </>
  );
}