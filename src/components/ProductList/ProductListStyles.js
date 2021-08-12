import styled from 'styled-components';

const ProductListSection = styled.section`
  position: relative;
  padding: 30px 30px;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeadingWrapper = styled.div`
  background: ${(props) => props.background};
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px 0px;


  h3 {
    text-align: center;
    color: ${(props) => props.color};
  }

  input {
    width: 30px;
    height: 30px;
    text-align: center;
  }
`;

export default ProductListSection;
