import React, { Fragment, useEffect } from 'react';
import "./Home.css";
import ProductCard from './ProductCard';
import MetaData from '../layout/MetaData';
import { getProduct, clearErrors } from "../../actions/productAction";
import { useAlert } from "react-alert"
import { useSelector, useDispatch } from "react-redux";
import Loader from '../layout/Loader/Loader';
import Carousel from "react-material-ui-carousel";
import banner from "../../images/banner.jpg"
import banner2 from "../../images/banner2.jpg"
import banner3 from "../../images/banner3.jpg"
import banner4 from "../../images/banner4.jpg"
import banner5 from "../../images/banner5.jpg"


const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products)

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch((clearErrors));
    }

    dispatch(getProduct());

  }, [dispatch, error, alert])


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="FECOMMERCE" />
          <Carousel fullHeightHover={true}     
            navButtonsProps={{          
              style: {
                backgroundColor: 'cornflowerblue',
                borderRadius: 0
              }
            }}>
            <img className='caroHome' src={banner} alt="bn1" />
            <img className='caroHome' src={banner2} alt="bn2" />
            <img className='caroHome' src={banner3} alt="bn2" />
            <img className='caroHome' src={banner4} alt="bn2" />
            <img className='caroHome' src={banner5} alt="bn2" />
          </Carousel>
      
          <h2 className='homeHeading'>Featured Products</h2>

          <div className='container' id='container'>
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />

              ))}

          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home; 