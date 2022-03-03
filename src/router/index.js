import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Authorization
  {
    path: "/",
    name: "EntryPage",
    component: () => import("../views/Auth/EntryPage"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/register",
    name: "Registration",
    component: () => import("../views/Auth/Registration"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth/Auth"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../views/Auth/ForgotPassword"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/new-password",
    name: "NewPassword",
    component: () => import("../views/Auth/NewPassword"),
    meta: {
      layout: "auth",
    },
  },
  // Client
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../views/Client/Catalog"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/Client/Product"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Client/Cart"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/checkout-preview",
    name: "CheckoutPreview",
    component: () => import("../views/Client/CheckoutPreview"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/Client/Checkout"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Client/Profile"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/profile-edit",
    name: "ProfileEdit",
    component: () => import("../views/Client/ProfileEdit"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/orders-history",
    name: "OrdersHistory",
    component: () => import("../views/Client/OrdersHistory"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: () => import("../views/Client/Favorite"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/cart-items",
    name: "CartItems",
    component: () => import("../views/Client/CartItems"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/comparing",
    name: "Comparing",
    component: () => import("../views/Client/Comparing"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/notification",
    name: "Notification",
    component: () => import("../views/Client/Notification"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/notification-settings",
    name: "NotificationSettings",
    component: () => import("../views/Client/NotificationSettings"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/report",
    name: "Report",
    component: () => import("../views/Client/Report"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/report-graph",
    name: "ReportGraph",
    component: () => import("../views/Client/ReportGraph"),
    meta: {
      layout: "client",
    },
  },
  // Admin
  {
    path: "/admin-report",
    name: "AdminReport",
    component: () => import("../views/Admin/AdminReport"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin-catalog",
    name: "AdminCatalog",
    component: () => import("../views/Admin/AdminCatalog"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/Admin/Create"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/logs",
    name: "Logs",
    component: () => import("../views/Admin/Logs"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin-profile",
    name: "AdminProfile",
    component: () => import("../views/Admin/AdminProfile"),
    meta: {
      layout: "admin",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
