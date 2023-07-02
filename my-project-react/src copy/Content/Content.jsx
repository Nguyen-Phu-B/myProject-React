import { useState, useEffect } from "react";
import ContentSub from "./ContentSub";
import "./content.css";
import ContentDetail from "./ContentDetail";

const Content = () => {
    const [keyContent, setKeyContent] = useState("");

    let url = window.location.href;
    let splitUrl = url.split("/")[1];

    useEffect(() => {
        setKeyContent(splitUrl);
    }, [keyContent]);

    const handleClickTittle = (e, prKey) => {
        // e.preventDefault();
        console.log(url);
        console.log(keyContent);
        window.scrollTo(0, 0);
    };

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

    if (!keyContent) {
        return (
            <>
                <ContentSub
                    keyData={"iphone"}
                    tittle={"Iphone"}
                    classLimit="box-limit"
                    onClickTittle={(e) => handleClickTittle(e, "iphone")}
                />
                <ContentSub
                    classLimit="box-limit"
                    keyData={"ipad"}
                    tittle={"Ipad"}
                    onClickTittle={(e) => handleClickTittle(e, "ipad")}
                />
                <ContentSub
                    classLimit="box-limit"
                    keyData={"mac"}
                    tittle={"MacBook"}
                    onClickTittle={(e) => handleClickTittle(e, "mac")}
                />
                <ContentSub
                    classLimit="box-limit"
                    keyData={"apw"}
                    tittle={"Apple Watch"}
                    onClickTittle={(e) => handleClickTittle(e, "apw")}
                />
                <ContentSub
                    classLimit="box-limit"
                    keyData={"phukien"}
                    tittle={"Phụ kiện"}
                    onClickTittle={(e) => handleClickTittle(e, "phukien")}
                />
            </>
        );
    }

    return <ContentDetail prUrl={keyContent} />;
};

export default Content;
