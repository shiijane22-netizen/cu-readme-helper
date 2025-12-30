import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MinistriesPage from "./pages/MinistriesPage";
import EventsPage from "./pages/EventsPage";
import ResourcesPage from "./pages/ResourcesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import JoinMinistryPage from "./pages/JoinMinistryPage";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";

// Ministry Pages
import MusicMinistryPage from "./pages/ministries/MusicMinistryPage";
import BibleStudyDiscipleshipPage from "./pages/ministries/BibleStudyDiscipleshipPage";
import MissionsEvangelismPage from "./pages/ministries/MissionsEvangelismPage";
import CreativeArtsPage from "./pages/ministries/CreativeArtsPage";
import PrayerMinistryPage from "./pages/ministries/PrayerMinistryPage";

// Committee Pages
import ChairmanPage from "./pages/committees/ChairmanPage";

const queryClient = new QueryClient();

// Protected Route Wrapper
const RequireAdmin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = useAuthStore((s) => s.token);
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ministries/join" element={<JoinMinistryPage />} />

          {/* Ministry Detail Pages */}
          <Route path="/ministries/music" element={<MusicMinistryPage />} />
          <Route path="/ministries/bible-study-discipleship" element={<BibleStudyDiscipleshipPage />} />
          <Route path="/ministries/missions-evangelism" element={<MissionsEvangelismPage />} />
          <Route path="/ministries/creative-arts" element={<CreativeArtsPage />} />
          <Route path="/ministries/prayer" element={<PrayerMinistryPage />} />

          {/* Committee Pages */}
          <Route path="/committees/chairman" element={<ChairmanPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <AdminDashboardPage />
              </RequireAdmin>
            }
          />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
