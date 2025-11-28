import { FC } from "react";
import Head from "next/head";
import FilterSection from "@/components/common/FilterSection";
import ListingSection from "@/components/common/ListingSection";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>BookNext | Find Your Favorite Place</title>
        <meta
          name="description"
          content="The best prices for over 2 million properties worldwide."
        />
      </Head>

      <main>
        <FilterSection />
        <div
          className="relative h-[60vh] md:h-[70vh] w-full bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `url('/assets/images/hero.jpg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Find your favorite place here!
            </h1>
            <p className="text-xl sm:text-2xl font-medium drop-shadow-md">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </div>
        <ListingSection />
      </main>
    </>
  );
};

export default Home;
