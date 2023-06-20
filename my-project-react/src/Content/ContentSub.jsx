import { useEffect, useState } from "react";
import RenderProduct from "../Components/RenderProduct";
import dataProductDf from "../Mocks/apiDTGK.json";

const ContentSub = ({
    classLimit,
    contentKey,
    keyData,
    tittle,
    onClickTittle,
}) => {
    const [product, setProduct] = useState([]);
    const [dataList, setDataList] = useState(dataProductDf);

    useEffect(() => {
        setProduct(handleGetListData(keyData));
    }, [keyData]);

    const handleGetListData = (prKeyData) => {
        let listData =
            prKeyData == "iphone"
                ? dataList.iphone
                : prKeyData == "ipad"
                ? dataList.ipad
                : prKeyData == "apw"
                ? dataList.apw
                : prKeyData == "mac"
                ? dataList.mac
                : prKeyData == "phukien"
                ? dataList.phukien
                : "";

        return listData;
    };

    const generateUniqueKey = () => {
        return (
            Math.random().toString(36).substring(2) + Date.now().toString(36)
        );
    };

    return (
        <>
            <div className="content">
                <div className="box-header">
                    <a
                        href={"?" + tittle}
                        onClick={(e) => onClickTittle(e, contentKey)}
                    >
                        <h2>{tittle}</h2>
                    </a>
                </div>
                <div className="box-booth">
                    {keyData == "mac"
                        ? product.toReversed().map((item) => {
                              return (
                                  <RenderProduct
                                      item={item}
                                      classBox={classLimit}
                                      key={generateUniqueKey()}
                                  />
                              );
                          })
                        : product.map((item) => {
                              return item.pOptions.map((itemSub) => {
                                  return (
                                      <RenderProduct
                                          item={item}
                                          classBox={classLimit}
                                          itemSub={itemSub}
                                          key={generateUniqueKey()}
                                      />
                                  );
                              });
                          })}
                </div>
            </div>
        </>
    );
};

export default ContentSub;
