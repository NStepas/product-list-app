import { useState, useEffect, ChangeEvent } from 'react';

import SearchList from './SearchList';
import DataTable from './Table/Table';
import { Loader } from './Loader/Loader';

import { IProduct, IProductItem} from '../../models';

import './Search.scss';

export const SearchProduct = (props:IProductItem) => {
  const { products } = props;
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoading(false);
    (() => {
      setFilteredProducts(
        products?.filter ? products.filter((product: IProduct) => {
          if (
            product.title?.toLowerCase().includes(searchInput.toLowerCase()) &&
            searchInput
          ) {
            return product.title
              ?.toLowerCase()
              .includes(searchInput.toLowerCase());
          } else if (
            product.category
              ?.toLowerCase()
              .includes(searchInput.toLowerCase()) &&
            searchInput
          ) {
            return product.category
              ?.toLowerCase()
              .includes(searchInput.toLowerCase());
          } else return;
        }) : null
      );
    })();
  }, [searchInput]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const delayDebounceFn = setTimeout(() => {
      setSearchInput(e.target.value);
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  };

  useEffect(() => {
    if (searchInput) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [searchInput]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className='search-container'>
          <div className='search-input-container'>
            <input
              className='search-input'
              type='search'
              placeholder='Search Product'
              onChange={handleChange}
            />
          </div>
          {active ? (
            <SearchList filteredProducts={filteredProducts} />
          ) : (
            <DataTable products={products} />
          )}
        </div>
      )}
    </div>
  );
};
