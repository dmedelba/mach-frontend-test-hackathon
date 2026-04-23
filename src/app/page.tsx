import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RequirementsSection from '@/components/RequirementsSection';
import ProcessSection from '@/components/ProcessSection';
import FormSection from '@/components/FormSection';
import Footer from '@/components/Footer';
import TipFinanciero from '@/components/TipFinanciero';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <RequirementsSection />
      <ProcessSection />
      <FormSection />
      <TipFinanciero />
      <Footer />
    </main>
  );
}