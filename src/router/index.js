import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../views/Catalog"),
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/Product"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart"),
  },
  {
    path: "/checkout-preview",
    name: "CheckoutPreview",
    component: () => import("../views/CheckoutPreview"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/Checkout"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile"),
  },
  {
    path: "/profile-edit",
    name: "ProfileEdit",
    component: () => import("../views/ProfileEdit"),
  },
  {
    path: "/orders-history",
    name: "OrdersHistory",
    component: () => import("../views/OrdersHistory"),
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: () => import("../views/Favorite"),
  },
  {
    path: "/cart-items",
    name: "CartItems",
    component: () => import("../views/CartItems"),
  },
  {
    path: "/comparing",
    name: "Comparing",
    component: () => import("../views/Comparing"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
