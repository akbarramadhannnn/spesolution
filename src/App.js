import { useEffect, Fragment, useState } from 'react';
import { ProductList } from './components';
import axios from 'axios';

function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`https://spe-academy.spesolution.net/api/recruitment`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y',
        },
      })
      .then((response) => {
        setProduct(response.data);
      });
  }, []);
  return (
    <Fragment>
      <ProductList title="SPE Frontend Shop" data={product} />
    </Fragment>
  );
}

export default App;
