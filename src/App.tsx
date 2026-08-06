import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import Index from "./pages/Index";
import JointsOilPage from "./pages/JointsOilPage";
import BeardOilPage from "./pages/BeardOilPage";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./lib/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Landing page — all products overview */}
            <Route path="/" element={<HomePage />} />
            {/* Hair Oil full page */}
            <Route path="/hair-oil" element={<Index />} />
            {/* Joints Pain Oil full page */}
            <Route path="/joints-oil" element={<JointsOilPage />} />
            {/* Beard & Mustache Growth Oil full page */}
            <Route path="/beard-oil" element={<BeardOilPage />} />
            {/* Other pages */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
