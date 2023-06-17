import { useEffect, useState } from "react";
import dataProduct from "../Mocks/apiDTGK.json";

const listDataDef = dataProduct;

const useHookGetProduct = () => {
    const [listIphone, setListIphone] = useState([]);
    const [listAppleWatch, setListAppleWatch] = useState([]);
    const [listIpad, setListIpad] = useState([]);
    const [listPhuKien, setListPhuKien] = useState([]);
    const [listMac, setListMac] = useState([]);

    useEffect(() => {
        setListIphone(listDataDef.iphone);
        setListAppleWatch(listDataDef.apw);
        setListIpad(listDataDef.ipad);
        setListPhuKien(listDataDef.phukien);
        setListMac(listDataDef.mac);
    }, [listDataDef]);

    return { listIphone, listAppleWatch, listIpad, listPhuKien, listMac };
};

export default useHookGetProduct;
