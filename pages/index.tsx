import AboutUs from "@/components/AboutUs";
import DetailCardList from "@/components/DetailCardList";
import Hero from "@/components/Hero";
import Recommended from "@/components/Recommended";
import Testimonial from "@/components/Testimonial";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>August Car Parking App - Home</title>
        <meta
          name="description"
          content="August Car Parking App provides a convenient way to find and book parking spots in your city. Download our app now and enjoy hassle-free parking."
        />
      </Head>
      <Hero />
      <DetailCardList />
      <AboutUs />
      <Recommended />
      <Testimonial />
    </>
  );
}
