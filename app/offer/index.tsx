import CTAOffer from "./ctaOffer";
import LeadGenerationSection from "./leadGenerationSection";
import MainSection from "./mainSection";
import OfferHeader from "./offerHeader";
import PerformanceSection from "./performaceSection";
import SEOSection from "./seoSection";

export default function TheOffer() {
  return (
    <>
      <OfferHeader />
      <section id="Our_Offer">
        <MainSection />
      </section>
      <section id="Performance">
        <PerformanceSection />
      </section>

      <SEOSection />
      <LeadGenerationSection />
      <CTAOffer />
    </>
  );
}
