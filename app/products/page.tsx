
import Link from "next/link";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const sections = [
  {
    id: "disposable",
    title: "Disposable Medical Supplies",
    description:
      "Everyday medical consumables and protective supplies for healthcare environments.",
  },
  {
    id: "equipment",
    title: "Medical Equipment & Furniture",
    description:
      "Equipment and furniture for hospitals, clinics, rehabilitation centers, and patient care.",
  },
  {
    id: "respiratory",
    title: "Respiratory & Oxygen Equipment",
    description:
      "Oxygen therapy, respiratory support devices, and related supplies.",
  },
  {
    id: "emergency",
    title: "Emergency & Ambulance Equipment",
    description:
      "Selected emergency response, patient transport, and ambulance supplies.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-100 pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          {/* Page Heading */}
          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-wider text-purple-700">
              What We Supply
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
              Medical Equipment & Healthcare Supplies
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              We supply a selection of medical equipment, disposable supplies,
              respiratory products, and emergency equipment for hospitals,
              clinics, healthcare professionals, organizations, schools, sports
              clubs, home care, and rehabilitation.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm text-gray-500 sm:text-base">
              This is a selection of the products we can source. Contact us for
              availability, specifications, or items not shown on this page.
            </p>
          </div>

          {/* Grouped Product Sections */}
          <div className="space-y-16">
            {sections.map((section) => {
              const sectionProducts = products.filter(
                (product) => product.section === section.id
              );

              if (sectionProducts.length === 0) {
                return null;
              }

              return (
                <section key={section.id} id={section.id}>
                  <div className="mb-7 border-b border-gray-200 pb-4">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      {section.title}
                    </h2>

                    <p className="mt-2 max-w-3xl leading-7 text-gray-600">
                      {section.description}
                    </p>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {sectionProducts.map((product) => (
                      <ProductCard
                        key={product.slug}
                        name={product.name}
                        image={product.image}
                        description={product.shortDescription}
                        link={`/products/${product.slug}`}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Contact CTA */}
          <section className="mt-20 rounded-3xl bg-purple-900 px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Looking for Something Specific?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-purple-100">
              Medical supplies cover a wide range of products. Contact our team
              to discuss your requirements, request product information, or
              ask about items not listed here.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-purple-900 transition hover:bg-purple-50"
            >
              Contact Our Team
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
