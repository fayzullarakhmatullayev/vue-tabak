import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "EntryPage",
    component: () => import("../views/EntryPage"),
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/register",
    name: "Registration",
    component: () => import("../views/Registration"),
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth"),
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../views/ForgotPassword"),
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/new-password",
    name: "NewPassword",
    component: () => import("../views/NewPassword"),
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../views/Catalog"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/Product"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/checkout-preview",
    name: "CheckoutPreview",
    component: () => import("../views/CheckoutPreview"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/Checkout"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/profile-edit",
    name: "ProfileEdit",
    component: () => import("../views/ProfileEdit"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/orders-history",
    name: "OrdersHistory",
    component: () => import("../views/OrdersHistory"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: () => import("../views/Favorite"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/cart-items",
    name: "CartItems",
    component: () => import("../views/CartItems"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/comparing",
    name: "Comparing",
    component: () => import("../views/Comparing"),
    meta: {
      layout: "main",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
