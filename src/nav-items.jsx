import { Home, Zap, DollarSign } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Features",
    to: "/#features",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    title: "Pricing",
    to: "/#pricing",
    icon: <DollarSign className="h-4 w-4" />,
  },
];
