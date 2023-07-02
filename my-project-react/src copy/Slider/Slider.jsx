import React from "react";
import bannerIpad from "../Img/slide/banner ipad gen 9 PC11.jpeg";
import bannerAppleWatch from "../Img/slide/banner apple watch t4_Banner PC.jpeg";
import bannerMacbookAir from "../Img/slide/banner macbook air t4_Banner PC (1).jpeg";
import bannerPhuKien from "../Img/slide/banner phụ kiện PC.jpeg";

const Slider = () => {
    return (
        <div id="slide">
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="3"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="4"
                    ></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={bannerIpad}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={bannerAppleWatch}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={bannerMacbookAir}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={bannerPhuKien}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={bannerPhuKien}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-target="#carouselExampleIndicators"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-target="#carouselExampleIndicators"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;
