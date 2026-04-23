import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RequirementsSection from '@/components/RequirementsSection';
import ProcessSection from '@/components/ProcessSection';
import FormSection from '@/components/FormSection';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    axios.get('/api/servicios')
      .then(response => {
        setServicios(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <RequirementsSection />
      <ProcessSection />
      <FormSection />
      <Footer />
      <h1>Servicios</h1>
      <ul>
        {servicios.map(servicio => (
          <li key={servicio.id}>{servicio.nombre}</li>
        ))}
      </ul>
    </main>
  );
}
