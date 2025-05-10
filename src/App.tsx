import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ProjectStakeDetail from "./pages/ProjectStakeDetail";
import ProjectGmailContactExtractorDetail from "./pages/ProjectGmailContactExtractorDetail";
import ProjectMLASDetail from "./pages/ProjectMLASDetail";
import ProjectGio365Detail from "./pages/ProjectGio365Detail";
import ProjectTrafficDashboardDetail from "./pages/ProjectTrafficDashboardDetail";
import ProjectServerAutomationWebDetail from "./pages/ProjectServerAutomationWebDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/stake" element={<ProjectStakeDetail />} />
          <Route path="/projects/gmail-contact-extractor" element={<ProjectGmailContactExtractorDetail />} />
          <Route path="/projects/mlas" element={<ProjectMLASDetail />} />
          <Route path="/projects/gio365" element={<ProjectGio365Detail />} />
          <Route path="/projects/traffic-dashboard" element={<ProjectTrafficDashboardDetail />} />
          <Route path="/projects/server-automation-web" element={<ProjectServerAutomationWebDetail />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
