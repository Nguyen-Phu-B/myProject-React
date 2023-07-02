import Home from "../Page/Home/Home";
import DetailProduct from "../Page/DetailProduct/DetailProduct";
import Cart from "../Page/Cart/Cart";
import ListDetails from "../Page/ListDetails/ListDetail";

// Layout
import HeaderOnly from "../Layouts/HeaderOnly/HeaderOnly";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/detail", component: DetailProduct, layout: HeaderOnly },
    { path: "/list", component: ListDetails },
    { path: "/cart", component: Cart, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
