import { useState } from "react";
import ContentSub from "./ContentSub";
import "./content.css";
import { useEffect } from "react";

const Content = () => {
    const [keyContent, setKeyContent] = useState("alls");

    useEffect(() => {}, [keyContent]);

    const handleClickTittle = (e, prKey) => {
        e.preventDefault();

        console.log("click", prKey);
        setKeyContent(prKey);
        window.scrollTo(0, 0);
    };

    if (keyContent == "alls") {
        return (
            <>
                <ContentSub
                    keyData={"iphone"}
                    tittle={"Iphone"}
                    onClickTittle={(e) => handleClickTittle(e, "iphone")}
                />
                <ContentSub
                    keyData={"ipad"}
                    tittle={"Ipad"}
                    onClickTittle={(e) => handleClickTittle(e, "ipad")}
                />
                <ContentSub
                    keyData={"mac"}
                    tittle={"MacBook"}
                    onClickTittle={(e) => handleClickTittle(e, "mac")}
                />
                <ContentSub
                    keyData={"apw"}
                    tittle={"Apple Watch"}
                    onClickTittle={(e) => handleClickTittle(e, "apw")}
                />
                <ContentSub
                    keyData={"phukien"}
                    tittle={"Phụ kiện"}
                    onClickTittle={(e) => handleClickTittle(e, "phukien")}
                />
            </>
        );
    }

    if (keyContent == "iphone") {
        return (
            <>
                <ContentSub
                    keyData={"iphone"}
                    tittle={"Iphone"}
                    onClickTittle={(e) => handleClickTittle(e, "iphone")}
                />
            </>
        );
    }

    if (keyContent == "ipad") {
        return (
            <>
                <ContentSub
                    keyData={"ipad"}
                    tittle={"Ipad"}
                    onClickTittle={(e) => handleClickTittle(e, "ipad")}
                />
            </>
        );
    }

    if (keyContent == "mac") {
        return (
            <>
                <ContentSub
                    keyData={"mac"}
                    tittle={"MacBook"}
                    onClickTittle={(e) => handleClickTittle(e, "mac")}
                />
            </>
        );
    }

    if (keyContent == "apw") {
        return (
            <>
                <ContentSub
                    keyData={"apw"}
                    tittle={"Apple Watch"}
                    onClickTittle={(e) => handleClickTittle(e, "apw")}
                />
            </>
        );
    }

    if (keyContent == "phukien") {
        return (
            <>
                <ContentSub
                    keyData={"phukien"}
                    tittle={"Phụ kiện"}
                    onClickTittle={(e) => handleClickTittle(e, "phukien")}
                />
            </>
        );
    }

    return null;
};

export default Content;
