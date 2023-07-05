import Home from "../Page/Home/Home";
import DetailProduct from "../Page/DetailProduct/DetailProduct";
import Cart from "../Page/Cart/Cart";
import ListDetails from "../Page/ListDetails/ListDetail";

// Layout
import DetailLayout from "../Layouts/DetailProduct/DetailProduct";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/detail", component: DetailProduct, layout: DetailLayout },
    { path: "/list", component: ListDetails },
    { path: "/cart", component: Cart, layout: DetailLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
