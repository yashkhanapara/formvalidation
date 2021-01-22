import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";

const Logincarousel = () => {
    return (
        <div className="login_back">
            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={false}
                    showIndicators={true}
                  
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <div className="text-center text-white">
                                <h5><strong>FIT BY YOU , FOR YOU</strong></h5>
                                <p>"Hello <strong>BEAUTY</strong> IT'S TIME TO <strong>BEAST</strong> <br />
                                    Your body is reflaction of your <strong>LIFESTYLE</strong> 
                                "</p>

                            </div>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <div className="text-center text-white">
                                    <h5><strong>YOU CAN DO IT</strong></h5>
                                    <p>Loving YourSelf is the greatest revolution</p>
                            </div>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <div className="text-center text-white">
                                <h3><strong>Light chusk</strong></h3>
                                <p>First text</p>

                            </div>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        </div>
    );
}

export default Logincarousel;