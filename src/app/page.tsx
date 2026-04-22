import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RequirementsSection from '@/components/RequirementsSection';
import ProcessSection from '@/components/ProcessSection';
import FormSection from '@/components/FormSection';
import Footer from '@/components/Footer';
import Counter from '@/components/Counter'; // NUEVO: Importar el componente Counter

export default function Home() {
  return (
    <main>
      <Header />
      {/* ADR-003: Integrar el componente Counter dentro de HeroSection */}
      <HeroSection>
        {/* El componente Counter se inyectará aquí, dentro de la HeroSection */}
        <div className="mt-8"> {/* Añadir un margen superior para separación visual */}
          <Counter />
        </div>
      </HeroSection>
      <FeaturesSection />
      <RequirementsSection />
      <ProcessSection />
      <FormSection />
      <Footer />
    </main>
  );
}