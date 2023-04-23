import ListBasedFilter from '../components/filters/listBasedFilter/ListBasedFilter';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProductCard from '../components/productCard/ProductCard';
import SortProducts from '../components/sortProducts/SortProducts';
import Pagination from '../components/pagination/Pagination';
import LineProductCard from '../components/lineProductCard/LineProductCard';
import classes from './ProductsPage.module.css';
import PriceFilter from '../components/filters/priceFilter/PriceFilter';
import { useState } from 'react';

const brandCategories = [
  { id: 391057391, name: 'Intel', quantity: '28' },
  { id: 381936482, name: 'AMD', quantity: '2' },
];

const cpuCategories = [
  { id: 321048592, name: 'AMD Ryzen', quantity: '3' },
  { id: 319540021, name: 'Intel Core I3', quantity: '3' },
  { id: 318592719, name: 'Intel Core I5', quantity: '12' },
  { id: 321905269, name: 'Intel Core I7', quantity: '6' },
  { id: 390184729, name: 'Intel Core I9', quantity: '3' },
  { id: 218491037, name: 'Other', quantity: '3' },
];

const ProductsPage = () => {
  const [productsView, setProductsView] = useState('grid');
  const [filterMobileVis, setFilterMobileVis] = useState(false);

  const chooseProductsView = function (value) {
    setProductsView(value);
  };

  const toggleFilterMobileVis = function () {
    console.log('test');
    setFilterMobileVis(!filterMobileVis);
  };

  return (
    <>
      <Header />
      <section className={classes.wrapper}>
        <div
          className={`${classes.filtersWrapper} ${
            filterMobileVis && classes.vis
          }`}
        >
          <PriceFilter />
          <ListBasedFilter title={'Brand'} categories={brandCategories} />
          <ListBasedFilter title={'CPUs'} categories={cpuCategories} />
        </div>
        <div className={classes.contentWrapper}>
          <SortProducts
            productsView={productsView}
            chooseProductsView={chooseProductsView}
          />
          <button className={classes.filterBtn} onClick={toggleFilterMobileVis}>
            Filters
          </button>
          {productsView === 'grid' ? (
            <div className={classes.gridViewWrapper}>
              <ProductCard page="products" />
              <ProductCard page="products" />
              <ProductCard page="products" />
              <ProductCard page="products" />
              <ProductCard page="products" />
              <ProductCard page="products" />
              <ProductCard page="products" />
              <ProductCard page="products" />
              <ProductCard page="products" />
              <ProductCard page="products" />
              <ProductCard page="products" />
              <ProductCard page="products" />
            </div>
          ) : (
            <div className={classes.lineViewWrapper}>
              <LineProductCard />
              <LineProductCard />
              <LineProductCard />
              <LineProductCard />
              <LineProductCard />
              <LineProductCard />
              <LineProductCard />
              <LineProductCard />
              <LineProductCard />
              <LineProductCard />
              <LineProductCard />
              <LineProductCard />
            </div>
          )}
          <Pagination />
        </div>
        <div
          className={`${classes.filterOverlay} ${
            filterMobileVis && classes.vis
          }`}
          onClick={toggleFilterMobileVis}
        ></div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsPage;
