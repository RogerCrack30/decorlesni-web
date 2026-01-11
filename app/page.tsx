import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventGallery from "@/components/EventGallery";
import Footer from "@/components/Footer";
import WizardContainer from "@/components/wizard/WizardContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <WizardContainer />
      <EventGallery />
      <Footer />
    </main>
  );
}
