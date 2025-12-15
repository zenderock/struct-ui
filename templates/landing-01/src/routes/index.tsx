import { createFileRoute } from "@tanstack/react-router";
import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";
import Authority from "~/components/Authority";
import Services from "~/components/Services";
import Footer from "~/components/Footer";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <Services />
      </main>
      <Footer />
    </>
  );
}
