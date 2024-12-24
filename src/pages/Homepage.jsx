import React from "react";
import headImg from "../assets/home-head.jpg";
import { Button } from "../UI/Button";
import { useForm } from 'react-hook-form';





function Homepage() {

   
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();


  return (
    <div>
        <div className="head">
            <img src={headImg} alt="Gardening" className="head-image" />
            <div className="head-content">
                <h1 className="whiteText">Amazing Discounts <br /> on Garden Products!</h1>
                <button className="head-button">Check out</button>
            </div>
        </div>
        
        <div className="promo-section">
            <h2 className="whiteText">5% off on the first order</h2>
            <div className="promo-section-container">
                <div className="promo-section-png"></div>
                <form className="form-container">
                    <div className="form-input-cont">
                        <input type="text" placeholder="Name" className="form-input"/>
                       
                        <input type="text" placeholder="Phone number" className="form-input" />
                        <input type="email" placeholder="Email" className="form-input" />
                    </div>
                    <Button  text='Get a discount'/>
                    {/* <button  type="submit" className="form-button">Get a discount</button> */}
                    {/* <button  onClick={handleClick} style={{backgroundColor:buttonColor}} type="submit" className="form-button">{buttonText}</button> */}
                </form>
            </div>
           
        </div>
    </div>
    
    
  );
}

export default Homepage;