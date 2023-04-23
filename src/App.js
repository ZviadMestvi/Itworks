import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import ProductsCarousel from './components/productsCarousel/ProductsCarousel';
import SalesCarousel from './components/salesCarousel/SalesCarousel';
import RecCarousel from './components/recCarousel/RecCarousel';
import classes from './App.css';

const pcCategories = [
  'AMD Ryzen Systems',
  'I3 Systems',
  'I5 Systems',
  'I7 Systems',
  'I9 Systems',
];

const categories = [
  'Headphones',
  'Mice',
  'Keyboards',
  'Mousepads',
  'Speakers',
  'Combos',
  'Cables',
  'Microphones',
];

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <section>
        <ProductsCarousel title="PCs" categories={pcCategories} />
      </section>
      <section className={classes.saleSection}>
        <SalesCarousel />
      </section>
      <section>
        <RecCarousel />
      </section>
      <section>
        <ProductsCarousel title="" categories={categories} />
      </section>
      <Footer />
    </>
  );
};

export default App;
