import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import PageLoader from "@/components/PageLoader";

const Index = lazy(() => import("./pages/Index"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DonateFood = lazy(() => import("./pages/DonateFood"));
const MyDonations = lazy(() => import("./pages/MyDonations"));
const BrowseFood = lazy(() => import("./pages/BrowseFood"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminDonations = lazy(() => import("./pages/AdminDonations"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/donate" element={<DonateFood />} />
              <Route path="/my-donations" element={<MyDonations />} />
              <Route path="/browse" element={<BrowseFood />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/donations" element={<AdminDonations />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
