import Hero from "@/components/Hero";
import AboutAuthor from "@/components/AboutAuthor";
import AboutBook from "@/components/AboutBook";
import VideoTrailer from "@/components/VideoTrailer";
import Testimonials from "@/components/Testimonials";
import LatestNewsAndBlogs from "@/components/LatestNewsBlogs";
import AvailableAtSection from "@/components/AvailableAtSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AvailableAtSection variant="home" />
      <AboutAuthor />
      <AboutBook />
      <VideoTrailer />
      <Testimonials />
      <LatestNewsAndBlogs />
    </>
  );
}
