"use client";
import AboutUs from "@/components/AboutUs";
import DetailCardList from "@/components/DetailCardList";
import Hero from "@/components/Hero";
import Recommended from "@/components/Recommended";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <DetailCardList />
      <AboutUs />
      <Recommended />
      <Testimonial />
    </>
  );
}
