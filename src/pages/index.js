import Header from '../components/layout/Header';
import HeroSection from '../components/home/HeroSection';
import InstagramSection from '../components/home/InstagramSection';
import Newsletter from '../components/home/NewsletterSection';
import Footer from '../components/layout/Footer';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import NewSection from '@/components/home/NewSection';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <NewSection />
      <InstagramSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
