import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const screenshots = [
  "/lovable-uploads/projects/gio365/unsplash-main.jpg"
];

const techColors: Record<string, string> = {
  Python: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Django: "bg-green-100 text-green-800 border-green-200",
  HTMX: "bg-blue-100 text-blue-800 border-blue-200",
  Tailwind: "bg-teal-100 text-teal-800 border-teal-200",
  Docker: "bg-blue-200 text-blue-900 border-blue-300",
  Sentry: "bg-red-100 text-red-800 border-red-200",
  "API-Football": "bg-gray-100 text-gray-800 border-gray-200",
  "Django Q": "bg-purple-100 text-purple-800 border-purple-200",
  "Amazon SES": "bg-pink-100 text-pink-800 border-pink-200",
  "Amazon S3": "bg-indigo-100 text-indigo-800 border-indigo-200",
  Environs: "bg-green-50 text-green-700 border-green-100"
};

const ProjectGio365Detail: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-background text-foreground py-12 px-4 md:px-0 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <Button variant="outline" className="mb-8 flex items-center gap-2" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back
        </Button>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img src={screenshots[0]} alt="gio365 Thumbnail" className="w-full md:w-1/2 rounded-xl shadow-lg border border-border animate-slide-up" />
          <div className="flex-1 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">gio365: <span className="text-primary">Real-Time Sports Betting Platform</span></h1>
            <p className="text-lg text-muted-foreground mb-4">A robust, full-stack Django application for real-time sports betting, integrating live football data, user management, betting logic, and a modern responsive frontend.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {["Python", "Django", "HTMX", "Tailwind", "Docker", "Sentry", "API-Football", "Django Q", "Amazon SES", "Amazon S3", "Environs"].map((tech) => (
                <span key={tech} className={`text-xs px-3 py-1 rounded-full font-semibold border ${techColors[tech] || "bg-secondary text-muted-foreground border-secondary"}`}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Screenshot Gallery */}
        <div className="mb-10 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {screenshots.map((src, i) => (
              <div key={i} className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md border border-border bg-background flex items-center justify-center">
                <img
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Details Sections */}
        <div className="grid gap-8">
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>Live and Upcoming Matches:</b> Real-time football data and odds from API-Football, upcoming fixtures, odds management with caching and rate limiting.</li>
                <li><b>Betting System:</b> Bet slip, stake/winnings calculation, bet grouping, status tracking, atomic balance updates, duplicate bet prevention.</li>
                <li><b>User Management:</b> Custom registration, profile, balance, betting history, admin panel, role-based access.</li>
                <li><b>Account Balance & Transactions:</b> Automated, atomic, and validated balance updates, unlimited mode, transaction safety.</li>
                <li><b>Modern Frontend:</b> Tailwind CSS, HTMX, modular templates, accessibility, and UX best practices.</li>
                <li><b>DevOps & Production Readiness:</b> Dockerized, robust environment management, Sentry integration, health checks.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Technical Architecture</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>Backend:</b> Django 5.x, modular apps, custom API client for API-Football, Django Q for background tasks.</li>
                <li><b>Frontend:</b> Clean template separation, HTMX for SPA-like experience, Tailwind CSS for design.</li>
                <li><b>Integrations:</b> Email (console/SES), storage (local/S3), Sentry for monitoring.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Obstacles & Solutions</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>API Rate Limiting:</b> Custom rate limiter and caching, user-friendly error handling.</li>
                <li><b>Data Consistency & Race Conditions:</b> Atomic balance updates, signals for balance creation, transaction management.</li>
                <li><b>User Experience for Betting:</b> Duplicate bet prevention, stake validation, real-time feedback, dynamic UI updates.</li>
                <li><b>Security & Permissions:</b> Role-based access control, view-level enforcement.</li>
                <li><b>Deployment Flexibility:</b> Environment variable management, local and production support.</li>
                <li><b>Error Handling & Monitoring:</b> Sentry integration, custom error pages.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Edge Cases & Best Practices</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li>Negative balances prevented, unlimited accounts handled, graceful API failure handling, robust form/session management, and testable codebase.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Potential Improvements & Out-of-the-Box Ideas</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li>WebSockets for live updates, social features, analytics dashboard, multi-sport support, responsible gambling tools, and a mobile app.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
              <p className="mb-0">gio365 is a feature-rich, production-ready sports betting platform that demonstrates advanced Django skills, thoughtful architecture, and a strong focus on user experience and reliability. It showcases expertise in API integration, real-time data handling, security, and modern frontend development.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectGio365Detail; 