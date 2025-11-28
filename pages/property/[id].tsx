import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
        <div className="lg:col-span-2">
          <PropertyDetail property={property} />
          <hr className="my-12 border-gray-200" />
          <ReviewSection reviews={property.reviews} />
        </div>
        <div className="lg:col-span-1 relative">
          <div className="sticky top-28 w-full">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </main>
  );
}
