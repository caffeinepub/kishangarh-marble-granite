import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useLocation,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import { Footer } from "./components/Footer";
import { LogoSplash } from "./components/LogoSplash";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Exotic } from "./pages/Exotic";
import { Granite } from "./pages/Granite";
import { Home } from "./pages/Home";
import { Marble } from "./pages/Marble";
import { ProductDetail } from "./pages/ProductDetail";

const queryClient = new QueryClient();

/** Animated outlet — fades + slides in when route changes */
function AnimatedOutlet() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

// Root layout
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1">
        <AnimatedOutlet />
      </div>
      <Footer />
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919829184713"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-ocid="whatsapp.button"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300"
      >
        <SiWhatsapp size={28} color="white" />
      </a>
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const marbleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/marble",
  component: Marble,
});
const graniteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/granite",
  component: Granite,
});
const exoticRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/exotic",
  component: Exotic,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product/$slug",
  component: ProductDetail,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  marbleRoute,
  graniteRoute,
  exoticRoute,
  aboutRoute,
  contactRoute,
  productDetailRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LogoSplash />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
