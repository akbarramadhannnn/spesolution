import { useCallback, useEffect, useState } from 'react';
import ProductListSection, {
  TitleWrapper,
  ListWrapper,
  HeadingWrapper,
} from './ProductListStyles';
import { convertNumberToIdr } from '../../utils/convert';

const Index = ({ title, data }) => {
  const [quantity, setQuantity] = useState([]);
  const [subTotal, setSubTotal] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    const dataQuantity = [];
    const dataSubTotal = [];
    for (let i = 0; i < data.length; i++) {
      dataQuantity.push(1);
      dataSubTotal.push(data[i].product.price);
    }
    setQuantity(dataQuantity);
    setSubTotal(dataSubTotal);
  }, [data]);

  useEffect(() => {
    if (subTotal.length > 0) {
      const subtotal = subTotal.reduce((total, num) => total + num);
      setTotal(subtotal);
    }
  }, [subTotal]);

  const onChangeInput = useCallback(
    (e, index) => {
      const { value } = e.target;
      const numberValue = Number(value);
      setQuantity((oldState) => {
        const state = [...oldState];
        state[index] = numberValue;
        return state;
      });

      setSubTotal((oldState) => {
        const state = [...oldState];
        if (numberValue > quantity[index]) {
          state[index] = numberValue * state[index];
        } else {
          state[index] = state[index] / quantity[index];
        }
        return state;
      });
    },
    [quantity]
  );

  return (
    <ProductListSection>
      <TitleWrapper>
        <h1>{title}</h1>
      </TitleWrapper>

      <ListWrapper>
        <HeadingWrapper background="#100c08" color="#fff" textAlign="center">
          <div style={{ flex: 1 }}>
            <h3>PRODUCT</h3>
          </div>

          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, width: '200px' }}>
              <h3>QUANTITY</h3>
            </div>
            <div style={{ flex: 1, width: '200px' }}>
              <h3>SUBTOTAL</h3>
            </div>
          </div>
        </HeadingWrapper>

        {data.map((d, i) => {
          return (
            <HeadingWrapper key={i} background="#fff" color="#100c08">
              <div style={{ flex: 1 }}>
                <h3>{d.product.name}</h3>
              </div>

              <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, width: '200px', textAlign: 'center' }}>
                  <input
                    type="number"
                    value={quantity[i] || ''}
                    onChange={(e) => onChangeInput(e, i)}
                    min="1"
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    width: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h3>{subTotal[i] && convertNumberToIdr(subTotal[i])}</h3>
                </div>
              </div>
            </HeadingWrapper>
          );
        })}

        <HeadingWrapper background="#100c08" color="#fff" textAlign="center">
          <div style={{ flex: 1 }}></div>

          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, width: '200px' }}>
              <h3>TOTAL</h3>
            </div>
            <div style={{ flex: 1, width: '200px' }}>
              <h3>{total && convertNumberToIdr(total)}</h3>
            </div>
          </div>
        </HeadingWrapper>
      </ListWrapper>
    </ProductListSection>
  );
};

export default Index;
