import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const Shop = () => {
  const [filterList, setFilterList] = useState(
    products.filter((item) => item.category === "sofa")
  );
  useWindowScrollToTop();

  return (
    <>
    <NavBar/>
    <Fragment>
    
      <Banner title="product" />
      <br></br><br></br>
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            
            <Col md={8}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <ShopList productItems={filterList} />
        </Container>
      </section>
     <br></br>
    </Fragment>
    <Footer/>
    </>
  );
};

export default Shop;
