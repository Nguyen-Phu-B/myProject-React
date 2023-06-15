import { useState, useEffect } from "react";
import "../CSS/content.css";
import useHookGetProduct from "../Hooks/getProduct";

const Content = ({ tittleContent, dataName }) => {
    const { listIphone, listAppleWatch, listIpad, listPhuKien, listMac } =
        useHookGetProduct();

    let productList =
        dataName == "iphone"
            ? listIphone
            : dataName == "ipad"
            ? listIpad
            : dataName == "apw"
            ? listAppleWatch
            : dataName == "phukien"
            ? listPhuKien
            : dataName == "mac"
            ? listMac
            : [];
    let validateMac = dataName == "mac" && "mac";
    return (
        <div className="content">
            <div className="box-header">
                <a href={"allProduct.html?" + tittleContent}>
                    <h2>{tittleContent}</h2>
                </a>
            </div>
            <div className="box-booth">
                {validateMac == "mac"
                    ? productList.reverse().map((item, indexItem) => {
                          return (
                              <div className="box-product" key={indexItem + 1}>
                                  <div
                                      className="box-img"
                                      // data-product_id="${idProduct}"
                                      // data-product_name="${nameProduct}"
                                  >
                                      <a href="">
                                          <img
                                              src={
                                                  item.productPhoto ||
                                                  item.promoPhoto
                                              }
                                              alt={""}
                                          />
                                      </a>
                                  </div>
                                  <div className="box-title">
                                      <a href="" title={""}>
                                          {item.name}
                                      </a>
                                  </div>
                                  <div className="box-price">
                                      <div className="price-actual">
                                          {item.price}
                                      </div>
                                      <div className="price-old">
                                          {item.retailPrice}
                                      </div>
                                  </div>
                                  <div className="btn-add-cart">
                                      <a
                                          className="box-add-cart"
                                          href=""
                                          // data-product-id="${idProduct}"
                                          // data-product-name="${title}"
                                          // data-product-color="${colorTitl}"
                                      >
                                          <div className="box-add-btn">
                                              Add to cart
                                          </div>
                                          <div className="box-icon">
                                              <i className="fa-solid fa-cart-arrow-down fa-xl"></i>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          );
                      })
                    : productList.map((item, indexItem) => {
                          return item.pOptions.map((itemSub, indexSub) => {
                              console.log("sub", itemSub);
                              return (
                                  <div
                                      className="box-product"
                                      key={indexSub + 1}
                                  >
                                      <div
                                          className="box-img"
                                          // data-product_id="${idProduct}"
                                          // data-product_name="${nameProduct}"
                                      >
                                          <a href="">
                                              <img
                                                  src={
                                                      item.productPhoto ||
                                                      item.promoPhoto
                                                  }
                                                  alt={""}
                                              />
                                          </a>
                                      </div>
                                      <div className="box-title">
                                          <a href="" title={""}>
                                              {item.name + " " + itemSub.name}
                                          </a>
                                      </div>
                                      <div className="box-price">
                                          <div className="price-actual">
                                              {item.price}
                                          </div>
                                          <div className="price-old">
                                              {item.retailPrice}
                                          </div>
                                      </div>
                                      <div className="btn-add-cart">
                                          <a
                                              className="box-add-cart"
                                              href=""
                                              // data-product-id="${idProduct}"
                                              // data-product-name="${title}"
                                              // data-product-color="${colorTitl}"
                                          >
                                              <div className="box-add-btn">
                                                  Add to cart
                                              </div>
                                              <div className="box-icon">
                                                  <i className="fa-solid fa-cart-arrow-down fa-xl"></i>
                                              </div>
                                          </a>
                                      </div>
                                  </div>
                              );
                          });
                      })}
            </div>
        </div>
    );
};

export default Content;
