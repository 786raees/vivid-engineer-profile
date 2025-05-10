import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const screenshots = [
  "/lovable-uploads/projects/stake/dashboard.png",
  "/lovable-uploads/projects/stake/dashboard2.png",
  "/lovable-uploads/projects/stake/profile_list.png",
  "/lovable-uploads/projects/stake/login.png",
];

const techColors: Record<string, string> = {
  Python: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Django: "bg-green-100 text-green-800 border-green-200",
  HTML: "bg-orange-100 text-orange-800 border-orange-200",
  CSS: "bg-blue-100 text-blue-800 border-blue-200",
  JavaScript: "bg-yellow-50 text-yellow-700 border-yellow-100",
  Bootstrap: "bg-purple-100 text-purple-800 border-purple-200",
  Selenium: "bg-gray-100 text-gray-800 border-gray-200",
  "undetected-chromedriver": "bg-gray-200 text-gray-900 border-gray-300",
  SQLite: "bg-indigo-100 text-indigo-800 border-indigo-200",
  CapMonster: "bg-pink-100 text-pink-800 border-pink-200",
  Git: "bg-red-100 text-red-800 border-red-200",
  Virtualenv: "bg-green-50 text-green-700 border-green-100",
};

const ProjectStakeDetail: React.FC = () => {
  const navigate = useNavigate();
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  return (
    <section className="min-h-screen bg-background text-foreground py-12 px-4 md:px-0 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <Button variant="outline" className="mb-8 flex items-center gap-2" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back
        </Button>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img src="/lovable-uploads/projects/stake/dashboard.png" alt="Stake.com Bot Dashboard" className="w-full md:w-1/2 rounded-xl shadow-lg border border-border animate-slide-up" />
          <div className="flex-1 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Automated Betting Management System <span className="text-primary">(Stake.com Bot)</span></h1>
            <p className="text-lg text-muted-foreground mb-4">A sophisticated web application to automate and manage betting activities on Stake.com, featuring multi-profile control, advanced automation, and robust risk management.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {["Python", "Django", "Selenium", "SQLite", "CapMonster"].map((tech) => (
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
              <h2 className="text-2xl font-semibold mb-4">Key Responsibilities & Achievements</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>Full-Stack Development:</b> Designed and implemented the entire application using Django for the backend and web interface, and Python for the core automation logic.</li>
                <li><b>Advanced Browser Automation:</b> Engineered a robust betting bot using Selenium and undetected-chromedriver to interact with Stake.com, including:
                  <ul className="list-disc pl-6">
                    <li>Automating navigation, currency selection, bet placement, and dynamic betting strategy adjustments (e.g., Martingale).</li>
                    <li>Implementing sophisticated cookie management, proxy integration, and user-agent randomization to ensure profile integrity and avoid detection.</li>
                    <li>Integrating a CAPTCHA-solving service (CapMonster) via a browser extension to handle security challenges.</li>
                  </ul>
                </li>
                <li><b>System Architecture:</b>
                  <ul className="list-disc pl-6">
                    <li>Developed a multi-profile system allowing users to configure and run multiple independent betting agents.</li>
                    <li>Designed database models (SQLite) to store profile settings, betting configurations (bet amount, win chance, stop-loss), live cryptocurrency balances, and wagering history.</li>
                  </ul>
                </li>
                <li><b>User Interface & Experience:</b>
                  <ul className="list-disc pl-6">
                    <li>Created a user-friendly web dashboard using Django templates and Bootstrap (via django-crispy-forms) for managing profiles, viewing real-time status, and tracking performance.</li>
                    <li>Implemented features for bonus claiming automation.</li>
                  </ul>
                </li>
                <li><b>Risk Management:</b> Incorporated features like configurable stop-loss limits to help manage betting risks.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3 mb-2">
                {["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "Selenium", "undetected-chromedriver", "SQLite", "CapMonster", "Git", "Virtualenv"].map((tech) => (
                  <span key={tech} className={`text-xs px-3 py-1 rounded-full font-semibold border ${techColors[tech] || "bg-secondary text-muted-foreground border-secondary"}`}>{tech}</span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Project Highlights</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li>Demonstrates proficiency in building complex web applications with Django.</li>
                <li>Showcases advanced skills in web scraping and browser automation, including techniques to handle anti-bot measures.</li>
                <li>Highlights experience with integrating third-party services (CapMonster).</li>
                <li>Illustrates the ability to design and implement systems that manage sensitive operations and data (betting configurations, balances).</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectStakeDetail; 